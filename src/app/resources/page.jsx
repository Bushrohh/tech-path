'use client';

import { useState, useEffect } from 'react';

import { supabase } from '@/src/lib/supabase';
import Link from 'next/link';

export default function ResourcesPage() {
  const [resources, setResources] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { data, error } = await supabase.from('resources').select('*');

        setResources(data);
        setFiltered(data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  useEffect(() => {
    if (search.trim() === '') {
      setFiltered(resources);
    } else {
      const lower = search.toLowerCase();
      const filteredList = resources.filter(
        (res) =>
          res.title.toLowerCase().includes(lower) ||
          (res.description && res.description.toLowerCase().includes(lower))
      );
      setFiltered(filteredList);
    }
  }, [search, resources]);

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen text-xl text-emerald-700 font-semibold'>
        Loading resources...
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-100 to-teal-100 p-6'>
      <h1 className='text-4xl font-extrabold text-teal-700 text-center pt-15 mb-6'>
        Explore Tech Resources
      </h1>

      <div className='flex justify-center mb-8'>
        <input
          type='text'
          placeholder='Search resources...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500'
        />
      </div>

      {filtered.length === 0 ? (
        <p className='text-center text-white text-lg'>No resources found.</p>
      ) : (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filtered.map((item) => (
            <div
              key={item.id}
              className='bg-white p-6 rounded-2xl shadow-md hover:scale-[1.02] transition'
            >
              <h2 className='text-xl font-bold text-gray-800 mb-2'>
                {item.title}
              </h2>
              <p className='text-gray-600 mb-4 line-clamp-3'>
                {item.description || 'No description available'}
              </p>
              <Link
                href={`/resources/${item.id}`}
                className='text-emerald-700 font-semibold hover:underline'
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
