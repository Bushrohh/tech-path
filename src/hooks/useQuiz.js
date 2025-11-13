import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/src/lib/supabase';

const fetchQuestions = async () => {
  const { data, error } = await supabase
    .from('quiz')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;
  
  console.log('Fetched quiz data:', data); 
  return data;
};

export const useQuiz = () => {
  return useQuery({
    queryKey: ['quiz-questions'],
    queryFn: fetchQuestions,
  });
};
