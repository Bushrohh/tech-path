'use client'

import { useEffect } from 'react';
import { useLesson, useLessonTimer, useYoutubeId } from '@/src/hooks/useLesson';

export default function LessonPlayer({ lessonId, onComplete }) {
  const { data: lesson, loading } = useLesson(lessonId);
  const { start, stop } = useLessonTimer(lessonId);
  const videoId = useYoutubeId(lesson?.youtube_url);

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  if (loading) return <p>Loading…</p>;
  if (!lesson) return <p>Lesson not found</p>;

  return (
    <div>
      <h2>{lesson.title}</h2>
      {videoId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: 12 }}
        />
      )}
      <p>{lesson.summary}</p>
      <button onClick={onComplete}>Mark complete</button>

      <h3 style={{ marginTop: 16 }}>Recommended resources</h3>
      <ul>
        {lesson.lesson_resources
          ?.sort((a, b) => a.position - b.position)
          .map((x) => (
            <li key={x.resources.id}>
              <a href={x.resources.url} target="_blank" rel="noreferrer">
                {x.resources.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
