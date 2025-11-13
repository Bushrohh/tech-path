import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function useTrack(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!slug);
  const [error, setErr] = useState(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    async function run() {
      setLoading(true);
      setErr(null);
      const { data, error } = await supabase
        .from('tracks')
        .select(`
          id, slug, title, description, level,
          modules:modules (
            id, title, description, position,
            lessons:lessons (
              id, title, summary, position, youtube_url, est_minutes
            )
          )
        `)
        .eq('slug', slug)
        .maybeSingle();

      if (!cancelled) {
        if (error) setErr(error);
        setData(data || null);
        setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [slug]);

  return { data, loading, error };
}
