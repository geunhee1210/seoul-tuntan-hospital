'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Popup } from '@/types/popup';

interface PopupModalProps {
  popup: Popup;
  onClose: (id: string, dontShowToday: boolean) => void;
}

export default function PopupModal({ popup, onClose }: PopupModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // 초기 위치 계산 (positionX/Y 기반)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || position) return;

    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let x: number;
    let y: number;

    if (popup.positionX === 'left') {
      x = 16;
    } else if (popup.positionX === 'right') {
      x = vw - rect.width - 16;
    } else {
      x = (vw - rect.width) / 2;
    }

    if (popup.positionY === 'top') {
      y = 16;
    } else if (popup.positionY === 'bottom') {
      y = vh - rect.height - 16;
    } else {
      y = (vh - rect.height) / 2;
    }

    setPosition({ x, y });
  }, [popup.positionX, popup.positionY, position]);

  const clamp = useCallback((x: number, y: number) => {
    const el = containerRef.current;
    if (!el) return { x, y };
    const rect = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return {
      x: Math.max(0, Math.min(x, vw - rect.width)),
      y: Math.max(0, Math.min(y, vh - rect.height)),
    };
  }, []);

  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    if (!position) return;
    setIsDragging(true);
    dragOffset.current = { x: clientX - position.x, y: clientY - position.y };
  }, [position]);

  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!isDragging) return;
    const newPos = clamp(
      clientX - dragOffset.current.x,
      clientY - dragOffset.current.y,
    );
    setPosition(newPos);
  }, [isDragging, clamp]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 전역 마우스/터치 이벤트 (드래그 중에만)
  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => handleDragMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onEnd = () => handleDragEnd();

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
  }, [isDragging, handleDragMove, handleDragEnd]);

  return (
    <div
      ref={containerRef}
      className="fixed z-50"
      style={
        position
          ? { left: position.x, top: position.y }
          : { visibility: 'hidden' as const }
      }
    >
      <div
        className="bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{
          width: `${popup.width}px`,
          maxWidth: 'calc(100vw - 2rem)',
          maxHeight: 'calc(100vh - 2rem)',
        }}
      >
        {/* 드래그 핸들 - 팝업 상단 전체 영역 */}
        <div
          className="relative flex items-center justify-center py-3 select-none bg-gray-50 border-b border-gray-200"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={(e) => {
            e.preventDefault();
            handleDragStart(e.clientX, e.clientY);
          }}
          onTouchStart={(e) => {
            if (e.touches.length === 1) {
              handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
            }
          }}
        >
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
          {/* 닫기 버튼 */}
          {popup.showCloseButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose(popup.id, false);
              }}
              className="absolute top-1/2 -translate-y-1/2 right-3 z-10 w-6 h-6 bg-gray-400 hover:bg-gray-600 rounded-full flex items-center justify-center text-white text-xs transition-colors"
              aria-label="닫기"
            >
              ✕
            </button>
          )}
        </div>

        {/* 이미지 */}
        {popup.imageUrl && (
          <div className="relative w-full" style={{ height: `${popup.height * 0.6}px` }}>
            <img
              src={popup.imageUrl}
              alt={popup.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* 콘텐츠 */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {popup.title}
          </h2>
          <div className="text-gray-700 mb-4 whitespace-pre-wrap">
            {popup.content}
          </div>

          {/* 링크 버튼 */}
          {popup.linkUrl && (
            <a
              href={popup.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#1A2B4C] text-white rounded-lg hover:bg-[#0C2E86] transition-colors font-medium mb-4"
            >
              {popup.linkText || '자세히 보기'}
            </a>
          )}

          {/* 오늘 하루 보지 않기 */}
          {popup.showTodayClose && (
            <div className="border-t border-gray-200 pt-4 mt-4">
              <button
                onClick={() => onClose(popup.id, true)}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                오늘 하루 보지 않기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
