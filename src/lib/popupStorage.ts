import fs from 'fs';
import path from 'path';
import { Popup } from '@/types/popup';

const DATA_FILE = path.join(process.cwd(), 'data', 'popups.json');

// 데이터 파일이 존재하는지 확인하고 없으면 생성
function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ popups: [] }, null, 2));
  }
}

export function getAllPopups(): Popup[] {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  const parsed = JSON.parse(data);
  return parsed.popups || [];
}

export function getPopupById(id: string): Popup | null {
  const popups = getAllPopups();
  return popups.find(p => p.id === id) || null;
}

export function getActivePopups(): Popup[] {
  const popups = getAllPopups();
  const now = new Date();
  
  return popups
    .filter(popup => {
      if (!popup.isActive) return false;
      
      const start = new Date(popup.startDate);
      const end = new Date(popup.endDate);
      
      return now >= start && now <= end;
    })
    .sort((a, b) => a.priority - b.priority);
}

export function savePopup(popup: Popup): void {
  ensureDataFile();
  const popups = getAllPopups();
  const index = popups.findIndex(p => p.id === popup.id);
  
  if (index >= 0) {
    popups[index] = popup;
  } else {
    popups.push(popup);
  }
  
  fs.writeFileSync(DATA_FILE, JSON.stringify({ popups }, null, 2));
}

export function deletePopup(id: string): boolean {
  ensureDataFile();
  const popups = getAllPopups();
  const filtered = popups.filter(p => p.id !== id);
  
  if (filtered.length === popups.length) {
    return false; // 삭제할 팝업이 없음
  }
  
  fs.writeFileSync(DATA_FILE, JSON.stringify({ popups: filtered }, null, 2));
  return true;
}

export function togglePopupActive(id: string): Popup | null {
  const popup = getPopupById(id);
  if (!popup) return null;
  
  popup.isActive = !popup.isActive;
  popup.updatedAt = new Date().toISOString();
  savePopup(popup);
  
  return popup;
}
