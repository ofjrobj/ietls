const EXAM_DATE = '2026-10-29';
const STATE_KEY = 'jy_ielts_simple_v1';
const RESET_KEY = 'jy_ielts_reset_20261029';
const DOC_SCHEDULE_KEY = 'jy_ielts_schedule_docs_20260808_v5';
const app = document.getElementById('app');

const DOC_SCHEDULE = [
  { id: 'doc-20260811-personal', date: '2026-08-11', title: '개인 · 비행기, 고시원 계약', time: '', category: 'personal' },
  { id: 'doc-20260811-craft', date: '2026-08-11', title: '공예 기획 · 공통교육 1강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260812-personal', date: '2026-08-12', title: '개인 · 예지 언니 약속 (홍대)', time: '18:00 이후', category: 'personal' },
  { id: 'doc-20260813-craft', date: '2026-08-13', title: '공예 기획 · 공통교육 2강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260813-english', date: '2026-08-13', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260815-personal', date: '2026-08-15', title: '개인 · 대학 한국화 친구들 약속 (상수)', time: '', category: 'personal' },
  { id: 'doc-20260816-friends', date: '2026-08-16', title: '개인 · 고등학교 한국화 친구들 약속 (한남동)', time: '13:00', category: 'personal' },
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
  { id: 'doc-20260830-english', date: '2026-08-30', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20260901-craft', date: '2026-09-01', title: '공예 기획 · 실무교육 3강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260902-heritage', date: '2026-09-02', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260903-heritage', date: '2026-09-03', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260903-english', date: '2026-09-03', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260906-english', date: '2026-09-06', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20260908-craft', date: '2026-09-08', title: '공예 기획 · 실무교육 4강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260909-heritage', date: '2026-09-09', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260910-heritage', date: '2026-09-10', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260910-english', date: '2026-09-10', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260913-english', date: '2026-09-13', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20260915-craft', date: '2026-09-15', title: '공예 기획 · 실무교육 5강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20260916-heritage', date: '2026-09-16', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260917-heritage', date: '2026-09-17', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260917-english', date: '2026-09-17', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260920-english', date: '2026-09-20', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20260923-heritage', date: '2026-09-23', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20260924-holiday', date: '2026-09-24', title: '추석', time: '', category: 'holiday' },
  { id: 'doc-20260924-english', date: '2026-09-24', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20260925-holiday', date: '2026-09-25', title: '추석', time: '', category: 'holiday' },
  { id: 'doc-20260927-english', date: '2026-09-27', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20260930-heritage', date: '2026-09-30', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261001-heritage', date: '2026-10-01', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261001-english', date: '2026-10-01', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261004-english', date: '2026-10-04', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20261006-craft', date: '2026-10-06', title: '공예 기획 · 실무교육 6강', time: '14:00–16:00', category: 'craft' },
  { id: 'doc-20261007-heritage', date: '2026-10-07', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261008-heritage', date: '2026-10-08', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261008-english', date: '2026-10-08', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261011-english', date: '2026-10-11', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20261013-craft', date: '2026-10-13', title: '공예 기획 · 심화워크숍', time: '13:00–17:00', category: 'craft' },
  { id: 'doc-20261014-heritage', date: '2026-10-14', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261015-heritage', date: '2026-10-15', title: '디지털헤리티지 공주 · 프로젝트', time: '', category: 'heritage' },
  { id: 'doc-20261015-english', date: '2026-10-15', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261018-english', date: '2026-10-18', title: 'Cambly 수업', time: '22:00', category: 'english' },
  { id: 'doc-20261021-heritage', date: '2026-10-21', title: '디지털헤리티지 공주 · 프로젝트 종료', time: '', category: 'heritage' },
  { id: 'doc-20261022-english', date: '2026-10-22', title: 'Cambly 수업', time: '21:00', category: 'english' },
  { id: 'doc-20261029-exam', date: '2026-10-29', title: 'IELTS 시험', time: '', category: 'exam' },
  { id: 'doc-20261126-craft', date: '2026-11-26', title: '공예 기획 · 사업 종료일', time: '', category: 'craft' }
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

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY)) || {};
    return {
      speaking: Array.isArray(saved.speaking) ? saved.speaking : [],
      schedule: Array.isArray(saved.schedule) ? saved.schedule : []
    };
  } catch {
    return { speaking: [], schedule: [] };
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

const initialDate = new Date();
let calendarCursor = new Date(initialDate.getFullYear(), initialDate.getMonth(), 1);
let selectedDate = todayValue();
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
    cells.push(`<button class="calendar-day${key === selectedDate ? ' selected' : ''}${key === todayValue() ? ' today' : ''}" type="button" data-calendar-date="${key}">
      <span>${day}</span>
      <div class="calendar-events">${events.slice(0, 2).map(item => `<small class="event-${escapeHtml(item.category || 'manual')}">${item.time ? `${escapeHtml(item.time)} ` : ''}${escapeHtml(item.title)}</small>`).join('')}${events.length > 2 ? `<small>+${events.length - 2}</small>` : ''}</div>
    </button>`);
  }

  const selectedEvents = state.schedule
    .filter(item => item.date === selectedDate)
    .sort((a, b) => (a.time || '').localeCompare(b.time || ''));

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
        <div class="schedule-list">${selectedEvents.length ? selectedEvents.map(item => `<div class="schedule-item"><span>${item.time ? `<time>${escapeHtml(item.time)}</time>` : ''}${escapeHtml(item.title)}</span><button class="danger" type="button" data-delete-schedule="${escapeHtml(item.id)}">삭제</button></div>`).join('') : '<p class="empty">등록된 일정이 없습니다.</p>'}</div>
      </div>
      <form id="schedule-form">
        <label>일정<input name="title" maxlength="80" placeholder="일정을 입력하세요" required></label>
        <label>시간<input name="time" type="time"></label>
        <button type="submit">일정 추가</button>
      </form>
    </div>
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
  document.querySelectorAll('[data-calendar-date]').forEach(button => button.addEventListener('click', () => {
    selectedDate = button.dataset.calendarDate;
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

function renderHome() {
  applyMonthTheme(calendarCursor.getMonth());
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <h1>29 October<br>2026</h1>
      </div>
      <div class="dday-card"><span>IELTS TEST</span><strong>${getDday()}</strong><small>목표 Overall 6.5</small></div>
    </section>
    ${calendarMarkup()}`;
  bindCalendar();
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
  const name = location.hash.replace('#', '') || 'home';
  document.querySelectorAll('[data-route]').forEach(link => link.classList.toggle('active', link.dataset.route === name));
  if (name === 'speaking') renderSpeaking();
  else if (name === 'reading') renderSimpleSkill('Reading');
  else if (name === 'listening') renderSimpleSkill('Listening');
  else if (name === 'vocabulary') renderVocabulary();
  else renderHome();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  app.focus({ preventScroll: true });
}

window.addEventListener('hashchange', route);
route();
