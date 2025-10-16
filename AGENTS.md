# AGENTS.md - DermaPrompt 프로젝트 가이드

## 📋 프로젝트 개요

**DermaPrompt**는 AI 기반 피부 분석 서비스의 랜딩 페이지입니다. 사용자가 피부 사진을 업로드하면 AI가 분석하여 맞춤형 스킨케어 루틴과 리포트를 제공하는 서비스를 소개합니다.

- **프로젝트명**: my-v0-project (DermaPrompt)
- **버전**: 0.1.0
- **프레임워크**: Next.js 15.2.4
- **언어**: TypeScript
- **패키지 매니저**: pnpm
- **Node 버전**: 필요 시 확인 필요

---

## 🏗️ 프로젝트 구조

```
c:\Users\USER\Desktop\새 폴더 (2)\
├── components/                    # React 컴포넌트
│   ├── hero-section.tsx          # 메인 히어로 섹션 (AI 피부 진단 시작)
│   ├── service-intro.tsx         # 서비스 3단계 소개
│   ├── report-preview.tsx        # AI 리포트 미리보기
│   ├── usage-scenarios.tsx       # 사용 시나리오 예시
│   ├── waitlist-modal.tsx        # 웨이팅 리스트 등록 모달
│   ├── footer.tsx                # 푸터 (면책 고지 포함)
│   ├── theme-provider.tsx        # next-themes 테마 프로바이더
│   └── ui/                       # shadcn/ui 컴포넌트 (60+ 개)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── ... (기타 UI 컴포넌트)
│
├── hooks/                        # Custom React Hooks
│   ├── use-toast.ts             # Toast 알림 관리
│   └── use-mobile.ts            # 모바일 뷰포트 감지
│
├── lib/                          # 유틸리티 함수
│   └── utils.ts                 # cn() - Tailwind 클래스 병합
│
├── styles/                       # 스타일 시트
│   └── globals.css              # Tailwind CSS 전역 스타일 (CSS 변수 포함)
│
├── public/                       # 정적 파일
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   └── ... (기타 이미지 파일)
│
├── package.json                  # 프로젝트 의존성
├── tsconfig.json                # TypeScript 설정
├── next.config.mjs              # Next.js 설정
├── postcss.config.mjs           # PostCSS 설정
├── components.json              # shadcn/ui 설정
└── pnpm-lock.yaml               # pnpm 락 파일
```

---

## 🚀 애플리케이션 시작 방법

### 개발 환경 실행

```bash
# 1. 의존성 패키지 설치
pnpm install

# 2. 개발 서버 실행
pnpm dev

# 브라우저에서 http://localhost:3000 접속
```

### 프로덕션 빌드

```bash
# 1. 프로덕션 빌드
pnpm build

# 2. 프로덕션 서버 실행
pnpm start
```

### 기타 명령어

```bash
# 린트 검사
pnpm lint
```

---

## 🧩 주요 컴포넌트 및 기능

### 1. **HeroSection** (`components/hero-section.tsx`)

- **역할**: 메인 히어로 섹션, 서비스의 첫인상
- **주요 기능**:
  - "AI 피부 진단 시작하기" CTA 버튼
  - 3단계 프로세스 안내 (업로드 → 분석 → 리포트)
  - WaitlistModal 열기
- **상태 관리**: `useState`로 모달 열림 상태 관리

### 2. **ServiceIntro** (`components/service-intro.tsx`)

- **역할**: 서비스 주요 기능 소개
- **주요 기능**:
  - 사진/텍스트 입력
  - AI 분석 및 리포트
  - 맞춤형 루틴 제안
- **상태 관리**: 없음 (정적 컴포넌트)

### 3. **ReportPreview** (`components/report-preview.tsx`)

- **역할**: AI 리포트 미리보기 및 시각화
- **주요 기능**:
  - 피부 개선 정도 차트
  - 피부 상태 분석 (4단계)
  - 안전 최우선 가이드
  - 웨이팅 리스트 등록 CTA
- **상태 관리**: `useState`로 모달 열림 상태 관리

### 4. **UsageScenarios** (`components/usage-scenarios.tsx`)

- **역할**: 사용 시나리오 예시 (페르소나 기반)
- **주요 기능**:
  - 민감성 피부, 출근 전 진단, 콘텐츠 크리에이터 사례
  - 수평 스크롤 카드 레이아웃
- **상태 관리**: 없음 (정적 컴포넌트)

### 5. **WaitlistModal** (`components/waitlist-modal.tsx`)

- **역할**: 웨이팅 리스트 등록 폼 모달
- **주요 기능**:
  - 이름, 이메일 입력
  - 로딩 상태 표시
  - 성공 메시지 표시 (2초 후 자동 닫힘)
  - **TODO**: Notion API 연동 필요 (현재 시뮬레이션)
- **상태 관리**:
  - `name`, `email` (폼 입력)
  - `isLoading` (제출 상태)
  - `isSuccess` (성공 상태)
  - `error` (에러 메시지)

### 6. **Footer** (`components/footer.tsx`)

- **역할**: 푸터 (면책 고지, 소셜 링크)
- **주요 기능**:
  - AI 의료 행위 면책 고지
  - SNS 링크 (Instagram, Twitter, YouTube)
- **상태 관리**: 없음 (정적 컴포넌트)

---

## 🎨 스타일링 및 UI

### Tailwind CSS

- **버전**: v4.1.9
- **설정 파일**: `styles/globals.css`
- **주요 특징**:
  - CSS 변수 기반 테마 시스템
  - 다크 모드 지원 (`next-themes` 사용)
  - OKLCH 색상 공간 사용
  - 커스텀 변수: `--radius`, `--background`, `--foreground`, 등

