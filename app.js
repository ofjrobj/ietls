const EXAM_DATE = '2026-10-29';
const STATE_KEY = 'jy_ielts_simple_v1';
const RESET_KEY = 'jy_ielts_reset_20261029';
const app = document.getElementById('app');

function resetLegacyDataOnce() {
  if (localStorage.getItem(RESET_KEY)) return;
  Object.keys(localStorage)
    .filter(key => key.startsWith('jy_ielts_'))
    .forEach(key => localStorage.removeItem(key));
  if ('indexedDB' in window) indexedDB.deleteDatabase('jy_ielts_file_store_v1');
  localStorage.setItem(RESET_KEY, 'done');
}

resetLegacyDataOnce();

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STATE_KEY)) || { speaking: [] };
  } catch {
    return { speaking: [] };
  }
}

function saveState(state) {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
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

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">New start</p>
        <h1>29 October<br>2026</h1>
        <p class="lede">시험일에 맞춰 새로 시작합니다. 현재 공부 방식에 필요한 항목만 남겼습니다.</p>
      </div>
      <div class="dday-card"><span>IELTS TEST</span><strong>${getDday()}</strong><small>목표 Overall 6.5</small></div>
    </section>
    <h2 class="section-title">Study</h2>
    <section class="card-grid">
      <article class="card"><h3>Speaking</h3><p>Cambly 수업과 개인 연습 내용을 기록합니다.</p><a class="text-link" href="#speaking">기록하기</a></article>
      <article class="card"><h3>Reading</h3><p>별도 계획표 없이 사용하는 자료로 공부합니다.</p><a class="text-link" href="#reading">열기</a></article>
      <article class="card"><h3>Listening</h3><p>별도 계획표 없이 사용하는 자료로 공부합니다.</p><a class="text-link" href="#listening">열기</a></article>
    </section>`;
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
