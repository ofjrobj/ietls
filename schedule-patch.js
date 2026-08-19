(() => {
  const camblyPauseStart = '2026-08-20';
  const camblyPauseEnd = '2026-09-10';
  const heritageTime = '09:00–18:00';
  const state = loadState();
  let changed = false;

  state.schedule = state.schedule
    .filter(item => {
      const isCambly = item.category === 'english' && String(item.title || '').startsWith('Cambly 수업');
      const shouldRemove = isCambly && item.date >= camblyPauseStart && item.date <= camblyPauseEnd;
      if (shouldRemove) changed = true;
      return !shouldRemove;
    })
    .map(item => {
      const isDigitalHeritage = item.category === 'heritage' && String(item.title || '').startsWith('디지털헤리티지 공주');
      if (isDigitalHeritage && item.time !== heritageTime) {
        changed = true;
        return { ...item, time: heritageTime };
      }
      return item;
    });

  if (changed) saveState(state);

  const currentRoute = (window.location.hash.slice(1) || 'home').toLowerCase();
  if (currentRoute === 'home') renderHome();
})();
