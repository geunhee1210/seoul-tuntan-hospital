import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { getAllPopups, savePopup } from '@/lib/popupStorage';
import { Popup } from '@/types/popup';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    return NextResponse.json(
      { error: '인증이 필요합니다' },
      { status: 401 }
    );
  }
  
  try {
    const popups = getAllPopups();
    return NextResponse.json({ popups });
  } catch (error) {
    console.error('Get popups error:', error);
    return NextResponse.json(
      { error: '팝업 목록을 불러오는데 실패했습니다' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    return NextResponse.json(
      { error: '인증이 필요합니다' },
      { status: 401 }
    );
  }
  
  try {
    const data = await request.json();
    
    // 필수 필드 검증
    if (!data.title || !data.content || !data.startDate || !data.endDate) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요' },
        { status: 400 }
      );
    }
    
    const now = new Date().toISOString();
    const popup: Popup = {
      id: uuidv4(),
      title: data.title,
      content: data.content,
      imageUrl: data.imageUrl || undefined,
      linkUrl: data.linkUrl || undefined,
      linkText: data.linkText || undefined,
      isActive: data.isActive !== undefined ? data.isActive : true,
      startDate: data.startDate,
      endDate: data.endDate,
      width: data.width || 500,
      height: data.height || 600,
      positionX: data.positionX || 'center',
      positionY: data.positionY || 'center',
      showCloseButton: data.showCloseButton !== undefined ? data.showCloseButton : true,
      showTodayClose: data.showTodayClose !== undefined ? data.showTodayClose : true,
      priority: data.priority || 0,
      createdAt: now,
      updatedAt: now,
      createdBy: 'admin',
    };
    
    savePopup(popup);
    
    return NextResponse.json({ success: true, popup });
  } catch (error) {
    console.error('Create popup error:', error);
    return NextResponse.json(
      { error: '팝업 생성에 실패했습니다' },
      { status: 500 }
    );
  }
}
