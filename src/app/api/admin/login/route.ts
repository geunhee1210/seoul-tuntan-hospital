import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, createToken, setToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    if (!password) {
      return NextResponse.json(
        { success: false, error: '비밀번호를 입력해주세요' },
        { status: 400 }
      );
    }
    
    const isValid = await verifyPassword(password);
    
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: '비밀번호가 올바르지 않습니다' },
        { status: 401 }
      );
    }
    
    const token = await createToken();
    await setToken(token);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: '로그인 처리 중 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}
