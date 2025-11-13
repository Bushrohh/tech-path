'use client';

import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Spinner } from '@/src/components/ui/spinner';
import { useRegister } from '@/src/hooks/useAuth';


export default function SignUpPage() {
  const { mutate, isPending } = useRegister();
  const [data, setData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    mutate(data);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className='flex h-screen'>
      <div className='w-full  flex flex-col justify-center items-center p-8 bg-gray-50'>
        <h2 className='text-3xl font-bold mb-6 text-teal-700'>
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
            disabled={isPending}
          >
            {isPending ? <Spinner /> : 'Sign Up'}
          </Button>
        </form>

        <p className='mt-4 text-gray-600 flex items-center justify-center'>
          Already have an account?{' '}
          <a
            href='/auth/login'
            className='text-teal-700 font-semibold hover:underline'
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
