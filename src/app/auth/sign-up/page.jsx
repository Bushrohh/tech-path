'use client';

import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Spinner } from '@/src/components/ui/spinner';
import { supabase } from '@/src/lib/supabase';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { data: signUpData, error } = await supabase.auth.signUp({
        ...data,
        options: {
          data: {
            display_name: data.fullName,
          },
        },
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Account created successfully');
        router.push('/auth/login');
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
    <div className='flex h-screen'>
      <div className='w-full  flex flex-col justify-center items-center p-8 bg-gray-50'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>
          Create an Account
        </h2>
        <form className='w-full max-w-sm space-y-4' onSubmit={handleSignup}>
          <input
            name='fullName'
            type='text'
            placeholder='Full Name'
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none'
            required
            onChange={handleChange}
          />
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
            onChange={handleChange}
            required
          />
          <Button
            type='submit'
            className='w-full mt-5'
            size='xl'
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : 'Sign Up'}
          </Button>
        </form>

        <p className='mt-4 text-gray-600'>
          Already have an account?{' '}
          <a
            href='/auth/login'
            className='text-teal-600 font-semibold hover:underline'
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
