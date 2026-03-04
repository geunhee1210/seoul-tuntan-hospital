'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/admin/verify');
        const data = await res.json();

        if (!data.authenticated) {
          router.push('/admin/login');
        } else {
          setLoading(false);
        }
      } catch {
        router.push('/admin/login');
      }
    };

    // 로그인 페이지는 인증 체크 안 함
    if (window.location.pathname === '/admin/login') {
      setLoading(false);
    } else {
      checkAuth();
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">로딩 중...</div>
      </div>
    );
  }

  return <>{children}</>;
}
