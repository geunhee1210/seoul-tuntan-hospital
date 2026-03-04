'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    if (!sdkLoaded || !mapRef.current) return;
    if (!window.kakao || !window.kakao.maps) return;

    window.kakao.maps.load(() => {
      if (!mapRef.current) return;

      const geocoder = new window.kakao.maps.services.Geocoder();
      const address = '충청북도 증평군 증평읍 중앙로 184-1';

      geocoder.addressSearch(address, (result: any, status: any) => {
        let center;
        if (status === window.kakao.maps.services.Status.OK) {
          center = new window.kakao.maps.LatLng(result[0].y, result[0].x);
        } else {
          center = new window.kakao.maps.LatLng(36.7855, 127.5815);
        }

        const map = new window.kakao.maps.Map(mapRef.current, {
          center,
          level: 3,
        });

        const marker = new window.kakao.maps.Marker({
          map,
          position: center,
        });

        const infowindow = new window.kakao.maps.InfoWindow({
          content:
            '<div style="padding:5px 10px;font-size:13px;font-weight:bold;white-space:nowrap;">서울튼튼재활의학과의원</div>',
        });
        infowindow.open(map, marker);
      });
    });
  }, [sdkLoaded]);

  if (!KAKAO_APP_KEY) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
        <p>카카오맵 API 키가 설정되지 않았습니다.</p>
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('[KakaoMap] SDK 로드 성공');
          setSdkLoaded(true);
        }}
        onError={(e) => {
          console.error('[KakaoMap] SDK 로드 실패:', e);
        }}
      />
      <div ref={mapRef} className="w-full h-full" />
    </>
  );
}
