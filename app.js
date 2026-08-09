const EXAM_DATE = '2026-10-29';
const STATE_KEY = 'jy_ielts_simple_v1';
const RESET_KEY = 'jy_ielts_reset_20261029';
const DOC_SCHEDULE_KEY = 'jy_ielts_schedule_docs_20260810_v17';
const TODO_SEED_KEY = 'jy_ielts_todos_20260811_v2';
const app = document.getElementById('app');

const DEFAULT_TODOS = [
  { id: 'todo-20260811-clothes', title: '캐리어 안에 여름 가을 옷', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-phone-case', title: '휴대폰(13프로 케이스)', date: '2026-08-11', group: 'shipping', done: false },
  { id: 'todo-20260811-charger', title: '배터리 충전기', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-ipad', title: '아이패드', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-cosmetics', title: '화장품', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-tumbler', title: '텀블러', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-seagate', title: '시게이트 외장하드', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-medicine', title: '생리약', date: '2026-08-11', group: 'shipping', done: false },
  { id: 'todo-20260811-stationery', title: '필기도구', date: '2026-08-11', group: 'shipping', done: false },
  { id: 'todo-20260811-hair-iron', title: '고데기', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-gifts', title: '친구들 제주 선물', date: '2026-08-11', group: 'carry', done: false },
  { id: 'todo-20260811-english-books', title: '영어 책', date: '2026-08-11', group: 'shipping', done: false },
  { id: 'todo-20260811-some-clothes', title: '일부 옷', date: '2026-08-11', group: 'shipping', done: false },
  { id: 'todo-20260811-spare-shoes', title: '여분의 신발', date: '2026-08-11', group: 'shipping', done: false },
  { id: 'todo-20260811-mouse', title: '마우스', date: '2026-08-11', group: 'shipping', done: false }
];

const DOC_SCHEDULE = [
  { id: 'doc-20260810-interview', date: '2026-08-10', title: '디지털헤리티지 과정 면접', time: '10:00', category: 'heritage' },
  { id: 'doc-20260810-gifts', date: '2026-08-10', title: '즈믈 · 친구들 선물 사기', time: '11:00 이후', category: 'personal' },
  { id: 'doc-20260811-personal', date: '2026-08-11', title: '개인 · 비행기, 고시원 계약', time: '', category: 'personal' },
  { id: 'doc-20260811-craft', date: '2026-08-11', title: '공예 기획 · 오리엔테이션 및 공통교육 1회차', time: '14:00–17:00', category: 'craft' },
  { id: 'doc-20260812-english-makeup', date: '2026-08-12', title: 'Cambly 수업', time: '15:00', category: 'english' },
  { id: 'doc-20260812-personal', date: '2026-08-12', title: '개인 · 예지 언니 약속 (홍대)', time: '18:00 이후', category: 'friend' },
  { id: 'doc-20260813-craft', date: '2026-08-13', title: '공예 기획 · 공통교육 2강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260813-english', date: '2026-08-13', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260814-friend', date: '2026-08-14', title: '개인 · 친구 약속 (분당)', time: '18:30 이후', category: 'friend' },
  { id: 'doc-20260815-personal', date: '2026-08-15', title: '개인 · 대학 한국화 친구들 약속 (상수)', time: '', category: 'friend' },
  { id: 'doc-20260816-friends', date: '2026-08-16', title: '개인 · 고등학교 한국화 친구들 약속 (한남동)', time: '13:00', category: 'friend' },
  { id: 'doc-20260816-english', date: '2026-08-16', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20260818-craft', date: '2026-08-18', title: '공예 기획 · 실무교육 1강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260819-heritage', date: '2026-08-19', title: '디지털헤리티지 공주 · 온보딩', time: '', category: 'heritage' },
  { id: 'doc-20260820-heritage', date: '2026-08-20', title: '디지털헤리티지 공주 · 온보딩', time: '', category: 'heritage' },
  { id: 'doc-20260820-english', date: '2026-08-20', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260821-heritage', date: '2026-08-21', title: '디지털헤리티지 공주 · 온보딩', time: '', category: 'heritage' },
  { id: 'doc-20260823-english', date: '2026-08-23', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20260825-craft', date: '2026-08-25', title: '공예 기획 · 실무교육 2강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260826-heritage', date: '2026-08-26', title: '디지털헤리티지 공주 · 심화 직무교육', time: '', category: 'heritage' },
  { id: 'doc-20260827-heritage', date: '2026-08-27', title: '디지털헤리티지 공주 · 심화 직무교육', time: '', category: 'heritage' },
  { id: 'doc-20260827-english', date: '2026-08-27', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260830-english', date: '2026-08-28', title: 'Cambly 수업', time: '23:00', category: 'english' },
  { id: 'doc-20260901-craft', date: '2026-09-01', title: '공예 기획 · 실무교육 3강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260902-heritage', date: '2026-09-02', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260903-heritage', date: '2026-09-03', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260903-english', date: '2026-09-03', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260906-english', date: '2026-09-06', title: 'Cambly 수업', time: '21:30', category: 'english' },
  { id: 'doc-20260908-craft', date: '2026-09-08', title: '공예 기획 · 실무교육 4강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260908-sibling-birthday', date: '2026-09-08', title: '동생 생일', time: '', category: 'personal' },
  { id: 'doc-20260909-heritage', date: '2026-09-09', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260910-heritage', date: '2026-09-10', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260910-english', date: '2026-09-10', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260913-english', date: '2026-09-13', title: 'Cambly 수업', time: '21:30', category: 'english' },
  { id: 'doc-20260915-craft', date: '2026-09-15', title: '공예 기획 · 실무교육 5강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260916-heritage', date: '2026-09-16', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260917-heritage', date: '2026-09-17', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260917-english', date: '2026-09-17', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260920-english', date: '2026-09-20', title: 'Cambly 수업', time: '21:30', category: 'english' },
  { id: 'doc-20260923-heritage', date: '2026-09-23', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260924-holiday', date: '2026-09-24', title: '추석 연휴', time: '', category: 'holiday' },
  { id: 'doc-20260924-english', date: '2026-09-24', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260925-holiday', date: '2026-09-25', title: '추석', time: '', category: 'holiday' },
  { id: 'doc-20260926-holiday', date: '2026-09-26', title: '추석 연휴', time: '', category: 'holiday' },
  { id: 'doc-20260927-english', date: '2026-09-27', title: 'Cambly 수업', time: '21:30', category: 'english' },
  { id: 'doc-20260930-heritage', date: '2026-09-30', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261001-heritage', date: '2026-10-01', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261001-english', date: '2026-10-01', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261004-english', date: '2026-10-04', title: 'Cambly 수업', time: '21:30', category: 'english' },
  { id: 'doc-20261006-craft', date: '2026-10-06', title: '공예 기획 · 실무교육 6강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20261007-heritage', date: '2026-10-07', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261008-heritage', date: '2026-10-08', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261008-english', date: '2026-10-08', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261011-english', date: '2026-10-11', title: 'Cambly 수업', time: '21:30', category: 'english' },
  { id: 'doc-20261013-craft', date: '2026-10-13', title: '공예 기획 · 심화워크숍', time: '13:00–17:00', category: 'craft' },
  { id: 'doc-20261014-heritage', date: '2026-10-14', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261015-heritage', date: '2026-10-15', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261015-english', date: '2026-10-15', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261018-english', date: '2026-10-18', title: 'Cambly 수업', time: '21:30', category: 'english' },
  { id: 'doc-20261021-heritage', date: '2026-10-21', title: '디지털헤리티지 공주 · 프로젝트 종료', time: '', category: 'heritage' },
  { id: 'doc-20261022-english', date: '2026-10-22', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261023-mother-birthday', date: '2026-10-23', title: '엄마 생일', time: '', category: 'personal' },
  { id: 'doc-20261029-exam', date: '2026-10-29', title: 'IELTS 시험', time: '', category: 'exam' },
  { id: 'doc-20261108-cambly-end', date: '2026-11-08', title: 'Cambly PRO 플랜 종료 예정', time: '', category: 'english' },
  { id: 'doc-20261126-craft', date: '2026-11-26', title: '공예 기획 · 사업 종료일', time: '', category: 'craft' },
  { id: 'holiday-20260101', date: '2026-01-01', title: '신정', time: '', category: 'holiday' },
  { id: 'holiday-20260216', date: '2026-02-16', title: '설날 연휴', time: '', category: 'holiday' },
  { id: 'holiday-20260217', date: '2026-02-17', title: '설날', time: '', category: 'holiday' },
  { id: 'holiday-20260218', date: '2026-02-18', title: '설날 연휴', time: '', category: 'holiday' },
  { id: 'holiday-20260301', date: '2026-03-01', title: '삼일절', time: '', category: 'holiday' },
  { id: 'holiday-20260302', date: '2026-03-02', title: '삼일절 대체공휴일', time: '', category: 'holiday' },
  { id: 'holiday-20260501', date: '2026-05-01', title: '노동절', time: '', category: 'holiday' },
  { id: 'holiday-20260505', date: '2026-05-05', title: '어린이날', time: '', category: 'holiday' },
  { id: 'holiday-20260524', date: '2026-05-24', title: '부처님오신날', time: '', category: 'holiday' },
  { id: 'holiday-20260525', date: '2026-05-25', title: '부처님오신날 대체공휴일', time: '', category: 'holiday' },
  { id: 'holiday-20260603', date: '2026-06-03', title: '제9회 전국동시지방선거', time: '', category: 'holiday' },
  { id: 'holiday-20260606', date: '2026-06-06', title: '현충일', time: '', category: 'holiday' },
  { id: 'holiday-20260717', date: '2026-07-17', title: '제헌절', time: '', category: 'holiday' },
  { id: 'holiday-20260815', date: '2026-08-15', title: '광복절', time: '', category: 'holiday' },
  { id: 'holiday-20260817', date: '2026-08-17', title: '광복절 대체공휴일', time: '', category: 'holiday' },
  { id: 'holiday-20261003', date: '2026-10-03', title: '개천절', time: '', category: 'holiday' },
  { id: 'holiday-20261005', date: '2026-10-05', title: '개천절 대체공휴일', time: '', category: 'holiday' },
  { id: 'holiday-20261009', date: '2026-10-09', title: '한글날', time: '', category: 'holiday' },
  { id: 'holiday-20261225', date: '2026-12-25', title: '크리스마스', time: '', category: 'holiday' },
  { id: 'finance-20260823-card', date: '2026-08-23', title: '카드 결제일', time: '', category: 'finance' },
  { id: 'finance-20260923-card', date: '2026-09-23', title: '카드 결제일', time: '', category: 'finance' },
  { id: 'finance-20261023-card', date: '2026-10-23', title: '카드 결제일', time: '', category: 'finance' },
  { id: 'finance-20261123-card', date: '2026-11-23', title: '카드 결제일', time: '', category: 'finance' },
  { id: 'finance-20261223-card', date: '2026-12-23', title: '카드 결제일', time: '', category: 'finance' },
  { id: 'finance-20260812-card-cutoff', date: '2026-08-12', title: '카드 이용분 마감', time: '', category: 'finance' },
  { id: 'finance-20260912-card-cutoff', date: '2026-09-12', title: '카드 이용분 마감', time: '', category: 'finance' },
  { id: 'finance-20261012-card-cutoff', date: '2026-10-12', title: '카드 이용분 마감', time: '', category: 'finance' },
  { id: 'finance-20261112-card-cutoff', date: '2026-11-12', title: '카드 이용분 마감', time: '', category: 'finance' },
  { id: 'finance-20261212-card-cutoff', date: '2026-12-12', title: '카드 이용분 마감', time: '', category: 'finance' }
];

const MONTH_THEMES = [
  { accent: '#385b7a', soft: '#e1e9f0' },
  { accent: '#a65370', soft: '#f1e1e7' },
  { accent: '#4e7654', soft: '#e2ece3' },
  { accent: '#72608f', soft: '#e9e4f0' },
  { accent: '#9b792f', soft: '#f2ead5' },
  { accent: '#36777b', soft: '#dfecee' },
  { accent: '#3f6698', soft: '#e0e8f2' },
  { accent: '#1f5c46', soft: '#e1ece5' },
  { accent: '#c46a2d', soft: '#f5e4d7' },
  { accent: '#b64b45', soft: '#f3dfdc' },
  { accent: '#70588c', soft: '#e9e3f0' },
  { accent: '#425b82', soft: '#e1e7f0' }
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SUBSCRIPTIONS = [
  {
    name: 'ChatGPT Plus',
    plan: '매월 결제',
    price: 'US$22 · 약 ₩30,980 / 월',
    note: '매월 24일 갱신',
    monthlyAmount: 30980,
    status: 'active',
    statusLabel: '이용 중',
    source: 'https://learn.chatgpt.com/docs/pricing'
  },
  {
    name: 'Cambly',
    plan: 'PRO · 주당 1시간 · 3개월 할부 예정',
    price: '8월 ₩243,800 · 9–11월 약 ₩166,667',
    note: '총 약 ₩500,000 할부 예정 · 2026년 11월 8일 종료',
    monthlyAmounts: {
      '2026-08': 243800,
      '2026-09': 166667,
      '2026-10': 166667,
      '2026-11': 166666
    },
    status: 'installment',
    statusLabel: '3개월 할부 예정',
    source: 'https://www.cambly.com/en/subscribe?lang=ko'
  },
  {
    name: 'WordPress.com',
    plan: 'Personal · 12개월마다 결제',
    price: 'US$4 · 약 ₩5,630 / 월',
    note: '연간 결제 환산가',
    monthlyAmount: 5630,
    status: 'active',
    statusLabel: '이용 중',
    source: 'https://wordpress.com/pricing/'
  },
  {
    name: 'KT 휴대폰 요금',
    plan: '5G 슬림 4GB · Y덤',
    price: '₩37,000 / 월',
    note: 'Y덤 기본 데이터 2배 · 합산 청구 총 ₩61,836',
    monthlyAmount: 37000,
    billingGroup: 'kt',
    status: 'active',
    statusLabel: '이용 중',
    source: ''
  },
  {
    name: 'YouTube Premium',
    plan: 'KT 휴대폰 요금 합산',
    price: '₩12,636 / 월',
    note: '실제 청구액',
    monthlyAmount: 12636,
    billingGroup: 'kt',
    status: 'active',
    statusLabel: '이용 중',
    source: 'https://www.youtube.com/premium?hl=ko'
  },
  {
    name: 'Microsoft 이용료',
    plan: 'KT 휴대폰 요금 합산',
    price: '₩8,900 / 월',
    note: '',
    monthlyAmount: 8900,
    billingGroup: 'kt',
    status: 'active',
    statusLabel: '이용 중',
    source: ''
  },
  {
    name: 'iCloud+',
    plan: 'KT 휴대폰 요금 합산',
    price: '₩3,300 / 월',
    note: '',
    monthlyAmount: 3300,
    billingGroup: 'kt',
    status: 'active',
    statusLabel: '이용 중',
    source: ''
  },
  {
    name: 'iPhone 할부금',
    plan: '12개월 무이자 할부',
    price: '₩82,500 / 월',
    note: '12회 납부 예정 · 총 ₩990,000',
    monthlyAmount: 82500,
    activeFrom: '2026-08',
    activeThrough: '2027-07',
    status: 'installment',
    statusLabel: '12개월',
    source: ''
  },
  {
    name: 'IELTS 시험 응시료',
    plan: '2회 무이자 할부',
    price: '₩109,800 / 월',
    note: '2026년 8월·9월 각 1회 · 총 ₩219,600',
    monthlyAmount: 109800,
    activeMonths: ['2026-08', '2026-09'],
    status: 'installment',
    statusLabel: '2회 할부',
    source: ''
  },
  {
    name: 'Cargo',
    plan: 'Standard · 매월 결제',
    price: 'US$19 · 약 ₩28,000 / 월',
    note: '2026년 8월까지만 사용',
    monthlyAmount: 28000,
    activeThrough: '2026-08',
    status: 'ending',
    statusLabel: '8월 종료',
    source: 'https://cargo.site/'
  },
  {
    name: 'Kling AI',
    plan: 'Standard · 매월 결제',
    price: 'US$6.99 · 약 ₩9,840 / 월',
    note: '2026년 8월까지만 사용',
    monthlyAmount: 9840,
    activeThrough: '2026-08',
    status: 'ending',
    statusLabel: '8월 종료',
    source: 'https://kling.ai/explore/kling_ai_pricing'
  },
  {
    name: '배민클럽',
    plan: '매월 결제',
    price: '₩0',
    note: '2026년 8월까지만 사용',
    monthlyAmount: 0,
    activeThrough: '2026-08',
    status: 'ending',
    statusLabel: '8월 종료',
    source: ''
  }
];

function applyMonthTheme(month) {
  const theme = MONTH_THEMES[month] || MONTH_THEMES[7];
  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--accent-soft', theme.soft);
}

function resetLegacyDataOnce() {
  if (localStorage.getItem(RESET_KEY)) return;
  Object.keys(localStorage)
    .filter(key => key.startsWith('jy_ielts_'))
    .forEach(key => localStorage.removeItem(key));
  if ('indexedDB' in window) indexedDB.deleteDatabase('jy_ielts_file_store_v1');
  localStorage.setItem(RESET_KEY, 'done');
}

resetLegacyDataOnce();
seedDocumentSchedule();
seedDefaultTodos();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY)) || {};
    return {
      speaking: Array.isArray(saved.speaking) ? saved.speaking : [],
      schedule: Array.isArray(saved.schedule) ? saved.schedule : [],
      expenses: Array.isArray(saved.expenses) ? saved.expenses : [],
      todos: Array.isArray(saved.todos) ? saved.todos : []
    };
  } catch {
    return { speaking: [], schedule: [], expenses: [], todos: [] };
  }
}

function saveState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function seedDocumentSchedule() {
  if (localStorage.getItem(DOC_SCHEDULE_KEY)) return;
  const state = loadState();
  const currentById = new Map(DOC_SCHEDULE.map(item => [item.id, item]));
  state.schedule = state.schedule.map(item => currentById.has(item.id) ? currentById.get(item.id) : item);
  const existing = new Set(state.schedule.map(item => `${item.date}|${item.time || ''}|${item.title}`));
  DOC_SCHEDULE.forEach(item => {
    const signature = `${item.date}|${item.time || ''}|${item.title}`;
    if (!existing.has(signature)) state.schedule.push(item);
  });
  saveState(state);
  localStorage.setItem(DOC_SCHEDULE_KEY, 'done');
}

function seedDefaultTodos() {
  if (localStorage.getItem(TODO_SEED_KEY)) return;
  const state = loadState();
  const currentById = new Map(DEFAULT_TODOS.map(item => [item.id, item]));
  state.todos = state.todos.map(item => currentById.has(item.id)
    ? { ...currentById.get(item.id), done: Boolean(item.done) }
    : item);
  const existing = new Set(state.todos.map(item => `${item.date}|${item.title}`));
  DEFAULT_TODOS.forEach(item => {
    const signature = `${item.date}|${item.title}`;
    if (!existing.has(signature)) state.todos.push(item);
  });
  saveState(state);
  localStorage.setItem(TODO_SEED_KEY, 'done');
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[char]);
}

function getDday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exam = new Date(`${EXAM_DATE}T00:00:00`);
  const days = Math.ceil((exam - today) / 86400000);
  if (days > 0) return `D-${days}`;
  if (days === 0) return 'D-DAY';
  return `D+${Math.abs(days)}`;
}

function todayValue() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60000).toISOString().slice(0, 10);
}

function pageHead(name, description) {
  return `<header class="page-head"><p class="eyebrow">IELTS 6.5</p><h1>${name}</h1><p class="lede">${description}</p></header>`;
}

function scheduleMetadata(item) {
  if (item.id === 'doc-20260810-interview') {
    return {
      ...item,
      location: 'Google Meet',
      details: [
        '디지털헤리티지 큐레이터 양성과정 면접',
        '온라인 면접 · 종료 시간은 안내받는 대로 수정',
        '8월 10일 최종합격자 대상 오픈채팅방 개설 예정'
      ],
      link: 'https://meet.google.com/kmw-oymv-avd',
      linkLabel: '면접 참여 링크'
    };
  }
  if (item.id === 'doc-20260810-gifts') {
    return { ...item, location: '즈믈', details: ['매장 오픈 시간 11:00', '디지털헤리티지 면접 후 방문', '친구들에게 줄 제주 선물 구매'] };
  }
  if (item.id === 'doc-20260811-personal') {
    return {
      ...item,
      location: '어바웃스테이 논현점 · 서울 서초구 사평대로55길 123',
      details: [
        '계약 방: Room 4 스탠다드 타입',
        '월 530,000원 · 내창',
        '개별 화장실과 샤워실',
        '침대, 책상, 옷장, 선반, 냉장고, 에어컨, 모니터 제공'
      ],
      links: [
        { url: 'https://map.naver.com/p/entry/place/33093128', label: '고시원 지도' },
        { url: 'https://sites.google.com/view/aboutstaynonhyeon/rooms/room-4', label: 'Room 4 안내' }
      ]
    };
  }
  if (item.id === 'doc-20260811-craft') {
    return {
      ...item,
      location: 'KCDF 갤러리 B2 다목적홀 · 서울 종로구 인사동11길 8',
      details: [
        '2026 전통문화 전문인력 양성교육 오리엔테이션 및 공통교육 1회차',
        '강의자료 확인용 개인 노트북 또는 태블릿 지참',
        '주차 지원이 어려우므로 대중교통 이용',
        '문의: kcdfedu2026@naver.com'
      ]
    };
  }
  if (item.id === 'doc-20261108-cambly-end') {
    return {
      ...item,
      details: [
        'Cambly PRO 플랜 · 주당 1시간',
        '자동 갱신 꺼짐',
        '2026년 11월 8일 플랜 종료 예정'
      ]
    };
  }
  if (item.id === 'doc-20260812-english-makeup') {
    return {
      ...item,
      details: ['Gill McQ 튜터 · PRO 레슨 30분', '8월 9일 수업을 8월 12일로 변경'],
      link: 'https://www.cambly.com/',
      linkLabel: 'Cambly 바로가기'
    };
  }
  if (item.id === 'doc-20260830-english') {
    return {
      ...item,
      details: ['Gill McQ 튜터 · PRO 레슨 30분', '8월 30일 수업을 8월 28일로 변경'],
      link: 'https://www.cambly.com/',
      linkLabel: 'Cambly 바로가기'
    };
  }
  if (item.title === 'Cambly 수업') {
    return {
      ...item,
      link: 'https://www.cambly.com/',
      linkLabel: 'Cambly 바로가기'
    };
  }
  if (item.category === 'heritage' && item.title.startsWith('디지털헤리티지 공주')) {
    const isSeoulOnboarding = item.date >= '2026-08-19' && item.date <= '2026-08-21';
    return {
      ...item,
      location: isSeoulOnboarding ? '서울 글로벌마케팅센터' : '국립공주대학교 · 충남 공주시',
      details: [
        '3기 디지털헤리티지 큐레이터 양성 과정(충남)',
        isSeoulOnboarding ? '주황색 일정 장소: 서울 글로벌마케팅센터' : '노란색·연두색 일정 장소: 공주시 국립공주대학교',
        '서울–공주 별도 셔틀 없음',
        '편도 60km 이상인 참여자는 별도 체류지원비 제공 대상'
      ]
    };
  }
  return item;
}

function scheduleDetailMarkup(item) {
  if (!item) return '';
  const detail = scheduleMetadata(item);
  const detailLines = Array.isArray(detail.details) ? detail.details : [];
  const detailLinks = Array.isArray(detail.links)
    ? detail.links
    : detail.link ? [{ url: detail.link, label: detail.linkLabel || '링크 열기' }] : [];
  return `<div class="schedule-detail-backdrop" data-close-schedule-detail>
    <article class="schedule-detail" role="dialog" aria-modal="true" aria-labelledby="schedule-detail-title">
      <button class="schedule-detail-close" type="button" data-close-schedule-detail aria-label="상세 일정 닫기">×</button>
      <p class="eyebrow">${escapeHtml(detail.date)}</p>
      <h3 id="schedule-detail-title">${escapeHtml(detail.title)}</h3>
      <dl>
        ${detail.time ? `<div><dt>시간</dt><dd>${escapeHtml(detail.time)}</dd></div>` : ''}
        ${detail.location ? `<div><dt>장소</dt><dd>${escapeHtml(detail.location)}</dd></div>` : ''}
      </dl>
      ${detailLines.length ? `<ul>${detailLines.map(line => `<li>${escapeHtml(line)}</li>`).join('')}</ul>` : '<p class="empty">추가 안내가 없습니다.</p>'}
      ${detailLinks.map(link => `<a class="schedule-detail-link" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} ↗</a>`).join('')}
    </article>
  </div>`;
}

const initialDate = new Date();
let calendarCursor = new Date(initialDate.getFullYear(), initialDate.getMonth(), 1);
let selectedDate = todayValue();
let openScheduleId = null;
applyMonthTheme(initialDate.getMonth());

function dateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function calendarMarkup() {
  const state = loadState();
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const firstOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const lastDay = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstOffset; i += 1) cells.push('<div class="calendar-day blank" aria-hidden="true"></div>');
  for (let day = 1; day <= lastDay; day += 1) {
    const key = dateKey(year, month, day);
    const events = state.schedule.filter(item => item.date === key).sort((a, b) => (a.time || '').localeCompare(b.time || ''));
    const isHoliday = events.some(item => item.category === 'holiday');
    const isSunday = new Date(year, month, day).getDay() === 0;
    cells.push(`<div class="calendar-day${key === selectedDate ? ' selected' : ''}${key === todayValue() ? ' today' : ''}${isHoliday ? ' holiday-date' : ''}${isSunday ? ' sunday' : ''}" data-calendar-date="${key}">
      <span>${day}</span>
      <div class="calendar-events">${events.map(item => `<button type="button" class="calendar-event event-${escapeHtml(item.category || 'manual')}" data-schedule-detail="${escapeHtml(item.id)}" data-event-date="${key}">${item.time ? `${escapeHtml(item.time)} ` : ''}${escapeHtml(item.title)}</button>`).join('')}</div>
    </div>`);
  }

  const selectedEvents = state.schedule
    .filter(item => item.date === selectedDate)
    .sort((a, b) => (a.time || '').localeCompare(b.time || ''));
  const openSchedule = openScheduleId ? state.schedule.find(item => item.id === openScheduleId) : null;

  return `<section class="calendar-card">
    <div class="calendar-head">
      <h2>Schedule</h2>
      <div class="calendar-controls">
        <button class="secondary icon-button" id="calendar-prev" type="button" aria-label="이전 달">‹</button>
        <strong>${year}년 ${month + 1}월</strong>
        <button class="secondary icon-button" id="calendar-next" type="button" aria-label="다음 달">›</button>
      </div>
    </div>
    <div class="calendar-weekdays"><span>월</span><span>화</span><span>수</span><span>목</span><span>금</span><span>토</span><span>일</span></div>
    <div class="calendar-grid">${cells.join('')}</div>
    <div class="schedule-editor">
      <div>
        <p class="eyebrow">${escapeHtml(selectedDate)}</p>
        <h3>선택한 날짜의 일정</h3>
        <div class="schedule-list">${selectedEvents.length ? selectedEvents.map(item => `<div class="schedule-item"><button class="schedule-title-button" type="button" data-schedule-detail="${escapeHtml(item.id)}" data-event-date="${escapeHtml(item.date)}">${item.time ? `<time>${escapeHtml(item.time)}</time>` : ''}${escapeHtml(item.title)} <small>상세 ›</small></button><button class="danger" type="button" data-delete-schedule="${escapeHtml(item.id)}">삭제</button></div>`).join('') : '<p class="empty">등록된 일정이 없습니다.</p>'}</div>
      </div>
      <form id="schedule-form">
        <label>일정<input name="title" maxlength="80" placeholder="일정을 입력하세요" required></label>
        <label>시간<input name="time" type="time"></label>
        <button type="submit">일정 추가</button>
      </form>
    </div>
    ${scheduleDetailMarkup(openSchedule)}
  </section>`;
}

function bindCalendar() {
  document.getElementById('calendar-prev').addEventListener('click', () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
    selectedDate = dateKey(calendarCursor.getFullYear(), calendarCursor.getMonth(), 1);
    renderHome();
  });
  document.getElementById('calendar-next').addEventListener('click', () => {
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
    selectedDate = dateKey(calendarCursor.getFullYear(), calendarCursor.getMonth(), 1);
    renderHome();
  });
  document.querySelectorAll('[data-calendar-date]').forEach(day => day.addEventListener('click', () => {
    selectedDate = day.dataset.calendarDate;
    openScheduleId = null;
    renderHome();
  }));
  document.querySelectorAll('[data-schedule-detail]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    selectedDate = button.dataset.eventDate || selectedDate;
    openScheduleId = button.dataset.scheduleDetail;
    renderHome();
  }));
  document.querySelectorAll('[data-close-schedule-detail]').forEach(element => element.addEventListener('click', event => {
    if (event.target !== element && !element.classList.contains('schedule-detail-close')) return;
    openScheduleId = null;
    renderHome();
  }));
  document.getElementById('schedule-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const state = loadState();
    state.schedule.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
      date: selectedDate,
      title: String(data.get('title')).trim(),
      time: String(data.get('time')).trim(),
      category: 'manual'
    });
    saveState(state);
    renderHome();
  });
  document.querySelectorAll('[data-delete-schedule]').forEach(button => button.addEventListener('click', () => {
    const state = loadState();
    state.schedule = state.schedule.filter(item => item.id !== button.dataset.deleteSchedule);
    saveState(state);
    renderHome();
  }));
}

function subscriptionMarkup() {
  return `<section class="subscriptions-card" id="subscriptions">
    <div class="subscriptions-head">
      <div>
        <p class="eyebrow">Monthly</p>
        <h2>구독 중인 프로그램</h2>
      </div>
    </div>
    <div class="subscription-list">
      ${SUBSCRIPTIONS.map(item => `<article class="subscription-item ${escapeHtml(item.status)}${item.billingGroup ? ` billing-${escapeHtml(item.billingGroup)}` : ''}">
        <div class="subscription-name">
          <h3>${escapeHtml(item.name)}</h3>
          <span class="status-pill ${escapeHtml(item.status)}">${escapeHtml(item.statusLabel)}</span>
        </div>
        <div class="subscription-plan">
          <span>${escapeHtml(item.plan)}</span>
          <small>${escapeHtml(item.note)}</small>
        </div>
        <div class="subscription-price">
          <strong>${escapeHtml(item.price)}</strong>
          ${item.source ? `<a href="${escapeHtml(item.source)}" target="_blank" rel="noreferrer">요금 정보 ↗</a>` : ''}
        </div>
      </article>`).join('')}
    </div>
  </section>`;
}

function formatWon(amount) {
  return `₩${Math.round(amount).toLocaleString('ko-KR')}`;
}

function shiftMonthKey(monthKey, offset) {
  const [year, month] = monthKey.split('-').map(Number);
  const date = new Date(year, month - 1 + offset, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function subscriptionAmountForMonth(item, monthKey) {
  if (item.monthlyAmounts) return item.monthlyAmounts[monthKey] || 0;
  if (Array.isArray(item.activeMonths)) return item.activeMonths.includes(monthKey) ? item.monthlyAmount : 0;
  if (item.activeFrom && monthKey < item.activeFrom) return 0;
  if (item.activeThrough && monthKey > item.activeThrough) return 0;
  return item.monthlyAmount;
}

function budgetMarkup() {
  const state = loadState();
  const monthKey = todayValue().slice(0, 7);
  const nextMonthKey = shiftMonthKey(monthKey, 1);
  const monthNumber = Number(monthKey.slice(5, 7));
  const expenses = state.expenses
    .filter(item => item.date.startsWith(monthKey))
    .sort((a, b) => b.date.localeCompare(a.date));
  const recurringTotal = SUBSCRIPTIONS.reduce((sum, item) => sum + subscriptionAmountForMonth(item, monthKey), 0);
  const nextMonthTotal = SUBSCRIPTIONS.reduce((sum, item) => sum + subscriptionAmountForMonth(item, nextMonthKey), 0);
  const extraTotal = expenses.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  return `<section class="budget-card">
    <div class="budget-head">
      <div><p class="eyebrow">Monthly Budget</p><h2>${monthNumber}월 가계부</h2></div>
      <span>매월 12일 마감 · 23일 결제</span>
    </div>
    <div class="budget-summary">
      <div><span>정기비용</span><strong>${formatWon(recurringTotal)}</strong><small>월 환산 금액 포함</small></div>
      <div><span>추가 지출</span><strong>${formatWon(extraTotal)}</strong></div>
      <div class="budget-total"><span>이번 달 합계</span><strong>${formatWon(recurringTotal + extraTotal)}</strong></div>
      <div><span>다음 달 예상</span><strong>${formatWon(nextMonthTotal)}</strong><small>납부·종료 월 자동 반영</small></div>
    </div>
    <form class="expense-form" id="expense-form">
      <h3>지출 추가</h3>
      <label>날짜<input type="date" name="date" value="${todayValue()}" required></label>
      <label>항목<input name="title" maxlength="50" placeholder="예: 교통비" required></label>
      <label>금액<input type="number" name="amount" min="0" step="1" placeholder="0" required></label>
      <button type="submit">추가</button>
    </form>
    <div class="expense-list">
      ${expenses.length ? expenses.map(item => `<div class="expense-item">
        <span><small>${escapeHtml(item.date.slice(5))}</small>${escapeHtml(item.title)}</span>
        <strong>${formatWon(item.amount)}</strong>
        <button class="danger" type="button" data-delete-expense="${escapeHtml(item.id)}">삭제</button>
      </div>`).join('') : '<p class="empty">추가로 기록한 지출이 없습니다.</p>'}
    </div>
  </section>`;
}

function bindBudget() {
  document.getElementById('expense-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const state = loadState();
    state.expenses.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
      date: String(data.get('date')),
      title: String(data.get('title')).trim(),
      amount: Number(data.get('amount'))
    });
    saveState(state);
    renderHome();
  });
  document.querySelectorAll('[data-delete-expense]').forEach(button => button.addEventListener('click', () => {
    const state = loadState();
    state.expenses = state.expenses.filter(item => item.id !== button.dataset.deleteExpense);
    saveState(state);
    renderHome();
  }));
}

function renderHome() {
  applyMonthTheme(calendarCursor.getMonth());
  const today = new Date();
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <h1>${today.getDate()} ${MONTH_NAMES[today.getMonth()]}<br>${today.getFullYear()}</h1>
      </div>
      <div class="dday-card"><span>NEXT MILESTONE</span><strong>${getDday()}</strong><div class="dday-meta"><small>IELTS TEST · Overall 6.5</small><small>29 October 2026</small></div></div>
    </section>
    ${calendarMarkup()}
    <div class="finance-grid">
      ${subscriptionMarkup()}
      ${budgetMarkup()}
    </div>`;
  bindCalendar();
  bindBudget();
}

function renderSpeaking() {
  const state = loadState();
  const logs = [...state.speaking].sort((a, b) => b.date.localeCompare(a.date));
  app.innerHTML = `${pageHead('Speaking', 'Cambly 수업과 스피킹 연습만 간단히 기록합니다.')}
    <section class="content-grid">
      <form class="card" id="speaking-form">
        <h2>새 기록</h2>
        <label>날짜<input type="date" name="date" value="${todayValue()}" required></label>
        <label>수업 또는 연습 주제<input name="topic" maxlength="100" placeholder="예: Cambly 수업, Art and museums" required></label>
        <label>시간<input name="duration" maxlength="30" placeholder="예: 30분"></label>
        <label>피드백과 복습할 내용<textarea name="notes" maxlength="1200" placeholder="교정받은 표현이나 다음에 연습할 내용을 적어주세요."></textarea></label>
        <button type="submit">기록 저장</button>
      </form>
      <section class="card">
        <h2>기록 <span class="result-count">${logs.length}회</span></h2>
        <div id="speaking-logs">${logs.length ? logs.map(log => `
          <article class="log-item">
            <div class="log-meta"><span>${escapeHtml(log.date)}</span>${log.duration ? `<span>${escapeHtml(log.duration)}</span>` : ''}</div>
            <h3>${escapeHtml(log.topic)}</h3>
            ${log.notes ? `<p>${escapeHtml(log.notes)}</p>` : ''}
            <button class="danger" type="button" data-delete-log="${escapeHtml(log.id)}">삭제</button>
          </article>`).join('') : '<p class="empty">아직 저장된 기록이 없습니다.</p>'}</div>
      </section>
    </section>`;

  document.getElementById('speaking-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const current = loadState();
    current.speaking.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
      date: data.get('date'),
      topic: String(data.get('topic')).trim(),
      duration: String(data.get('duration')).trim(),
      notes: String(data.get('notes')).trim()
    });
    saveState(current);
    renderSpeaking();
  });

  document.querySelectorAll('[data-delete-log]').forEach(button => button.addEventListener('click', () => {
    const current = loadState();
    current.speaking = current.speaking.filter(log => log.id !== button.dataset.deleteLog);
    saveState(current);
    renderSpeaking();
  }));
}

function renderTodo() {
  const state = loadState();
  const todos = [...state.todos].sort((a, b) => Number(a.done) - Number(b.done) || (a.date || '').localeCompare(b.date || ''));
  const remaining = todos.filter(item => !item.done).length;
  const carryTodos = todos.filter(item => (item.group || 'carry') === 'carry');
  const shippingTodos = todos.filter(item => item.group === 'shipping');
  const todoItemsMarkup = items => items.length ? items.map(item => `
    <div class="todo-item${item.done ? ' done' : ''}">
      <input class="todo-check" type="checkbox" data-toggle-todo="${escapeHtml(item.id)}" aria-label="${escapeHtml(item.title)} 완료" ${item.done ? 'checked' : ''}>
      <span class="todo-copy"><strong>${escapeHtml(item.title)}</strong>${item.date ? `<small>${escapeHtml(item.date)}</small>` : ''}</span>
      <button class="danger" type="button" data-delete-todo="${escapeHtml(item.id)}">삭제</button>
    </div>`).join('') : '<p class="empty">등록된 항목이 없습니다.</p>';
  app.innerHTML = `<header class="page-head"><h1>Todo</h1><p class="lede">해야 할 일을 간단히 기록합니다.</p></header>
    <section class="content-grid">
      <form class="card" id="todo-form">
        <h2>할 일 추가</h2>
        <label>할 일<input name="title" maxlength="120" placeholder="할 일을 입력하세요" required></label>
        <label>분류<select name="group"><option value="carry">캐리어 안에 넣을 것</option><option value="shipping">택배로 부칠 것</option></select></label>
        <label>날짜<input type="date" name="date" value="${todayValue()}"></label>
        <button type="submit">추가</button>
      </form>
      <section class="card">
        <div class="todo-head"><h2>목록</h2><span class="result-count">남은 할 일 ${remaining}개</span></div>
        <div class="todo-groups">
          <section class="todo-group carry">
            <div class="todo-group-head"><h3>캐리어 안에 넣을 것</h3><span>${carryTodos.filter(item => !item.done).length}개 남음</span></div>
            <div class="todo-list">${todoItemsMarkup(carryTodos)}</div>
          </section>
          <section class="todo-group shipping">
            <div class="todo-group-head"><h3>택배로 부칠 것</h3><span>${shippingTodos.filter(item => !item.done).length}개 남음</span></div>
            <div class="todo-list">${todoItemsMarkup(shippingTodos)}</div>
          </section>
        </div>
      </section>
    </section>`;

  document.getElementById('todo-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const current = loadState();
    current.todos.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}`,
      title: String(data.get('title')).trim(),
      date: String(data.get('date') || ''),
      group: String(data.get('group') || 'carry'),
      done: false
    });
    saveState(current);
    renderTodo();
  });

  document.querySelectorAll('[data-toggle-todo]').forEach(input => input.addEventListener('change', () => {
    const current = loadState();
    current.todos = current.todos.map(item => item.id === input.dataset.toggleTodo ? { ...item, done: input.checked } : item);
    saveState(current);
    renderTodo();
  }));

  document.querySelectorAll('[data-delete-todo]').forEach(button => button.addEventListener('click', () => {
    const current = loadState();
    current.todos = current.todos.filter(item => item.id !== button.dataset.deleteTodo);
    saveState(current);
    renderTodo();
  }));
}

