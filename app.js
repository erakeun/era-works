const PROJECTS = [
  {
    id: '01', name: '메일 명함 생성기', date: '2026.06.02', access: 'public',
    description: '이름·소속·연락처·로고·캐릭터를 골라 메일용 명함 이미지를 바로 만드는 도구.',
    url: 'https://erakeun.github.io/mail-card-maker/',
    guideUrl: 'https://drive.google.com/drive/folders/1W7KVJj9QsAgtvrMVm1shcBtO0EuMFYbg?usp=drive_link',
    tags: ['제작기', 'PNG', '브라우저 도구'], visual: 'card-maker', tone: 'blue', preview: 'MAIL CARD MAKER'
  },
  {
    id: '02', name: '행사용 명패 생성기', date: '2026.07.29', access: 'public',
    description: '참석자 명단으로 행사 명패를 여러 명 한 번에 만들고 양면·A4 출력까지 정리하는 자동 제작기.',
    url: 'https://erakeun.github.io/nameplate-maker/',
    guideUrl: 'https://drive.google.com/drive/folders/1PAlU32av2R772kF-FpZHUMxsRUE-7B2Y?usp=drive_link',
    tags: ['제작기', '대량 생성', '인쇄'], visual: 'nameplate', tone: 'blue', preview: 'NAMEPLATE MAKER'
  },
  {
    id: '03', name: 'HY-ERICA 기사 아카이브', date: '2026.08.25', access: 'case',
    description: '여러 호에 흩어진 교지 기사를 검색하고 필요한 원문 위치까지 빠르게 찾도록 구성한 디지털 아카이브.',
    tags: ['아카이브', '검색', '자료 관리'], visual: 'archive', tone: 'sky', preview: 'ARTICLE ARCHIVE',
    case: {
      problem: '기사 확인 때마다 호별 PDF를 하나씩 열어보는 데 시간이 오래 걸리고, 원하는 기사의 위치를 다시 찾는 과정이 반복됐습니다.',
      flow: ['기사 정보 정리', '키워드·발행호 검색', '검색 결과 확인', '원문 위치 연결'],
      features: ['기사 메타데이터 검색', '발행호별 분류', '원문 위치 연결'],
      apply: '교지·소식지·보도자료처럼 누적 자료가 많은 학교와 기관의 디지털 아카이브에 적용할 수 있습니다.'
    }
  },
  {
    id: '04', name: '안내문 제작기', date: '2026.08.25', access: 'public',
    description: '가로·세로 템플릿에 제목, 로고, 캐릭터를 배치해 행사 안내문을 만드는 도구.',
    url: 'https://erakeun.github.io/notice-maker/',
    guideUrl: 'https://drive.google.com/drive/folders/1z2wTuXZKaiA6gN-SEdIlV8BPCjnwpXyf?usp=drive_link',
    tags: ['제작기', '템플릿', '포스터'], visual: 'poster', tone: 'warm', preview: 'NOTICE MAKER'
  },
  {
    id: '05', name: '웰컴보드 제작기', date: '2026.08.26', access: 'public',
    description: '대형 스크린용 환영 이미지를 템플릿·문구·로고 조합으로 고해상도 제작하는 도구.',
    url: 'https://erakeun.github.io/welcome-board-maker/', tags: ['제작기', '웰컴보드', '고해상도'], visual: 'welcome', tone: 'blue', preview: 'WELCOME BOARD'
  },
  {
    id: '06', name: 'ERICA 보도자료 제출 시스템', date: '2026.08.26', access: 'public', operational: true,
    description: '배포·게재 조건을 골라 보도자료와 이미지를 담당자에게 일관된 형식으로 전달하는 제출 시스템.',
    url: 'https://erakeun.github.io/erica-pr-request/', tags: ['업무 폼', '자료 접수', '자동 전달'], visual: 'form', tone: 'sky', preview: 'PRESS RELEASE'
  },
  {
    id: '07', name: '캐릭터 활용 신청 시스템', date: '2026.08.27', access: 'case',
    description: '대학 캐릭터 활용 신청을 받고 담당자가 승인·보완·불허 처리하는 업무 시스템.',
    tags: ['신청', '승인', '관리 흐름'], visual: 'form', tone: 'violet', preview: 'CHARACTER REQUEST',
    case: {
      problem: '캐릭터 활용 신청이 여러 경로로 접수돼 필수 항목 확인과 처리 상태 관리가 어려웠습니다.',
      flow: ['활용 목적·계획 입력', '제출 내용 검토', '승인·보완·불허 결정', '결과 안내 및 이력 관리'],
      features: ['신청 항목 표준화', '승인·보완·불허 처리', '신청 이력 관리'],
      apply: '캐릭터·로고 등 기관 브랜드 자산의 사용 승인 업무에 적용할 수 있습니다.'
    }
  },
  {
    id: '08', name: '하냥이 인형탈 대여 시스템', date: '2026.08.27', access: 'case',
    description: '대여 가능일 확인부터 신청, 승인·거절, 결과 안내까지 연결한 인형탈 예약 시스템.',
    tags: ['대여', '달력', '승인'], visual: 'calendar', tone: 'violet', preview: 'COSTUME RENTAL',
    case: {
      problem: '대여 가능일 확인과 신청·승인 안내를 개별 연락으로 처리해 일정 조율에 시간이 많이 들었습니다.',
      flow: ['대여 가능일 확인', '이용 일정·목적 신청', '담당자 승인·거절', '결과 안내 및 예약 반영'],
      features: ['대여 가능일 달력', '신청 승인·거절', '결과 메일 안내'],
      apply: '공용 장비·행사용품·공간의 예약 관리에도 적용할 수 있습니다.'
    }
  },
  {
    id: '09', name: '아고라 대관 시스템', date: '2026.08.28', access: 'public', operational: true,
    description: '공간별 예약 신청과 승인·불허 코멘트, 관리자 운영까지 묶은 대관 관리 시스템.',
    url: 'https://erakeun.github.io/agora-rental/',
    guideUrl: 'https://drive.google.com/drive/folders/18XS0eGhYlIFs8Mhxc6VoaohdbwQKFB1V?usp=drive_link',
    tags: ['대관', '예약', '관리자'], visual: 'calendar', tone: 'blue', preview: 'SPACE RESERVATION'
  },
  {
    id: '10', name: 'ERICA 촬영·취재 지원 요청', date: '2026.08.28', access: 'case',
    description: '교내 촬영과 취재 지원 요청을 필요한 일정·내용과 함께 접수하는 업무 요청 시스템.',
    tags: ['촬영', '취재', '업무 요청'], visual: 'form', tone: 'sky', preview: 'MEDIA SUPPORT',
    case: {
      problem: '촬영·취재 요청마다 전달 형식이 달라 필요한 일정과 내용을 다시 확인해야 했습니다.',
      flow: ['요청 유형 선택', '일정·장소·요청 내용 입력', '담당자 접수·검토', '지원 여부 안내'],
      features: ['요청 유형별 접수', '필수 정보 표준화', '담당자 전달용 내용 정리'],
      apply: '사진·영상·취재·홍보 지원처럼 사전 정보가 필요한 협업 요청 업무에 적용할 수 있습니다.'
    }
  },
  {
    id: '11', name: '근로장학생 관리시스템', date: '2026.08.29', access: 'case',
    description: '근로장학생 정보와 개인별 근무일정, 주·월 근무표, 결근·대타 및 예산 현황을 한곳에서 관리하는 시스템.',
    guideUrl: 'https://drive.google.com/drive/folders/1FmQyEXxmZ-DjyqSx_DiwW8wnIbmr6txy?usp=drive_link',
    tags: ['근로장학생', '근무 일정', '예산 관리'], visual: 'dashboard', tone: 'green', preview: 'WORK STUDENT',
    case: {
      problem: '학생 정보와 근무 일정, 결근·대타, 예산 현황이 여러 문서에 흩어져 관리가 복잡했습니다.',
      flow: ['학기·학생 정보 등록', '개인별 근무 일정 입력', '결근·대타 내역 반영', '주·월 근무표와 예산 확인'],
      features: ['개인별 근무 달력', '주·월 근무표 자동 정리', '공휴일 반영 및 예산 예측'],
      apply: '근로장학생·조교·단기 인력처럼 일정과 예산을 함께 관리하는 업무에 적용할 수 있습니다.'
    }
  },
  {
    id: '12', name: 'ERICA 캠퍼스맵', date: '2026.08.30', access: 'public',
    description: '건물 번호·건물명으로 위치를 검색하고 연결된 건물의 내부 안내도까지 확인하는 인터랙티브 캠퍼스맵.',
    url: 'https://erakeun.github.io/erica-campus-map/',
    guideUrl: 'https://drive.google.com/drive/folders/1j8p8RhnUy2_PmOg10kwG5ZGpCsbBkpZm?usp=drive_link',
    tags: ['캠퍼스맵', '건물 검색', '길찾기'], visual: 'map', tone: 'green', preview: 'CAMPUS MAP'
  },
  {
    id: '13', name: '홍보물품 재고관리 시스템', date: '2026.08.31', access: 'case',
    description: '홍보물품의 입고부터 출고·반납·폐기·분실·실사까지 한 흐름으로 기록하는 내부 재고관리 시스템.',
    guideUrl: 'https://drive.google.com/drive/folders/1KWpZ4S2w2LFhhQfIRzGBC5t86FC3TTXe?usp=drive_link',
    tags: ['재고 관리', '입출고', '이력 관리'], visual: 'dashboard', tone: 'blue', preview: 'INVENTORY',
    case: {
      problem: '품목별 실제 수량과 변동 사유가 여러 문서에 흩어져 현재 재고와 확인이 필요한 품목을 한눈에 보기 어려웠습니다.',
      flow: ['품목 등록', '입고·출고 기록', '재고 자동 반영', '부족 품목 확인'],
      features: ['변동 이력 기록', '현재 재고 현황', '부족 품목 표시'],
      apply: '기념품·행사용품·소모품을 관리하는 대학 부서나 공공기관의 소규모 재고 업무에 적용할 수 있습니다.'
    }
  },
  {
    id: '14', name: '무인기부코너 관리시스템', date: '2026.08.31', access: 'case',
    description: '여러 무인기부코너의 상품·재고·매출과 조정 이력을 지점별로 관리하는 운영 시스템.',
    tags: ['지점 관리', '재고·매출', '점검 이력'], visual: 'dashboard', tone: 'green', preview: 'NANUM CORNER',
    case: {
      problem: '지점마다 흩어진 재고와 매출 기록을 같은 기준으로 관리하기 어렵고, 조정 사유와 점검 이력을 추적하기 번거로웠습니다.',
      flow: ['지점 선택', '입고·판매·조정 기록', '재고·매출 반영', '점검 이력 확인'],
      features: ['지점별 현황', '상품·재고 관리', '조정·점검 이력'],
      apply: '무인판매대·기부매장·부서별 물품 거점을 운영하는 조직의 현황 관리에 적용할 수 있습니다.'
    }
  },
  {
    id: '15', name: '디지털 사이니지 제작기', date: '2026.08.31', access: 'public',
    description: '세로형 디지털 사이니지에 맞춰 텍스트·로고·색상과 템플릿을 조합해 안내 화면을 만드는 도구.',
    url: 'https://erakeun.github.io/digital-signage-maker/', tags: ['사이니지', '9:16', '템플릿'], visual: 'signage', tone: 'blue', preview: 'SIGNAGE MAKER'
  },
  {
    id: '16', name: '차량 운행일지 시스템', date: '2026.08.31', access: 'case',
    description: '부서 차량의 운행 정보를 모바일에서 입력하고 기록을 자동 누적하는 업무 도구.',
    guideUrl: 'https://drive.google.com/drive/folders/1vB-6NBjl1E__dRO3uoFifAtkMhrOXOQu?usp=sharing',
    tags: ['차량 관리', '모바일 입력', '자동 누적'], visual: 'form', tone: 'sky', preview: 'DRIVING LOG',
    case: {
      problem: '종이 또는 사후 입력 방식에서는 기록 누락이 생기고, 월별 운행 내역을 다시 취합하는 데 시간이 들었습니다.',
      flow: ['운행 직후 입력', '필수 항목 확인', '기록 자동 저장', '기간별 현황 확인'],
      features: ['모바일 입력', '운행거리·목적 기록', '기간별 기록 관리'],
      apply: '공용차량·현장차량·시설관리 차량의 간단한 운행 기록과 월별 취합 업무에 적용할 수 있습니다.'
    }
  },
  {
    id: '17', name: '시설 방문 신청 시스템', date: '2026.09.02', access: 'case',
    description: '시설 방문에 필요한 정보를 한 번에 접수하고 담당 부서의 검토 흐름까지 연결한 신청 시스템.',
    tags: ['방문 신청', '검토 절차', '업무 폼'], visual: 'form', tone: 'violet', preview: 'VISIT REQUEST',
    case: {
      problem: '방문 정보가 여러 경로로 들어오면서 누락 확인과 담당 부서 전달이 반복되고, 검토 상태를 한눈에 파악하기 어려웠습니다.',
      flow: ['방문 정보 입력', '필수 항목 확인', '담당 부서 검토', '결과 안내'],
      features: ['방문 일정 접수', '필수 항목 검증', '검토 단계 정리'],
      apply: '시설 방문·견학·기관 투어처럼 사전 확인과 부서 간 전달이 필요한 신청 업무에 적용할 수 있습니다.'
    }
  },
  {
    id: '18', name: '나눔 서포터즈 기부금 수불대장', date: '2026.09.04', access: 'case',
    description: '나눔 서포터즈의 기부금 수입·지출 내역과 운영 일정을 한곳에서 관리하는 업무 시스템.',
    tags: ['나눔 서포터즈', '기부금', '수불대장'], visual: 'dashboard', tone: 'green', preview: 'NANUM SUPPORTERS',
    case: {
      problem: '기부금 수입·지출 내역과 운영 일정이 분리돼 전체 현황을 한눈에 파악하기 어려웠습니다.',
      flow: ['수입·지출 내역 등록', '활동 일정 기록', '항목별 내역 집계', '운영 현황 확인'],
      features: ['기부금 수입·지출 기록', '항목별 수불 내역 조회', '활동 일정 통합 관리'],
      apply: '학생단체·캠페인·소규모 기금처럼 회계 내역과 운영 일정을 함께 관리하는 업무에 적용할 수 있습니다.'
    }
  },
  {
    id: '19', name: 'ERICA 오늘밥', date: '2026.09.04', access: 'public',
    description: 'ERICA 교내 식당의 오늘 메뉴와 운영 정보를 식당별·시간대별로 빠르게 확인하는 초경량 메뉴 사이트.',
    url: 'https://erakeun.github.io/erica-today-menu/', tags: ['오늘의 메뉴', '교내 식당', '자동 갱신'], visual: 'menu', tone: 'sky', preview: 'TODAY MENU'
  }
];

