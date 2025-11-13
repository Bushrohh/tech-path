'use client';

import { useEffect, useRef } from 'react';
import { markCompleted, recordSeconds, isCompleted } from '@/src/lib/progress'; 

export default function LessonClient({ lesson }) {
  const startRef = useRef(null);

  
  useEffect(() => {
    startRef.current = Date.now();
    return () => {
      const elapsedSec = Math.floor((Date.now() - startRef.current) / 1000);
      recordSeconds(lesson.id, elapsedSec);
    };
  }, [lesson.id]);

  const done = isCompleted(lesson.id);

  return (
    <section className="space-y-3">
      {lesson.youtube_url && (
        <div className="aspect-video rounded-lg overflow-hidden border">
          <iframe
            src={lesson.youtube_url} 
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      <button
        onClick={() => markCompleted(lesson.id)}
        className={`px-4 py-2 rounded ${done ? 'bg-emerald-600 text-white' : 'bg-gray-200'}`}
      >
        {done ? 'Completed' : 'Mark as complete'}
      </button>
    </section>
  );
}
