
export function buildWeeklyPlan(track, minutesPerDay = 30, daysPerWeek = 5) {
 
  const lessons = (track.modules || [])
    .slice().sort((a,b)=>a.position-b.position)
    .flatMap(m => (m.lessons || []).slice().sort((a,b)=>a.position-b.position));

  const plan = [];
  let dayIndex = 0;
  let dayRemaining = minutesPerDay;

  for (const lesson of lessons) {
    let remainingForLesson = lesson.est_minutes || 15; 

    while (remainingForLesson > 0) {
      if (!plan[dayIndex]) plan[dayIndex] = { day: dayIndex + 1, items: [], total: 0 };

      const chunk = Math.min(remainingForLesson, dayRemaining);
      plan[dayIndex].items.push({ lessonId: lesson.id, title: lesson.title, minutes: chunk });
      plan[dayIndex].total += chunk;

      remainingForLesson -= chunk;
      dayRemaining -= chunk;

      if (dayRemaining === 0) {
        
        dayIndex += 1;
        if (daysPerWeek < 7 && ((dayIndex % 7) >= daysPerWeek)) {
          dayIndex += (7 - (dayIndex % 7));
        }
        dayRemaining = minutesPerDay;
      }
    }
  }

  return plan;
}
