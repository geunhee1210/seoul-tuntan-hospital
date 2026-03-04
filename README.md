# 서울튼튼재활의학과의원 홈페이지

재활의학과 병원을 위한 전문 웹사이트 with 팝업 배너 관리 시스템

## 주요 기능

### 공개 웹사이트

1. **병원안내**
   - 병원소개
   - 의료진소개
   - 오시는길

2. **주요 진료과목**
   - 척추 질환
   - 어깨·팔 통증
   - 무릎·다리 질환
   - 손·발 통증
   - 족부 질환

3. **물리치료**

4. **비수술치료**
   - 체외충격파
   - C-ARM
   - 프롤로주사

### 관리자 페이지

- **팝업 배너 관리**: 팝업 생성, 수정, 삭제, 활성화/비활성화
- **노출 기간 설정**: 시작일/종료일 지정
- **위치 및 크기 설정**: 팝업 위치, 크기 커스터마이징
- **오늘 하루 보지 않기** 기능 지원

### UI/UX 특징

- **Sticky 헤더**: 스크롤 시 헤더가 상단에 고정
- **드롭다운 메뉴**: 마우스 오버 시 서브메뉴 표시
- **비급여진료비 모달**: 푸터의 버튼 클릭 시 모달로 비급여 항목 표시
- **전화번호 & 빠른 버튼**: 헤더 상단에 전화번호와 "오시는 길" 버튼
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Noto Sans KR (Google Fonts)
- **Authentication**: Jose (JWT)
- **Storage**: JSON 파일 (간단한 구현, SQLite/PostgreSQL로 전환 가능)

## 시작하기

### 설치

```bash
npm install
```

### 환경 변수 설정

`.env.local` 파일을 생성하고 다음 내용을 설정:

```env
# 관리자 비밀번호 (필수)
ADMIN_PASSWORD=your-secure-password

# JWT 시크릿 키 (필수, 최소 32자 이상 권장)
JWT_SECRET=your-jwt-secret-key-min-32-characters

# 문의 메일 발송용 (선택)
NAVER_EMAIL=your-naver-email@naver.com
NAVER_PASSWORD=your-naver-password
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서:
- 공개 사이트: [http://localhost:3100](http://localhost:3100)
- 관리자 페이지: [http://localhost:3100/admin/login](http://localhost:3100/admin/login)

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 관리자 페이지 사용법

### 로그인

1. `/admin/login` 접속 (http://localhost:3100/admin/login)
2. `.env.local`에 설정한 `ADMIN_PASSWORD` 입력
3. 로그인 후 `/admin/popups`로 자동 이동

### 팝업 만들기

1. "새 팝업 만들기" 버튼 클릭
2. 팝업 정보 입력:
   - 제목, 내용 (필수)
   - 이미지 URL, 링크 URL (선택)
   - 노출 기간 (시작일/종료일)
   - 위치 및 크기
   - 표시 옵션 (닫기 버튼, 오늘 하루 보지 않기)
3. "저장" 버튼 클릭

### 팝업 관리

- **수정**: 각 팝업 카드의 "수정" 버튼
- **활성화/비활성화**: "활성화 토글" 버튼
- **삭제**: "삭제" 버튼 (확인 필요)

### 팝업 표시 규칙

- `isActive`가 `true`인 팝업만 표시
- 현재 날짜가 `startDate`와 `endDate` 사이인 경우만 표시
- `priority` 값이 낮은 순서대로 표시
- 사용자가 "오늘 하루 보지 않기" 선택 시 로컬스토리지에 저장

## 프로젝트 구조

```
src/
├── app/
│   ├── admin/                   # 관리자 페이지
│   │   ├── login/              # 로그인
│   │   ├── layout.tsx          # 관리자 레이아웃
│   │   └── popups/             # 팝업 관리
│   │       ├── page.tsx        # 목록
│   │       ├── new/            # 생성
│   │       └── [id]/edit/      # 수정
│   ├── api/
│   │   ├── admin/              # 관리자 API
│   │   │   ├── login/          # 로그인
│   │   │   ├── logout/         # 로그아웃
│   │   │   ├── verify/         # 세션 확인
│   │   │   └── popups/         # 팝업 CRUD
│   │   └── popups/
│   │       └── active/         # 활성 팝업 조회
│   ├── about/                  # 병원안내
│   ├── departments/            # 주요 진료과목
│   ├── therapy/                # 물리치료
│   ├── non-surgical/           # 비수술치료
│   ├── layout.tsx              # 루트 레이아웃
│   └── page.tsx                # 홈페이지
├── components/
│   ├── admin/                  # 관리자 컴포넌트
│   │   └── AdminHeader.tsx
│   ├── layout/                 # 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SubHero.tsx
│   ├── home/                   # 홈페이지 컴포넌트
│   ├── departments/            # 진료과목 컴포넌트
│   └── popup/                  # 팝업 컴포넌트
│       ├── PopupManager.tsx    # 팝업 관리
│       └── PopupModal.tsx      # 팝업 모달
├── lib/
│   ├── auth.ts                 # 인증 로직
│   └── popupStorage.ts         # 팝업 저장소
├── types/
│   └── popup.ts                # 타입 정의
└── data/
    └── popups.json             # 팝업 데이터
