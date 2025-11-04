'use client';

import { useParams } from 'next/navigation';
import { useResource } from '@/src/hooks/useResources';
import { Spinner } from '@/src/components/ui/spinner';

export default function ResourcePage() {
  const { id } = useParams();

  const { data: resource, isLoading } = useResource(id);

  return (
    <div className='flex justify-center items-center'>
      {isLoading && <Spinner />}
      <div>
        <iframe
          width='560'
          height='315'
          src={resource?.video_url}
          title={resource?.title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <h1>{resource?.title}</h1>
        <p>{resource?.description}</p>
      </div>
    </div>
  );
}
