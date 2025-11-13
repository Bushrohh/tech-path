
import Link from 'next/link';
import { tracks } from '@/src/data/curriculum'; 

export default function TracksIndex() {
  return (
    <main className="pt-20 px-6 space-y-6 bg-gradient-to-br from-green-100 to-teal-100">
      <header className=" items-center pt-10">
        <h1 className="text-2xl font-bold text-teal-700 flex justify-center">Pick a Track</h1>
        <p className="opacity-80 flex justify-center">Choose a path and start learning.</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((t) => (
          <Link
            key={t.id}
            href={`/tracks/${t.slug}`}
            className="rounded-xl border p-4 hover:shadow transition"
          >
            <div className="text-lg font-medium text-teal-600">{t.title}</div>
            {t.description && (
              <div className="text-sm opacity-80 mt-1">{t.description}</div>
            )}
            <div className="text-xs mt-2 opacity-60">Level: {t.level || 'All Levels'}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
