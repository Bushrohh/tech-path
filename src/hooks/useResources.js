import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabase';
import { useUser } from '@/src/hooks/useAuth';

export function useLibrarySearch(params = {}) {
  const { text, type, difficulty, cost, from = 0, limit = 20 } = params;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLoading(true);
      setErr(null);

      let q = supabase
        .from('resources')
        .select(`
          id, title, url, type, source, author, cost, difficulty, description, image_url,
          resource_tags ( tags:tags (id, name) )
        `, { count: 'exact' });

      if (text) q = q.ilike('title', `%${text}%`);
      if (type) q = q.eq('type', type);
      if (difficulty) q = q.eq('difficulty', difficulty);
      if (cost) q = q.eq('cost', cost);

      const { data, error, count } = await q.range(from, from + limit - 1);

      if (!cancelled) {
        if (error) setErr(error);
        setData(data || []);
        setCount(count ?? null);
        setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [text, type, difficulty, cost, from, limit]);

  return { data, count, loading, error };
}

export function useBookmark() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(null);

  const add = async (resourceId) => {
    if (!user) return;
    setLoading(true);
    setErr(null);
    const { error } = await supabase
      .from('bookmarks')
      .insert({ user_id: user.id, resource_id: resourceId });
    if (error && error.code !== '23505') setErr(error);
    setLoading(false);
  };

  return { add, loading, error };
}

export function useRating() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setErr] = useState(null);

  const rate = async (resourceId, stars, note) => {
    if (!user) return;
    setLoading(true);
    setErr(null);
    const { error } = await supabase
      .from('ratings')
      .upsert(
        { user_id: user.id, resource_id: resourceId, stars, note },
        { onConflict: 'user_id,resource_id' }
      );
    if (error) setErr(error);
    setLoading(false);
  };

  return { rate, loading, error };
}
