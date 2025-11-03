'use client';

import { Button } from '@/src/components/ui/button';
import { Spinner } from '@/src/components/ui/spinner';
import { supabase } from '@/src/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { data: loginData, error } = await supabase.auth.signInWithPassword(
        data
      );

      if (error) {
        toast.error(error.message);
      } else {
        console.log(loginData);
        router.push('/opt-path');
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className='w-full max-w-sm space-y-4'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800'>Welcome Back</h2>
      <form onSubmit={handleLogin} className='space-y-4'>
        <input
          name='email'
          type='email'
          placeholder='Email'
          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none'
          required
          onChange={handleChange}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none'
          required
          onChange={handleChange}
        />
        <Button type='submit' className='w-full' size='xl' disabled={isLoading}>
          {isLoading ? <Spinner /> : 'Login'}
        </Button>
      </form>
      <p className='mt-4 text-gray-600'>
        Don’t have an account?{' '}
        <a
          href='/auth/sign-up'
          className='text-teal-600 font-semibold hover:underline'
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}
