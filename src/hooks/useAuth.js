import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const { supabase } = require('../lib/supabase');

const login = async (data) => {
  const { data: loginData, error } = await supabase.auth.signInWithPassword(
    data
  );

  if (error) throw error;

  return loginData;
};

const register = async (data) => {
  const { data: registerData, error } = await supabase.auth.signUp({
    ...data,
    options: {
      data: {
        display_name: data.fullName,
      },
    },
  });

  if (error) throw error;

  return registerData;
};

export const useLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success('Login successful');
      router.push('/opt-path');
    },
    onError: (error) => {
      toast.error(error.message);
    },
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
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
