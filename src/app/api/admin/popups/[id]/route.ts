import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { getPopupById, savePopup, deletePopup } from '@/lib/popupStorage';

export async function GET(
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
    const popup = getPopupById(id);
    
    if (!popup) {
      return NextResponse.json(
        { error: '팝업을 찾을 수 없습니다' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ popup });
  } catch (error) {
    console.error('Get popup error:', error);
    return NextResponse.json(
      { error: '팝업을 불러오는데 실패했습니다' },
      { status: 500 }
    );
  }
}

export async function PUT(
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
    const popup = getPopupById(id);
    
    if (!popup) {
      return NextResponse.json(
        { error: '팝업을 찾을 수 없습니다' },
        { status: 404 }
      );
    }
    
    const data = await request.json();
    
    // 필수 필드 검증
    if (!data.title || !data.content || !data.startDate || !data.endDate) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요' },
        { status: 400 }
      );
    }
    
    const updatedPopup = {
      ...popup,
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl || undefined,
      linkUrl: data.linkUrl || undefined,
      linkText: data.linkText || undefined,
      isActive: data.isActive !== undefined ? data.isActive : popup.isActive,
      startDate: data.startDate,
      endDate: data.endDate,
      width: data.width || popup.width,
      height: data.height || popup.height,
      positionX: data.positionX || popup.positionX,
      positionY: data.positionY || popup.positionY,
      showCloseButton: data.showCloseButton !== undefined ? data.showCloseButton : popup.showCloseButton,
      showTodayClose: data.showTodayClose !== undefined ? data.showTodayClose : popup.showTodayClose,
      priority: data.priority !== undefined ? data.priority : popup.priority,
      updatedAt: new Date().toISOString(),
    };
    
    savePopup(updatedPopup);
    
    return NextResponse.json({ success: true, popup: updatedPopup });
  } catch (error) {
    console.error('Update popup error:', error);
    return NextResponse.json(
      { error: '팝업 수정에 실패했습니다' },
      { status: 500 }
    );
  }
}

export async function DELETE(
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
    const success = deletePopup(id);
    
    if (!success) {
      return NextResponse.json(
        { error: '팝업을 찾을 수 없습니다' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete popup error:', error);
    return NextResponse.json(
      { error: '팝업 삭제에 실패했습니다' },
      { status: 500 }
    );
  }
}
