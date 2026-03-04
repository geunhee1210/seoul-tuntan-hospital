'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Popup } from '@/types/popup';
import AdminHeader from '@/components/admin/AdminHeader';

export default function PopupsPage() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPopups();
  }, []);

  const fetchPopups = async () => {
    try {
      const res = await fetch('/api/admin/popups');
      const data = await res.json();

      if (data.popups) {
        setPopups(data.popups.sort((a: Popup, b: Popup) => a.priority - b.priority));
      }
    } catch (err) {
      setError('팝업 목록을 불러오는데 실패했습니다');
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/popups/${id}/toggle`, {
        method: 'PATCH',
      });

      const data = await res.json();

      if (data.success) {
        fetchPopups();
      }
    } catch (err) {
      alert('활성화 토글에 실패했습니다');
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`"${title}" 팝업을 삭제하시겠습니까?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/popups/${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.success) {
        fetchPopups();
      }
    } catch (err) {
      alert('팝업 삭제에 실패했습니다');
    }
  };

  if (loading) {
    return (
      <>
        <AdminHeader />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">로딩 중...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">팝업 목록</h2>
          <Link
            href="/admin/popups/new"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            + 새 팝업 만들기
          </Link>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {popups.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600 mb-4">등록된 팝업이 없습니다</p>
            <Link
              href="/admin/popups/new"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              첫 팝업 만들기
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {popups.map((popup) => (
              <div
                key={popup.id}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-6"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {popup.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          popup.isActive
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {popup.isActive ? <><span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span> 활성화</> : <><span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-1"></span> 비활성화</>}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{popup.content}</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>
                        기간: {new Date(popup.startDate).toLocaleDateString()} ~{' '}
                        {new Date(popup.endDate).toLocaleDateString()}
                      </span>
                      <span>우선순위: {popup.priority}</span>
                      <span>
                        크기: {popup.width}x{popup.height}px
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/admin/popups/${popup.id}/edit`}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    수정
                  </Link>
                  <button
                    onClick={() => handleToggle(popup.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      popup.isActive
                        ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {popup.isActive ? '비활성화' : '활성화'}
                  </button>
                  <button
                    onClick={() => handleDelete(popup.id, popup.title)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
