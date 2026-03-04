import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { togglePopupActive } from '@/lib/popupStorage';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    return NextResponse.json(
      { error: '인증이 필요합니다' },
      { status: 401 }
    );
  }
  
  try {
    const { id } = await params;
    const popup = togglePopupActive(id);
    
    if (!popup) {
      return NextResponse.json(
        { error: '팝업을 찾을 수 없습니다' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, popup });
  } catch (error) {
    console.error('Toggle popup error:', error);
    return NextResponse.json(
      { error: '팝업 활성화 토글에 실패했습니다' },
      { status: 500 }
    );
  }
}
