import { NextResponse } from 'next/server';
import { getActivePopups } from '@/lib/popupStorage';

export async function GET() {
  try {
    const popups = getActivePopups();
    return NextResponse.json({ popups });
  } catch (error) {
    console.error('Get active popups error:', error);
    return NextResponse.json(
      { error: '활성 팝업을 불러오는데 실패했습니다' },
      { status: 500 }
    );
  }
}

// 캐싱 비활성화
export const dynamic = 'force-dynamic';
