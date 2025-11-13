'use client';
 
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Button } from '@/src/components/ui/button';
 
const USER_KEY = 'user_session';
 
export const AuthAction = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const pathname = usePathname();
 
  useEffect(() => {
    const storedUser = localStorage.getItem(USER_KEY);
 
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } else {
      if (pathname !== '/' && !pathname.startsWith('/auth')) {
        console.log('no user found - redirecting to login');
        router.push('/auth/login');
      }
    }
  }, [pathname, router]);
 
  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem(USER_KEY);
    setUser(null);
    router.push('/auth/login');
  };
 
  return (
    <Fragment>
      
      {!user ? (
        <Fragment >
          <Link className="pl-2 mr-4 hover:underline hover:text-teal-700" href="/auth/login">
            Login
          </Link>
 
          <Link 
          className=" hover:underline hover:text-teal-700"
          href="/auth/sign-up">Sign Up</Link>
        </Fragment>
      ) : (
        <Fragment>
          <p className="font-bold text-teal-600">
            {user?.user_metadata?.display_name || 'User'}
          </p>
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};