const ACCESS = {
  public: { label: '직접 사용 가능', action: '직접 사용해보기', icon: '↗' },
  case: { label: '외부용 사례 요약', action: '사례 자세히 보기', icon: '→' }
};

const grid = document.querySelector('#projectGrid');
const dialog = document.querySelector('#caseDialog');
let currentCaseId = null;

const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
})[character]);

function lineSet() {
  return '<div class="mock-lines"><div class="mock-line"></div><div class="mock-line short"></div><div class="mock-line"></div></div>';
}

function previewMarkup(project) {
  const bar = `<div class="preview-bar"><i></i><i></i><i></i><em class="preview-chip">${escapeHtml(project.preview)}</em></div>`;
  let content = '';

  switch (project.visual) {
    case 'card-maker':
      content = `<div class="mock card-maker"><div class="mock-sheet"><div class="mock-person">홍 길 동</div><div class="mock-role">HANYANG UNIVERSITY ERICA</div><div class="mock-blue-line"></div>${lineSet()}</div></div>`;
      break;
    case 'nameplate':
      content = '<div class="mock nameplate"><div class="plate"><b>홍 길 동</b><span>HANYANG UNIVERSITY ERICA</span><i></i></div></div>';
      break;
    case 'archive':
      content = '<div class="mock archive"><div class="mock-search">자료 제목·키워드 검색</div><div class="archive-row"><i></i><b>VOL. 04</b></div><div class="archive-row"><i></i><b>VOL. 03</b></div><div class="archive-row"><i></i><b>VOL. 02</b></div><div class="archive-row"><i></i><b>VOL. 01</b></div></div>';
      break;
    case 'poster':
      content = '<div class="mock poster"><div class="poster-sheet"><small>NOTICE</small><b>행사 안내문<br>제작 예시</b></div></div>';
      break;
    case 'welcome':
      content = '<div class="mock welcome"><div class="welcome-screen"><div><small>HANYANG UNIVERSITY ERICA</small><b>WELCOME<br>TO ERICA</b></div></div></div>';
      break;
    case 'form':
      content = `<div class="mock form"><div class="mock-form-title">${escapeHtml(project.name)}</div><div class="mock-field"></div><div class="mock-field"></div><div class="mock-field large"></div><div class="mock-submit">신청 내용 확인</div></div>`;
      break;
    case 'calendar':
      content = `<div class="mock calendar"><div class="calendar-title">${escapeHtml(project.name)}</div><div class="calendar-grid">${'<i></i>'.repeat(28)}</div></div>`;
      break;
    case 'dashboard':
      content = `<div class="mock dashboard"><div class="dash-head"><b>${escapeHtml(project.name)}</b><span>DASHBOARD</span></div><div class="dash-stats"><div class="dash-stat"><b>24</b><small>전체 항목</small></div><div class="dash-stat"><b>18</b><small>처리 완료</small></div><div class="dash-stat"><b>03</b><small>확인 필요</small></div></div>${'<div class="dash-row"><i></i><i></i><i></i></div>'.repeat(4)}</div>`;
      break;
    case 'map':
      content = '<div class="mock map"><div class="map-road"></div><div class="map-road second"></div><i class="map-building b1"></i><i class="map-building b2"></i><i class="map-building b3"></i><i class="map-building b4"></i><b class="map-pin p1">101</b><b class="map-pin p2">206</b><b class="map-pin p3">301</b></div>';
      break;
    case 'signage':
      content = '<div class="mock signage"><div class="signage-controls"><b>화면 설정</b><i></i><i></i><i></i><i></i><i></i></div><div class="signage-display"><span>행사 안내<br>디지털 사이니지</span></div></div>';
      break;
    case 'menu':
      content = '<div class="mock menu"><div class="menu-head"><b>ERICA 오늘의 메뉴</b><small>오늘 뭐 먹지?</small></div><div class="menu-tabs"><i></i><i></i><i></i></div><div class="meal-grid"><div class="meal-card"><b>학생식당</b><i></i><i></i></div><div class="meal-card"><b>창의인재원</b><i></i><i></i></div></div></div>';
      break;
    default:
      content = `<div class="mock generic"><div class="mock-kicker">ERA WORKS</div><div class="mock-title">${escapeHtml(project.name)}</div>${lineSet()}<div class="mock-actions"><i></i><i></i></div></div>`;
  }

  return `<div class="preview-window">${bar}${content}</div>`;
}

