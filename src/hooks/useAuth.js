
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const { supabase } = require('../lib/supabase');

const USER_KEY = 'user_session';


function getUserFromLS() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}


export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function syncFromSupabase() {
    try {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      const u = data?.user || null;

      setUser(u);
      if (u) {
        localStorage.setItem(USER_KEY, JSON.stringify(u));
      } else {
        localStorage.removeItem(USER_KEY);
      }
    } catch {
      
      const u = getUserFromLS();
      setUser(u);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    
    syncFromSupabase();

    
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user || null;
      setUser(u);
      if (u) localStorage.setItem(USER_KEY, JSON.stringify(u));
      else localStorage.removeItem(USER_KEY);
    });

    return () => sub?.subscription?.unsubscribe?.();
  }, []);

  return { user, loading };
}


const login = async (payload) => {
  const { data: loginData, error } = await supabase.auth.signInWithPassword(payload);
  if (error) throw error;
  return loginData; 
};

const register = async (payload) => {
  const { data: registerData, error } = await supabase.auth.signUp({
    ...payload,
    options: {
      data: { display_name: payload.fullName },
    },
  });
  if (error) throw error;
  return registerData; 
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (loginData) => {
      toast.success('Login successful');

      if (loginData?.user) {
        localStorage.setItem(USER_KEY, JSON.stringify(loginData.user));
      }

      router.push('/opt-path'); 
    },
    onError: (error) => toast.error(error.message),
  });
};

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success('Account created successfully');
      router.push('/auth/login');
    },
    onError: (error) => toast.error(error.message),
  });
};

/* ---------------------------
   New: Logout mutation that matches your style
---------------------------- */
export const useLogout = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
    onSuccess: () => {
      localStorage.removeItem(USER_KEY);
      toast.success('Signed out');
      router.push('/auth/login');
    },
    onError: (error) => toast.error(error.message),
  });
};
