/**
 * portfolio-data.js
 * PRD Section 6.1 FR-01: 정적 데이터 렌더링 시스템 (No-DB Engine)
 *
 * 모든 프로젝트 데이터, 프로필 정보, 미디어 경로를 구조화된 JS 객체로 관리.
 * 서버 및 DB 의존성 없이 브라우저에서 100% 독립 실행.
 */

const PORTFOLIO_DATA = {

  /* ─────────────────────────────────────────
   * PROFILE  (PRD 8 - profile 스키마)
   * ───────────────────────────────────────── */
  profile: {
    name: '프로젝트 기획 & 프론트엔드 개발자',
    role: 'Service Planner & Frontend Developer',
    tagline: '문제를 발견하고 기획하며, 인터랙티브 웹으로 직접 구현하는 올라운더',
    summary:
      '오프라인 공간 경험의 문제점을 게이미피케이션으로 혁신한 서비스 기획부터, ' +
      'Leaflet 기반 대용량 상권 지도 웹 애플리케이션 프론트엔드 개발까지 ' +
      '완결성 있는 프로덕트를 만듭니다.',
    stats: [
      { label: '서비스 기획안',       value: '1건 (이마트 콜라보)'    },
      { label: '프론트엔드 웹앱',     value: '2건 (지도/리포트)'      },
      { label: '제작 홍보/시각 에셋', value: '8+ 종'                  },
    ],
    skills: {
      planning:    ['문제 정의 (AS-IS / TO-BE)', '페르소나 & 여정 맵핑', '게이미피케이션 프로모션', 'KPI 수립 & 운영 체크리스트'],
      development: ['Vanilla JavaScript (ES6+)', 'Semantic HTML5 / Modern CSS', 'Leaflet GIS & MarkerCluster', '정적 데이터 파싱 (CSV/JSON)'],
      design:      ['카드뉴스 스토리텔링', '숏폼 비디오 디렉팅', 'VMD 포스터 기획'],
    },
  },

  /* ─────────────────────────────────────────
   * PROJECTS  (PRD 8 - projects 배열 스키마)
   * ───────────────────────────────────────── */
  projects: [
    {
      /* ── Project 1: 이마트 보물찾기 ── */
      id:       'emart-treasure-hunt',
      category: 'planning',           // planning | frontend | all
      featured: true,

      badge:      '신세계 이마트 콜라보레이션 기획',
      badgeIcon:  'fa-solid fa-award',
      badgeClass: 'badge-emart',

      title:    '고래잇 × 이마트 식재료 탐험 보물찾기',
      subtitle: '다문화 가정 주부와 미취학 아동을 위한 게이미피케이션 오프라인 쇼핑 공간 혁신 기획',
      period:   '2026.09 (신세계 2기)',
      client:   '신세계 / 이마트 x 고래잇',

      thumbnail:    '01.png',
      thumbnailAlt: '고래잇 이마트 보물찾기 카드뉴스 표지',
      thumbnailPlaceholder: null,

      tags: ['서비스 기획', '게이미피케이션', '공간 경험 디자인', '카드뉴스 6편', 'POV 숏폼 영상'],

      highlights: [
        "페르소나 '아인(베트남 출신 주부)'과 '푸이(5세 아들)'의 언어 장벽 및 매장 체류 Pain Point 해결",
        "장보기를 '불고기 레시피 재료 탐험' RPG로 전환하여 매장 체류시간(42분➔68분) 및 객단가 증대",
        '6단 SNS 카드뉴스, 4단계 매장 포스터, 1인칭 RPG POV 쇼츠 영상 등 온·오프라인 에셋 완결',
      ],

      footerLabel: '인터랙티브 기획서 열기',
      footerColor: 'var(--accent-emart)',
      footerIcon:  'fa-solid fa-arrow-up-right-from-square',
      liveWebPath: 'e.html',
      pdfPath:     '이마트 보물찾기 프로젝트 기획안.pdf',

      detail: {
        problemDefinition:
          'AS-IS: 언어 장벽이 있는 다문화 가정 주부(아인)와 5세 아동(푸이)에게 대형 마트 쇼핑은 ' +
          '복잡한 사인, 긴 동선, 낮은 체류 의지의 복합 Pain Point로 작용. 평균 체류시간 42분, 낮은 객단가.',
        solution:
          'TO-BE: 컬러·픽토그램 언어 공통 "보물지도"를 제공하고, 식재료 탐험을 RPG 퀘스트로 재설계. ' +
          '4코너 스탬프 완성 시 리워드(키링·쿠폰)를 지급하여 체류시간 +61.9%, 객단가 +18.5% 달성 목표.',
        kpis: [
          { metric: '온라인 도달 목표', value: '150,000+',   desc: '인스타그램/릴스/틱톡 통합' },
          { metric: '미션 완료율',      value: '65%',         desc: '오프라인 지도 수령 대비'  },
          { metric: '가족 체류시간',    value: '42분 ➔ 68분', desc: '+61.9% 매장 체류 증대'   },
          { metric: '고객 객단가',      value: '+18.5%',      desc: '연관 식재료 묶음 판매 효과' },
        ],
        assets: {
          cardnews: [
            { src: '01.png', step: '01. 인지', title: '이마트 보물찾기 탐험의 시작',  desc: '고래잇과 함께하는 즐거운 주말 장보기 모험 출발!'       },
            { src: '02.png', step: '02. 획득', title: '매장 입구 보물지도 수령',      desc: '오늘의 요리 테마(불고기)와 탐험 동선 확인'             },
            { src: '03.png', step: '03. 탐색', title: '컬러 사인을 따라 식재료 찾기', desc: '육류(적색), 채소(녹색) 코너에서 보물 식재료 쏙!'       },
            { src: '04.png', step: '04. 미션', title: '스탬프 퀘스트 완료',           desc: '아이의 성취감을 자극하는 4개 코너 스탬프 달성'         },
            { src: '05.png', step: '05. 보상', title: '한정판 리워드 & 쿠폰 획득',   desc: '귀여운 고래잇 키링, 스티커 및 5,000원 할인 쿠폰 지급' },
            { src: '06.png', step: '06. 예고', title: '다음 주 보물 테마 커밍순',    desc: '다음 주 새로운 요리 실루엣 예고로 지속적 재방문 유도' },
          ],
          poster: {
            src:   'image.png',
            ratio: '9:16',
            title: '글로벌 공통 언어 컬러 & 픽토그램 매장 포스터',
            steps: ['1. 보물지도 받기', '2. 색깔 찾기', '3. 보물 식재료 쏙!', '4. 스탬프 찍기'],
          },
          video: {
            src:   '5t.mp4',
            ratio: '9:16',
            title: '1인칭 POV RPG 퀘스트 숏폼 영상',
            desc:  '체력바(HP), 레벨, 퀘스트 알림 UI를 오버레이한 30초 릴스/쇼츠 바이럴 영상',
          },
          pdfLink: '이마트 보물찾기 프로젝트 기획안.pdf',
          webLink: 'e.html',
        },
        techStack: [
          { title: '기획 방법론',  tech: '더블 다이아몬드 / AS-IS TO-BE 프레임워크'     },
          { title: '비주얼 에셋', tech: 'SNS 카드뉴스 (6편), 매장 포스터, 숏폼 영상'   },
          { title: '마케팅 채널', tech: '인스타그램 릴스, 틱톡, 오프라인 VMD'           },
        ],
      },
    },

    {
      /* ── Project 2: 부산 생활 편의 시설 지도 ── */
      id:       'busan-convenience-map',
      category: 'frontend',
      featured: true,

      badge:      '웹 프론트엔드 & GIS 시각화',
      badgeIcon:  'fa-solid fa-map-location',
      badgeClass: 'badge-indigo',

      title:    '부산 생활 편의 시설 통합 인터랙티브 지도',
      subtitle: 'Leaflet 및 MarkerCluster 기반의 편의점·마트·백화점·헬스장 실시간 상권 검색 및 길찾기 웹앱',
      period:   '2026.09',
      client:   '개인 프로젝트',

      /* 썸네일 없음 → 플레이스홀더 사용 */
      thumbnail:    null,
      thumbnailAlt: null,
      thumbnailPlaceholder: {
        icon:     'fa-solid fa-map-location-dot',
        title:    '부산광역시 25+ 시설 대화형 GIS 지도',
        subtitle: 'Leaflet.markercluster + OpenStreetMap Tiles',
      },

      tags: ['Vanilla JS', 'Leaflet GIS', 'MarkerCluster', 'CSV 파싱', '반응형 UI'],

      highlights: [
        '부산 10개 구/군 편의점, 대형마트, 백화점, 헬스장 좌표 시각화 및 커스텀 클러스터링 적용',
        '카테고리별 원클릭 필터, 구/군 드롭다운 필터, 키워드 실시간 검색 및 사용자 CSV 동적 업로드 지원',
        '카카오맵 및 네이버 지도 길찾기 딥링크 연계로 웹에서 오프라인 매장 방문까지 유기적 연결',
      ],

      footerLabel: '라이브 지도 웹앱 실행',
      footerColor: '#818CF8',
      footerIcon:  'fa-solid fa-arrow-up-right-from-square',
      liveWebPath: 'map/index.html',
      pdfPath:     null,

      detail: {
        problemDefinition:
          'AS-IS: 부산 시내 편의점, 마트, 백화점, 헬스장 등 생활 밀착형 시설 정보가 ' +
          '여러 플랫폼에 분산되어 있어 한 눈에 비교·탐색하기 어려움.',
        solution:
          'TO-BE: Leaflet GIS 기반 인터랙티브 지도에 25+ 시설 데이터를 클러스터링하여 시각화, ' +
          '카테고리/지역 필터와 CSV 동적 업로드로 확장성 확보, 카카오·네이버 딥링크로 즉시 길찾기 연계.',
        kpis: [
          { metric: '시각화 시설 수',     value: '25+',   desc: '편의점·마트·백화점·헬스장' },
          { metric: '지원 구/군',         value: '10개',  desc: '부산광역시 전 구/군'       },
          { metric: '필터 카테고리',      value: '4+',    desc: '카테고리 원클릭 필터'      },
          { metric: '실시간 CSV 업로드',  value: '지원',  desc: 'HTML5 FileReader API'      },
        ],
        assets: {
          cardnews: [],
          poster:   null,
          video:    null,
          pdfLink:  null,
          webLink:  'map/index.html',
        },
        techStack: [
          { title: '지도 렌더링',  tech: 'Leaflet v1.9.4 + OpenStreetMap Tiles'   },
          { title: '클러스터링',  tech: 'Leaflet.markercluster v1.4.1'             },
          { title: '데이터 연동', tech: 'HTML5 FileReader API 기반 CSV 동적 파싱' },
          { title: 'UI 스타일링', tech: 'Tailwind CSS + 커스텀 인터랙션 CSS'     },
        ],
      },
    },
    {
      /* ── Project 3: CAN EAT 캔 음식 레시피 서비스 기획 ── */
      id:       'can-eat-recipe',
      category: 'planning',
      featured: true,

      badge:      'CAN EAT 서비스 기획',
      badgeIcon:  'fa-solid fa-utensils',
      badgeClass: 'badge-green',

      title:    'CAN EAT — 캔 음식 레시피 큐레이션 서비스',
      subtitle: '캔·통조림 식재료를 활용한 레시피 발견부터 장보기 연계까지, 식문화 접근성을 높이는 서비스 기획',
      period:   '2026.09 (신세계 2기)',
      client:   '개인 기획 프로젝트',

      thumbnail:    null,
      thumbnailAlt: null,
      thumbnailPlaceholder: {
        icon:     'fa-solid fa-utensils',
        title:    'CAN EAT — 캔 음식 레시피 서비스',
        subtitle: '캔 식재료 큐레이션 & 레시피 발견 플랫폼 기획',
      },

      tags: ['서비스 기획', '레시피 큐레이션', '식문화', 'UX 설계', '사용자 여정'],

      highlights: [
        '캔·통조림 식재료를 활용한 간편 레시피 발견 서비스로 식문화 접근 장벽 해소',
        '사용자 보유 식재료 입력 → 맞춤 레시피 추천 → 부족 재료 장보기 연계 핵심 플로우 설계',
        '5분 피칭 발표 PPT로 문제 정의 → 솔루션 → 비즈니스 모델까지 완결한 서비스 기획안 완성',
      ],

      footerLabel: '발표 기획서 PDF 보기',
      footerColor: 'var(--accent-green)',
      footerIcon:  'fa-solid fa-arrow-up-right-from-square',
      liveWebPath: 'pl/CAN EAT 5분 발표용 PPT (1).pdf',
      pdfPath:     'pl/CAN EAT 5분 발표용 PPT (1).pdf',

      detail: {
        problemDefinition:
          'AS-IS: 캔·통조림 식품은 저렴하고 보관이 쉽지만, ' +
          '"무엇을 어떻게 요리하지?"라는 레시피 발견 장벽으로 활용도가 낮음. ' +
          '특히 자취생·1인 가구·바쁜 직장인에게 캔 식재료 기반 요리 정보가 산재되어 있어 탐색 비용이 높음.',
        solution:
          'TO-BE: 보유 캔 식재료를 입력하면 즉시 맞춤 레시피를 큐레이션해주고, ' +
          '부족한 재료는 온라인 쇼핑몰로 연결하는 CAN EAT 서비스. ' +
          '식문화 접근성을 높이고 캔 식품의 재발견을 유도.',
        kpis: [
          { metric: '목표 사용자',   value: '1인 가구',   desc: '자취생·직장인 중심 타깃'   },
          { metric: '핵심 기능',     value: '3가지',      desc: '탐색·추천·장보기 연계'     },
          { metric: '기획서 완성도', value: '5분 피칭',   desc: '문제→솔루션→BM 완결 구조' },
          { metric: '발표 자료',     value: 'PDF 완성',   desc: '슬라이드 발표 덱 제출'     },
        ],
        assets: {
          cardnews: [],
          poster:   null,
          video:    null,
          pdfLink:  'pl/CAN EAT 5분 발표용 PPT (1).pdf',
          webLink:  null,
        },
        techStack: [
          { title: '기획 방법론', tech: '문제 정의 → 사용자 여정 → 솔루션 → 비즈니스 모델' },
          { title: '산출물',     tech: '5분 피칭 발표 PPT (PDF)'                           },
          { title: '타깃 시장', tech: '1인 가구 / 자취생 / 바쁜 직장인 식문화 플랫폼'      },
        ],
      },
    },
  ],
};