### shadcn/ui

- **스타일**: new-york
- **설정 파일**: `components.json`
- **컴포넌트 수**: 60+ (Accordion, Alert, Button, Card, Dialog, Input, 등)
- **아이콘 라이브러리**: lucide-react

### 색상 팔레트

- **Primary**: `#6eb5af` (민트 그린)
- **Background**: `#fef9f5` (베이지)
- **Text**: `#2d2d2d` (다크 그레이)
- **Accent**: `#f4a89f` (핑크)

---

## 🔄 상태 관리

### 전략

- **최소화된 상태 관리**: 복잡한 전역 상태 관리 라이브러리 없음
- **React Hooks만 사용**: `useState`로 로컬 상태 관리
- **Context API 사용하지 않음**: 컴포넌트 간 props drilling

### 상태를 가진 컴포넌트

1. **HeroSection**: `isModalOpen` (모달 열림 여부)
2. **ReportPreview**: `isModalOpen` (모달 열림 여부)
3. **WaitlistModal**: `name`, `email`, `isLoading`, `isSuccess`, `error`

### 커스텀 훅

- **useToast** (`hooks/use-toast.ts`): Toast 알림 관리 (reducer 패턴 사용)
- **useMobile** (`hooks/use-mobile.ts`): 모바일 뷰포트 감지

---

## 📦 주요 의존성

### Core

- **next**: 15.2.4 (React 프레임워크)
- **react**: 19 (UI 라이브러리)
- **react-dom**: 19
- **typescript**: 5

### UI & Styling

- **tailwindcss**: 4.1.9
- **@radix-ui/\***: Headless UI 컴포넌트 (30+ 패키지)
- **lucide-react**: 0.454.0 (아이콘)
- **next-themes**: 0.4.6 (다크 모드)
- **clsx** + **tailwind-merge**: 클래스 병합 유틸리티

### Forms & Validation

- **react-hook-form**: 7.60.0
- **@hookform/resolvers**: 3.10.0
- **zod**: 3.25.76 (스키마 검증)

### Charts & Visualization

- **recharts**: 2.15.4 (차트 라이브러리)

### Utilities

- **date-fns**: 4.1.0 (날짜 처리)
- **cmdk**: 1.0.4 (Command 팔레트)
- **sonner**: 1.7.4 (Toast 알림)

---

## 🔧 설정 파일

### `next.config.mjs`

```javascript
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
}
```

### `tsconfig.json`

- **Paths Alias**: `@/*` → `./\*`
- **JSX**: preserve
- **Module Resolution**: bundler

### `components.json` (shadcn/ui)

- **Style**: new-york
- **RSC**: true
- **CSS Variables**: true
- **Icon Library**: lucide

---

## 🚧 TODO 및 개선 사항

### 1. **App Router 설정 누락**

- 현재 `app/` 폴더가 없음
- `app/page.tsx`, `app/layout.tsx` 생성 필요
- 컴포넌트를 app/page.tsx에서 조합하여 렌더링

### 2. **Notion API 연동**

- `components/waitlist-modal.tsx`의 TODO 주석 참고
- Notion API 설정 필요: `lib/notion.ts`, `actions/notion.ts` 생성
- 서버 액션으로 웨이팅 리스트 데이터 저장

### 3. **환경 변수 설정**

- `.env.local` 파일 생성
- `NOTION_API_KEY`, `NOTION_DATABASE_ID` 추가

### 4. **SEO 최적화**

- `app/layout.tsx`에 메타데이터 추가
- Open Graph, Twitter Card 설정

### 5. **반응형 테스트**

- 모바일, 태블릿, 데스크톱 뷰 검증

---

## 📖 개발 가이드라인 (Cursor Rules)

프로젝트의 `.cursor/rules/myrule.mdc` 참고:

1. **페이지 작성**: 단일 파일로 작성, 불필요한 컴포넌트 분리 지양
2. **Notion API**: `lib/notion.ts`, `actions/notion.ts` 두 파일에만 설정
3. **API 호출**: Next.js 서버 액션만 사용
4. **스타일링**: Tailwind CSS만 사용, 별도 컴포넌트 분리 없음
5. **상태 관리**: 최소화, `useReducer` 사용 자제
6. **타입**: 간단한 타입/인터페이스만 사용
7. **패키지 매니저**: pnpm

---

## 🤝 협업 가이드

### 브랜치 전략

- (아직 정의되지 않음, 필요 시 추가)

### 커밋 컨벤션

- (아직 정의되지 않음, 필요 시 추가)

### 코드 리뷰 프로세스

- (아직 정의되지 않음, 필요 시 추가)

---

## 📞 지원 및 연락처

- **프로젝트 소유자**: (정보 없음)
- **이슈 트래커**: (정보 없음)
- **문서**: 이 파일 참고

---

## 🔍 트러블슈팅

### 문제: `pnpm not found`

**해결책**:

```bash
npm install -g pnpm
```

### 문제: 포트 3000이 이미 사용 중

**해결책**:

```bash
pnpm dev -- -p 3001
```

### 문제: TypeScript 에러

**해결책**:

- `next.config.mjs`에서 `ignoreBuildErrors: true`로 설정되어 있음
- 개발 중에는 무시되지만, 프로덕션 전에 해결 권장

---

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [shadcn/ui 문서](https://ui.shadcn.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Radix UI 문서](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

**마지막 업데이트**: 2025년 10월 15일  
**작성자**: AI Agent (Cursor)