function renderSimpleSkill(name) {
  app.innerHTML = `${pageHead(name, '현재는 별도 진도표나 자료를 넣지 않았습니다.')}
    <section class="simple-message"><div class="card"><h2>${name} 공부</h2><p>사용하고 있는 교재와 자료로 공부하세요. 필요한 기능이 생기면 이 페이지에 추가할 수 있습니다.</p></div></section>`;
}

let vocabPool = [];

function getVocabulary() {
  return Array.isArray(window.JY_VOCAB_DATA) ? window.JY_VOCAB_DATA : [];
}

function vocabCards(words) {
  if (!words.length) return '<p class="empty">해당하는 단어가 없습니다.</p>';
  return words.map(item => `<article class="word-card">
    <h3>${escapeHtml(item.word)}${item.pos ? `<small>${escapeHtml(item.pos)}</small>` : ''}</h3>
    <p class="meaning">${escapeHtml(item.meaning)}</p>
    ${item.example ? `<p class="example">${escapeHtml(item.example)}</p>` : ''}
  </article>`).join('');
}

function randomWords(count = 10) {
  return [...getVocabulary()].sort(() => Math.random() - .5).slice(0, count);
}

function renderVocabulary() {
  vocabPool = randomWords();
  app.innerHTML = `${pageHead('Vocabulary', '기존 단어 자료에서 검색하거나 무작위로 열 개씩 확인합니다.')}
    <section class="card">
      <div class="vocab-toolbar"><input id="vocab-search" type="search" placeholder="영어 단어 또는 한국어 뜻 검색" aria-label="단어 검색"><button id="shuffle-words" type="button">다른 단어</button></div>
      <p class="result-count" id="vocab-count">무작위 10개</p>
      <div class="vocab-list" id="vocab-list">${vocabCards(vocabPool)}</div>
    </section>`;

  const input = document.getElementById('vocab-search');
  const list = document.getElementById('vocab-list');
  const count = document.getElementById('vocab-count');
  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    const matches = query ? getVocabulary().filter(item => `${item.word} ${item.meaning}`.toLowerCase().includes(query)).slice(0, 50) : vocabPool;
    list.innerHTML = vocabCards(matches);
    count.textContent = query ? `검색 결과 ${matches.length}개` : '무작위 10개';
  });
  document.getElementById('shuffle-words').addEventListener('click', () => {
    vocabPool = randomWords();
    input.value = '';
    list.innerHTML = vocabCards(vocabPool);
    count.textContent = '무작위 10개';
  });
}

function route() {
  const requestedRoute = (window.location.hash.slice(1) || 'home').toLowerCase();
  const routes = {
    home: renderHome,
    todo: renderTodo,
    speaking: renderSpeaking,
    reading: () => renderSimpleSkill('Reading'),
    listening: () => renderSimpleSkill('Listening'),
    vocabulary: renderVocabulary
  };
  const currentRoute = routes[requestedRoute] ? requestedRoute : 'home';
  routes[currentRoute]();
  document.querySelectorAll('[data-route]').forEach(link => {
    const isActive = link.dataset.route === currentRoute;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  app.focus({ preventScroll: true });
}

window.addEventListener('hashchange', route);
route();
