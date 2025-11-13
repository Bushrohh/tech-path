import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTrackBySlug, getFirstLessonId, tracks } from '@/src/data/curriculum'; 
import TrackClient from './TrackClient';

export default async function Page({ params }) {
  const { slug } = await params;                 
  const track = getTrackBySlug(slug);
  if (!track) return notFound();

  const firstLessonId = getFirstLessonId(track);

  return (
    <main className="pt-20 space-y-6 px-6">
      <h1 className="text-2xl font-semibold text-teal-600">{track.title}</h1>
      {track.description ? <p className="opacity-80">{track.description}</p> : null}

      {firstLessonId && (
        <Link
          href={`/lessons/${firstLessonId}`}
          className="inline-block rounded bg-black text-white px-4 py-2 "
        >
          Start first lesson
        </Link>
      )}

      
      <TrackClient track={track} />
    </main>
  );
}


export async function generateStaticParams() {
  return tracks.map(t => ({ slug: t.slug }));
}
