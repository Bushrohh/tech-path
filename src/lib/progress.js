

const KEY = 'techcareers.progress.v1';

function blank() {
  return { completed: {}, secondsSpent: {}, lastViewed: {} };
}

function load() {
  if (typeof window === 'undefined') return blank();
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : blank();
  } catch {
    return blank();
  }
}

function save(state) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify(state));
}



export function isCompleted(lessonId) {
  const s = load();
  return !!s.completed[lessonId];
}

export function markCompleted(lessonId) {
  const s = load();
  s.completed[lessonId] = true;
  s.lastViewed[lessonId] = Date.now();
  save(s);
}

export function toggleCompleted(lessonId) {
  const s = load();
  s.completed[lessonId] = !s.completed[lessonId];
  s.lastViewed[lessonId] = Date.now();
  save(s);
}

export function recordSeconds(lessonId, seconds) {
  const s = load();
  s.secondsSpent[lessonId] = (s.secondsSpent[lessonId] || 0) + Math.max(0, Number(seconds) || 0);
  s.lastViewed[lessonId] = Date.now();
  save(s);
}


export function getTrackProgress(track) {
  const s = load();
  const all = (track.modules || []).flatMap(m => (m.lessons || []).map(l => l.id));
  const total = all.length || 1;
  const done = all.filter(id => s.completed[id]).length;
  const percent = Math.round((done / total) * 100);
  return { done, total, percent };
}


export function getFirstIncompleteLessonId(track) {
  const orderedLessons = (track.modules || [])
    .slice().sort((a,b)=>a.position-b.position)
    .flatMap(m => (m.lessons || []).slice().sort((a,b)=>a.position-b.position));

  const s = load();
  const firstIncomplete = orderedLessons.find(l => !s.completed[l.id]);
  return firstIncomplete?.id || null;
}

export function getLastViewedLessonIdForTrack(track) {
  const s = load();
  let best = null;
  let bestTime = -1;

  for (const m of (track.modules || [])) {
    for (const l of (m.lessons || [])) {
      const t = s.lastViewed[l.id] || -1;
      if (t > bestTime) {
        bestTime = t;
        best = l.id;
      }
    }
  }
  return best;
}


export function resetAllProgress() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(KEY);
}
