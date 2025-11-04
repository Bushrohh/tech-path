import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

const fetchQuestions = async () => {
  const { data, error } = await supabase
    .from('quizzes')
    .select('*')
    .order('order', { ascending: true });

  if (error) throw error;

  return data;
};

export const useQuiz = () => {
  return useQuery({
    queryKey: ['quiz-questions'],
    queryFn: fetchQuestions,
  });
};
