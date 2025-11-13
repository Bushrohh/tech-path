'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { AuthAction } from './AuthAction';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/techlogonew.svg"
            alt="TechPath Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-emerald-700">TechPath</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/opt-path"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/take-quiz"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Quiz
          </Link>
          <Link
            href="/library-page"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Resources
          </Link>
          <Link
            href="/tracks"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Courses
          </Link>
          

          <div className="ml-4">
            <AuthAction />
          </div>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-emerald-600 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg flex flex-col items-center py-4 space-y-4">
          <Link
            href="/opt-path"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-emerald-600"
          >
            Dashboard
          </Link>
          <Link
            href="/take-quiz"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-emerald-600"
          >
            Quiz
          </Link>
          <Link
            href="/resources"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-emerald-600"
          >
            Resources
          </Link>
          <Link
            href="/tracks"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Courses
          </Link>
          <div onClick={() => setMenuOpen(false)}>
            <AuthAction />
          </div>
        </div>
      )}
    </header>
  );
}
