'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    naver: any;
  }
}

const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

export default function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    if (!sdkLoaded || !mapRef.current) return;
    if (!window.naver || !window.naver.maps) return;

    // 충청북도 증평군 증평읍 중앙로 184-1
    const position = new window.naver.maps.LatLng(36.7854, 127.5816);

    const map = new window.naver.maps.Map(mapRef.current, {
      center: position,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    });

    const marker = new window.naver.maps.Marker({
      position,
      map,
    });

    const infoWindow = new window.naver.maps.InfoWindow({
      content:
        '<div style="padding:10px 14px;font-size:13px;font-weight:bold;white-space:nowrap;border:none;">서울튼튼재활의학과의원</div>',
    });
    infoWindow.open(map, marker);
  }, [sdkLoaded]);

  if (!NAVER_CLIENT_ID) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
        <div className="text-center">
          <svg className="w-12 h-12 mx-auto mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="font-medium">충청북도 증평군 증평읍 중앙로 184-1</p>
          <p className="text-sm mt-1">Y&amp;P빌딩 2, 3층</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => setSdkLoaded(true)}
        onError={(e) => console.error('[NaverMap] SDK 로드 실패:', e)}
      />
      <div ref={mapRef} className="w-full h-full" />
    </>
  );
}
