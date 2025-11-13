'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  getTrackProgress,
  isCompleted,
  toggleCompleted,
  getFirstIncompleteLessonId,
  getLastViewedLessonIdForTrack,
} from '@/src/lib/progress';
import { buildWeeklyPlan } from '@/src/lib/schedule';

export default function TrackClient({ track }) {
  const router = useRouter();
  const [bump, setBump] = useState(0);
  const progress = useMemo(() => getTrackProgress(track), [track, bump]);

  const resumeId = useMemo(() => {
    return (
      getLastViewedLessonIdForTrack(track) ||
      getFirstIncompleteLessonId(track)
    );
  }, [track, bump]);

  const [minutesPerDay, setMinutesPerDay] = useState(30);
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const plan = useMemo(
    () => buildWeeklyPlan(track, minutesPerDay, daysPerWeek),
    [track, minutesPerDay, daysPerWeek]
  );

  return (
    <section className="space-y-6">
      <div className="rounded-xl border p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Your Progress</h2>
          <span>{progress.done}/{progress.total} • {progress.percent}%</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded">
          <div
            className="h-2 bg-emerald-600 rounded"
            style={{ width: `${progress.percent}%` }}
          />
        </div>

        {resumeId && (
          <div className="pt-2">
            <button
              onClick={() => router.push(`/lessons/${resumeId}`)}
              className="rounded bg-emerald-600 text-white px-4 py-2"
            >
              Resume learning
            </button>
          </div>
        )}
      </div>

      
      <div className="space-y-4">
        {(track.modules || [])
          .slice()
          .sort((a, b) => a.position - b.position)
          .map((m) => (
            <div key={m.id} className="rounded-xl border p-4">
              <h3 className="text-lg font-medium">{m.title}</h3>
              <ul className="mt-2 space-y-2">
                {(m.lessons || [])
                  .slice()
                  .sort((a, b) => a.position - b.position)
                  .map((l) => {
                    const done = isCompleted(l.id);
                    return (
                      <li key={l.id} className="flex items-center justify-between">
                        <Link className="underline" href={`/lessons/${l.id}`}>
                          {l.title}
                        </Link>
                        <div className="flex items-center gap-3">
                          <span className="text-sm opacity-70">
                            {l.est_minutes ?? 15} min
                          </span>
                          <button
                            onClick={() => {
                              toggleCompleted(l.id);
                              setBump((x) => x + 1);
                            }}
                            className={`px-2 py-1 rounded text-sm ${
                              done ? 'bg-emerald-600 text-white' : 'bg-gray-200'
                            }`}
                          >
                            {done ? 'Completed' : 'Mark done'}
                          </button>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
      </div>

      <div className="rounded-xl border p-4 space-y-3">
        <div className="flex items-end gap-4">
          <div>
            <label className="text-sm block">Minutes per study day</label>
            <input
              type="number"
              min="10"
              step="5"
              value={minutesPerDay}
              onChange={(e) =>
                setMinutesPerDay(Math.max(10, Number(e.target.value) || 30))
              }
              className="border px-2 py-1 rounded w-28"
            />
          </div>
          <div>
            <label className="text-sm block">Days per week</label>
            <input
              type="number"
              min="1"
              max="7"
              value={daysPerWeek}
              onChange={(e) => {
                const v = Number(e.target.value);
                setDaysPerWeek(!isNaN(v) ? Math.min(7, Math.max(1, v)) : 5);
              }}
              className="border px-2 py-1 rounded w-28"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {plan.map((d) => (
            <div key={d.day} className="rounded-lg border p-3">
              <div className="font-medium mb-1">
                Day {d.day} • {d.total} min
              </div>
              <ul className="text-sm space-y-1">
                {d.items.map((it, i) => (
                  <li key={i}>• {it.title} — {it.minutes} min</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
