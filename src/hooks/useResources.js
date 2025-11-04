import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

const fetchResources = async () => {
  const { data, error } = await supabase.from('resources').select('*');

  if (error) throw error;

  return data;
};

const fetchResource = async (id) => {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  return data;
};

export const useResources = () => {
  return useQuery({
    queryKey: ['resources'],
    queryFn: fetchResources,
  });
};

export const useResource = (id) => {
  return useQuery({
    queryKey: ['resources', id],
    queryFn: () => fetchResource(id),
    enabled: !!id,
  });
};
