import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const SUPABASE_USER_KEY = `sb-${process.env.NEXT_PUBLIC_SUPABASE_URL}-auth-token`;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const getUserFromLocalStorage = async () => {
  const user = localStorage.getItem(SUPABASE_USER_KEY);
  const parsedUser = JSON.parse(user);
  return parsedUser?.user;
};
