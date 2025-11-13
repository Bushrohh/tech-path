import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabase';
import { useUser } from '@/src/hooks/useAuth';

export function useTrackCompletion() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(!!user);
  const [error, setErr] = useState(null);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;

    async function run() {
      setLoading(true);
      setErr(null);
      const { data, error } = await supabase
        .from('track_completion')
        .select('*')
        .eq('user_id', user.id);

      if (!cancelled) {
        if (error) setErr(error);
        setData(data || []);
        setLoading(false);
      }
    }
    run();
    return () => { cancelled = true; };
  }, [user?.id]);

  return { data, loading, error };
}