function guideMarkup(project) {
  if (!project.guideUrl) {
    return `
      <div class="guide-bar unavailable" aria-disabled="true" aria-label="${escapeHtml(project.name)} 설계자료 준비 중">
        <span class="guide-icon" aria-hidden="true">↓</span>
        <span class="guide-copy"><strong>설계방법</strong><small>외부 공유용 자료</small></span>
        <span class="guide-action">준비 중</span>
      </div>`;
  }

  return `
    <a class="guide-bar" href="${escapeHtml(project.guideUrl)}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" aria-label="${escapeHtml(project.name)} 설계자료 열어보기">
      <span class="guide-icon" aria-hidden="true">↓</span>
      <span class="guide-copy"><strong>설계방법</strong><small>설치자료 · 배포파일</small></span>
      <span class="guide-action">열어보기 ↗</span>
    </a>`;
}

function cardMarkup(project) {
  const access = ACCESS[project.access];
  const body = `
    <div class="preview tone-${escapeHtml(project.tone)}" aria-hidden="true">${previewMarkup(project)}</div>
    <div class="project-body">
      <div class="card-meta"><span class="number">${escapeHtml(project.id)}</span><span class="status ${escapeHtml(project.access)}">${escapeHtml(access.label)}</span></div>
      <h3>${escapeHtml(project.name)}</h3>
      <p class="description">${escapeHtml(project.description)}</p>
      <div class="tags">${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
      ${project.operational ? '<p class="live-note">실제 운영 중인 서비스입니다. 테스트 제출은 삼가 주세요.</p>' : ''}
      <div class="card-action"><span>${escapeHtml(access.action)}</span><span class="action-arrow" aria-hidden="true">${access.icon}</span></div>
    </div>`;

  let card = '';
  if (project.access === 'case') {
    card = `<button class="project-card" type="button" data-case="${escapeHtml(project.id)}" data-access="case" aria-label="${escapeHtml(project.name)} 사례 자세히 보기">${body}</button>`;
  } else {
    card = `<a class="project-card" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer" data-access="${escapeHtml(project.access)}" aria-label="${escapeHtml(project.name)} ${escapeHtml(access.action)}">${body}</a>`;
  }

  return `<article class="project-item">${card}${guideMarkup(project)}</article>`;
}