```

## 커스터마이징

### 병원 정보 수정

#### 1. 병원명 및 로고
- `src/components/layout/Header.tsx`: 헤더의 병원명 수정
- `src/app/layout.tsx`: 메타데이터(title, description) 수정

#### 2. 연락처 정보
- `src/components/layout/Header.tsx`: 상단 전화번호 수정
- `src/components/layout/Footer.tsx`: 푸터의 연락처, 주소 수정
- `src/components/home/LocationSection.tsx`: 홈페이지 위치 정보 수정

#### 3. 진료시간
- `src/app/about/introduction/page.tsx`: 병원소개 페이지
- `src/app/about/directions/page.tsx`: 오시는길 페이지

#### 4. 의료진 정보
- `src/app/about/medical-staff/page.tsx`: `medicalStaff` 배열 데이터 수정

#### 5. 비급여진료비
- `src/components/layout/Footer.tsx`: `nonCoveredItems` 배열 수정

### 지도 추가

`src/app/about/directions/page.tsx`에서 지도 플레이스홀더를 실제 지도로 교체:

**카카오맵:**
```tsx
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY"></script>
```

**네이버맵:**
```tsx
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>
```

## 데이터베이스 마이그레이션 (선택)

현재는 JSON 파일을 사용하지만, 트래픽이 증가하면 데이터베이스로 전환 권장:

### SQLite

```bash
npm install better-sqlite3
```

### PostgreSQL

```bash
npm install pg
```

`src/lib/popupStorage.ts`를 수정하여 DB 연결 구현

## 배포

### Vercel 배포 (권장)

1. GitHub에 프로젝트 업로드
2. [Vercel](https://vercel.com)에서 프로젝트 임포트
3. 환경 변수 설정:
   - `ADMIN_PASSWORD`
   - `JWT_SECRET`
   - `NAVER_EMAIL` (선택)
   - `NAVER_PASSWORD` (선택)
4. 자동 배포 완료

### 기타 호스팅

```bash
npm run build
```

빌드된 `.next` 폴더를 서버에 배포

## 보안 고려사항

1. **프로덕션 환경에서 반드시**:
   - `ADMIN_PASSWORD`: 강력한 비밀번호로 변경
   - `JWT_SECRET`: 32자 이상의 랜덤 문자열 사용

2. **HTTPS 필수**: 프로덕션 환경에서는 반드시 HTTPS 사용

3. **정기적인 업데이트**: 의존성 패키지 정기 업데이트

## 라이센스

본 프로젝트는 서울튼튼재활의학과의원 전용 웹사이트입니다.

## 문의

개발 관련 문의: 개발자 연락처
