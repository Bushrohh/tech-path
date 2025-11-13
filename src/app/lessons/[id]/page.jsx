import { notFound } from 'next/navigation';
import { getLessonById, tracks } from '@/src/data/curriculum'; 
import LessonClient from './LessonClient';

export default async function Page({ params }) {
  const { id } = await params;                
  const { lesson, track, module } = getLessonById(id);
  if (!lesson) return notFound();

  return (
    <main className="pt-20 space-y-4 px-6">
      <h1 className="text-xl font-semibold text-teal-600 pt-10 flex justify-center">{lesson.title}</h1>
      <p className="opacity-80 flex justify-center">{track?.title} • {module?.title}</p>

      <LessonClient lesson={lesson} />
      
    </main>
  );
}


export async function generateStaticParams() {
  const ids = [];
  for (const t of tracks) {
    for (const m of t.modules || []) {
      for (const l of m.lessons || []) {
        ids.push({ id: l.id });
      }
    }
  }
  return ids;
}