function renderProjects(filter = 'all') {
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(project => project.access === filter);
  grid.innerHTML = visible.map(cardMarkup).join('');
  document.querySelector('#visibleCount').textContent = visible.length;
  grid.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => openCase(button.dataset.case)));
}

function openCase(id) {
  const project = PROJECTS.find(item => item.id === id && item.access === 'case');
  if (!project) return;
  currentCaseId = id;
  document.querySelector('#dialogPreview').className = `dialog-preview tone-${project.tone}`;
  document.querySelector('#dialogPreview').innerHTML = previewMarkup(project);
  document.querySelector('#dialogNumber').textContent = `PROJECT ${project.id}`;
  document.querySelector('#dialogTitle').textContent = project.name;
  document.querySelector('#dialogDescription').textContent = project.description;
  document.querySelector('#dialogProblem').textContent = project.case.problem;
  document.querySelector('#dialogFlow').innerHTML = project.case.flow.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  document.querySelector('#dialogFeatures').innerHTML = project.case.features.map(item => `<li>${escapeHtml(item)}</li>`).join('');
  document.querySelector('#dialogApply').textContent = project.case.apply;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

function closeCase() {
  dialog.close();
  document.body.classList.remove('dialog-open');
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderProjects(button.dataset.filter);
  });
});

