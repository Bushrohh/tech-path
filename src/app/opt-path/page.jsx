'use client';

import { useRouter } from 'next/navigation';

export default function OptPathPage() {
  const router = useRouter();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-teal-100 p-6'>
      <h1 className='text-4xl font-bold text-teal-700 mb-6'>
        Choose Your Next Step
      </h1>
      <p className='text-gray-700 mb-10 text-center'>
        Pick one below to continue your tech journey.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl'>
        <div
          onClick={() => router.push('/take-quiz')}
          className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer text-center'
        >
          <h2 className='text-2xl font-semibold text-teal-700 mb-2'>
            Take the Quiz
          </h2>
          <p className='text-gray-600'>
            Find out which tech path is perfect for you.
          </p>
        </div>

        <div
          onClick={() => router.push('/resources')}
          className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer text-center'
        >
          <h2 className='text-2xl font-semibold text-teal-700 mb-2'>
            Browse Resources
          </h2>
          <p className='text-gray-600'>
            Access helpful materials to boost your learning.
          </p>
        </div>
      </div>
    </div>
  );
}
