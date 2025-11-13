// hooks/useLesson.js
import { useEffect, useMemo, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useUser } from './useAuth';

export function useLesson(lessonId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!lessonId);
  const [error, setErr] = useState(null);

  useEffect(() => {
    if (!lessonId) return;
    let cancelled = false;

    async function run() {
      setLoading(true);
      setErr(null);
      const { data, error } = await supabase
        .from('lessons')
        .select(`
          id, title, summary, content_md, youtube_url, est_minutes,
          lesson_resources (
            position,
            resources:resources (
              id, title, url, type, source, author, cost, difficulty, description, image_url,
              resource_tags ( tags:tags (id, name) )
            )
          )
        `)
        .eq('id', lessonId)
        .maybeSingle();

      if (!cancelled) {
        if (error) setErr(error);
        setData(data || null);
        setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [lessonId]);

  return { data, loading, error };
}

export function useLessonTimer(lessonId, intervalMs = 30000) {
  const { user } = useUser();
  const timerRef = useRef(null);

  const addSeconds = async (seconds) => {
    if (!user || !lessonId) return;
    const { error: rpcErr } = await supabase.rpc('add_progress_seconds', {
      p_user: user.id,
      p_lesson: lessonId,
      p_seconds: seconds
    });
    if (!rpcErr) return;
    await supabase
      .from('user_progress')
      .upsert(
        { user_id: user.id, lesson_id: lessonId, status: 'in_progress', seconds_spent: seconds },
        { onConflict: 'user_id,lesson_id' }
      );
  };

  const start = () => {
    if (!user || !lessonId || timerRef.current) return;
    setTimeout(() => addSeconds(Math.floor(intervalMs / 1000)), 1200);
    timerRef.current = setInterval(() => {
      addSeconds(Math.floor(intervalMs / 1000));
    }, intervalMs);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => () => stop(), [lessonId]);

  return { start, stop, running: !!timerRef.current };
}

export function useYoutubeId(url) {
  return useMemo(() => {
    if (!url) return null;
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) return u.pathname.slice(1);
      if (u.hostname.includes('youtube.com')) return u.searchParams.get('v');
    } catch {}
    return null;
  }, [url]);
}
