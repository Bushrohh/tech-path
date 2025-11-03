import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { getUserFromLocalStorage, supabase } from '../lib/supabase';
import { Button } from './ui/button';

export const AuthAction = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserFromLocalStorage();

      setUser(user);

      if (!user) {
        if (pathname !== '/' && !pathname.startsWith('/auth')) {
          router.push('/auth/login');
        }
      }
    };
    getUser();
  }, [pathname, router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
    setUser(null);
  };

  return (
    <Fragment>
      {!user ? (
        <Fragment>
          <Link href='/auth/login'>Login</Link>
          <Link href='/auth/sign-up'>Sign Up</Link>
        </Fragment>
      ) : (
        <Fragment>
          <p className='font-bold'>{user?.user_metadata?.display_name}</p>
          <Button variant='ghost' onClick={handleLogout}>
            Logout
          </Button>
        </Fragment>
      )}
    </Fragment>
  );
};
