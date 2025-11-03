'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/src/lib/supabase';
import { useParams } from 'next/navigation';

export default function ResourcePage() {
  const [resource, setResource] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResource = async () => {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('id', id);
      if (error) {
        console.error('Error fetching resource:', error);
      } else {
        setResource(data[0]);
      }
    };
    fetchResource();
  }, [id]);

  return (
    <div className='flex justify-center items-center'>
      <div>
        <iframe
          width='560'
          height='315'
          src={resource?.video_url}
          title={resource?.title}
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
        <h1>{resource?.title}</h1>
        <p>{resource?.description}</p>
      </div>
    </div>
  );
}
