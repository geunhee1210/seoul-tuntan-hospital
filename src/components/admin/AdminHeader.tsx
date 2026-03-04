'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link href="/admin/popups">
            <h1 className="text-2xl font-bold text-gray-900">
              서울튼튼재활의학과의원 관리자
            </h1>
            <p className="text-sm text-gray-600">팝업 배너 관리</p>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href="/"
            target="_blank"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            사이트 보기
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
}
