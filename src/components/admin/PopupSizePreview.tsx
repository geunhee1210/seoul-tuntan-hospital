'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface PopupSizePreviewProps {
  width: number;
  height: number;
  onChange: (width: number, height: number) => void;
}

const MIN_W = 200;
const MIN_H = 150;
const MAX_W = 1200;
const MAX_H = 1200;

// 미리보기 영역 내에서 축소 비율 계산
function getScale(w: number, h: number, containerW: number, containerH: number) {
  const scaleX = containerW / w;
  const scaleY = containerH / h;
  return Math.min(scaleX, scaleY, 1); // 1 이하일 때만 축소
}

export default function PopupSizePreview({ width, height, onChange }: PopupSizePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const resizeDir = useRef('');
  const resizeStart = useRef({ x: 0, y: 0, w: 0, h: 0 });
  const [containerSize, setContainerSize] = useState({ w: 600, h: 400 });

  // 컨테이너 크기 측정
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      const { width: cw, height: ch } = entries[0].contentRect;
      setContainerSize({ w: cw, h: ch });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scale = getScale(width, height, containerSize.w - 40, containerSize.h - 40);

  const handleResizeStart = useCallback((dir: string, clientX: number, clientY: number) => {
    setIsResizing(true);
    resizeDir.current = dir;
    resizeStart.current = { x: clientX, y: clientY, w: width, h: height };
  }, [width, height]);

  const handleResizeMove = useCallback((clientX: number, clientY: number) => {
    if (!isResizing) return;
    const { x: sx, y: sy, w: sw, h: sh } = resizeStart.current;
    const dir = resizeDir.current;
    // 마우스 delta를 실제 픽셀 단위로 변환 (축소 비율 보정)
    const dx = (clientX - sx) / scale;
    const dy = (clientY - sy) / scale;

    let newW = sw;
    let newH = sh;

    if (dir.includes('e')) newW = sw + dx;
    if (dir.includes('w')) newW = sw - dx;
    if (dir.includes('s')) newH = sh + dy;
    if (dir.includes('n')) newH = sh - dy;

    newW = Math.round(Math.max(MIN_W, Math.min(MAX_W, newW)));
    newH = Math.round(Math.max(MIN_H, Math.min(MAX_H, newH)));

    onChange(newW, newH);
  }, [isResizing, scale, onChange]);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (!isResizing) return;

    const onMouseMove = (e: MouseEvent) => handleResizeMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) handleResizeMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onEnd = () => handleResizeEnd();

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onEnd);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isResizing, handleResizeMove, handleResizeEnd]);

  const directions = ['n', 's', 'e', 'w', 'ne', 'nw', 'se', 'sw'] as const;
  const cursors: Record<string, string> = {
    n: 'ns-resize', s: 'ns-resize', e: 'ew-resize', w: 'ew-resize',
    ne: 'nesw-resize', sw: 'nesw-resize', nw: 'nwse-resize', se: 'nwse-resize',
  };

  const renderHandle = (dir: string) => {
    const isCorner = dir.length === 2;
    const edgeSize = 8;
    const cornerSize = 14;

    const style: React.CSSProperties = {
      position: 'absolute',
      cursor: cursors[dir],
      zIndex: 10,
    };

    if (isCorner) {
      const half = cornerSize / 2;
      if (dir.includes('n')) style.top = -half;
      if (dir.includes('s')) style.bottom = -half;
      if (dir.includes('w')) style.left = -half;
      if (dir.includes('e')) style.right = -half;
      style.width = cornerSize;
      style.height = cornerSize;
    } else {
      if (dir === 'n') { style.top = -(edgeSize / 2); style.left = cornerSize; style.right = cornerSize; style.height = edgeSize; }
      if (dir === 's') { style.bottom = -(edgeSize / 2); style.left = cornerSize; style.right = cornerSize; style.height = edgeSize; }
      if (dir === 'e') { style.right = -(edgeSize / 2); style.top = cornerSize; style.bottom = cornerSize; style.width = edgeSize; }
      if (dir === 'w') { style.left = -(edgeSize / 2); style.top = cornerSize; style.bottom = cornerSize; style.width = edgeSize; }
    }

    return (
      <div
        key={dir}
        className={`${isCorner ? 'bg-blue-500 rounded-sm hover:bg-blue-600' : 'hover:bg-blue-400/30'} transition-colors`}
        style={style}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleResizeStart(dir, e.clientX, e.clientY);
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          if (e.touches.length === 1) {
            handleResizeStart(dir, e.touches[0].clientX, e.touches[0].clientY);
          }
        }}
      />
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center select-none"
      style={{ height: 400, overflow: 'hidden' }}
    >
      {/* 축소된 미리보기 */}
      <div
        className="relative bg-white rounded-lg shadow-lg border border-gray-300"
        style={{
          width: width * scale,
          height: height * scale,
        }}
      >
        {/* 상단 바 미리보기 */}
        <div
          className="bg-gray-50 border-b border-gray-200 flex items-center justify-center"
          style={{ height: 32 * scale }}
        >
          <div
            className="bg-gray-300 rounded-full"
            style={{ width: 40 * scale, height: 5 * scale }}
          />
        </div>

        {/* 콘텐츠 영역 미리보기 */}
        <div className="flex-1 p-2 overflow-hidden" style={{ fontSize: 10 * scale }}>
          <div className="bg-gray-200 rounded" style={{ height: '40%', marginBottom: 4 * scale }} />
          <div className="bg-gray-200 rounded" style={{ height: 8 * scale, width: '70%', marginBottom: 3 * scale }} />
          <div className="bg-gray-200 rounded" style={{ height: 6 * scale, width: '90%', marginBottom: 2 * scale }} />
          <div className="bg-gray-200 rounded" style={{ height: 6 * scale, width: '50%' }} />
        </div>

        {/* 8방향 리사이즈 핸들 */}
        {directions.map(renderHandle)}
      </div>

      {/* 크기 표시 */}
      <div className="absolute bottom-2 right-3 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
        {width} x {height}px
        {scale < 1 && <span className="ml-1 text-gray-400">({Math.round(scale * 100)}%)</span>}
      </div>

      {isResizing && (
        <div className="absolute inset-0 z-20" style={{ cursor: cursors[resizeDir.current] }} />
      )}
    </div>
  );
}
