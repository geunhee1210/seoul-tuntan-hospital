export interface Popup {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  linkUrl?: string;
  linkText?: string;
  
  // 노출 설정
  isActive: boolean;
  startDate: string; // ISO 8601 format
  endDate: string;
  
  // 위치 및 크기
  width: number;
  height: number;
  positionX: 'left' | 'center' | 'right';
  positionY: 'top' | 'center' | 'bottom';
  
  // 표시 설정
  showCloseButton: boolean;
  showTodayClose: boolean;
  priority: number;
  
  // 메타데이터
  createdAt: string;
  updatedAt: string;
  createdBy: string;
}

export interface PopupFormData {
  title: string;
  content: string;
  imageUrl?: string;
  linkUrl?: string;
  linkText?: string;
  isActive: boolean;
  startDate: string;
  endDate: string;
  width: number;
  height: number;
  positionX: 'left' | 'center' | 'right';
  positionY: 'top' | 'center' | 'bottom';
  showCloseButton: boolean;
  showTodayClose: boolean;
  priority: number;
}