document.querySelectorAll('.dialog-close, .dialog-close-secondary').forEach(button => button.addEventListener('click', closeCase));
dialog.addEventListener('click', event => {
  if (event.target === dialog) closeCase();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.querySelector('#askAboutCase').addEventListener('click', () => {
  const project = PROJECTS.find(item => item.id === currentCaseId);
  closeCase();
  const details = document.querySelector('.inquiry-details');
  details.open = true;
  if (project) document.querySelector('#reference').value = project.name;
  document.querySelector('#inquiry').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelectorAll('a[href="#inquiry"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.inquiry-details').open = true;
  });
});

const referenceSelect = document.querySelector('#reference');
PROJECTS.forEach(project => {
  const option = document.createElement('option');
  option.value = project.name;
  option.textContent = project.name;
  referenceSelect.appendChild(option);
});

document.querySelector('#inquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const value = name => form.elements[name].value.trim();
  const subject = `[ERA WORKS] 업무 적용 문의 - ${value('organization')}`;
  const body = [
    '[ERA WORKS · 업무 적용 문의]', '',
    `이름: ${value('name')}`,
    `소속 기관·부서: ${value('organization')}`,
    `이메일: ${value('email')}`,
    `관심 프로젝트: ${value('reference')}`, '',
    '현재 겪고 있는 불편', value('problem'), '',
    '만들고 싶은 업무 흐름', value('workflow'), '',
    `현재 사용하는 도구: ${value('currentTool') || '미작성'}`,
    `희망 시기: ${value('timing') || '미작성'}`
  ].join('\n');
  window.location.href = `mailto:keun0810@hanyang.ac.kr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const counts = PROJECTS.reduce((result, project) => {
  result[project.access] += 1;
  return result;
}, { public: 0, case: 0 });

document.querySelector('#totalCount').textContent = PROJECTS.length;
document.querySelector('#publicCount').textContent = counts.public;
document.querySelector('#caseCount').textContent = counts.case;
document.querySelector('#year').textContent = new Date().getFullYear();
renderProjects();
