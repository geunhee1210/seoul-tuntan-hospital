'use client';

import { useEffect, useState } from 'react';
import { Popup } from '@/types/popup';
import PopupModal from './PopupModal';

export default function PopupManager() {
  const [popups, setPopups] = useState<Popup[]>([]);
  const [closedPopups, setClosedPopups] = useState<Set<string>>(new Set());

  useEffect(() => {
    // 활성화된 팝업 가져오기
    fetch('/api/popups/active')
      .then((res) => res.json())
      .then((data) => {
        if (data.popups) {
          setPopups(data.popups);
        }
      })
      .catch((err) => console.error('Failed to fetch popups:', err));

    // 로컬스토리지에서 닫은 팝업 정보 불러오기
    const today = new Date().toDateString();
    const stored = localStorage.getItem('closedPopups');
    if (stored) {
      try {
        const { date, ids } = JSON.parse(stored);
        if (date === today) {
          setClosedPopups(new Set(ids));
        } else {
          // 날짜가 다르면 초기화
          localStorage.removeItem('closedPopups');
        }
      } catch (err) {
        console.error('Failed to parse closed popups:', err);
        localStorage.removeItem('closedPopups');
      }
    }
  }, []);

  const handleClose = (id: string, dontShowToday: boolean) => {
    if (dontShowToday) {
      const today = new Date().toDateString();
      const newClosed = new Set(closedPopups).add(id);
      localStorage.setItem(
        'closedPopups',
        JSON.stringify({
          date: today,
          ids: Array.from(newClosed),
        })
      );
      setClosedPopups(newClosed);
    } else {
      setClosedPopups((prev) => new Set(prev).add(id));
    }
  };

  const visiblePopups = popups.filter((popup) => !closedPopups.has(popup.id));

  return (
    <>
      {visiblePopups.map((popup) => (
        <PopupModal key={popup.id} popup={popup} onClose={handleClose} />
      ))}
    </>
  );
}
