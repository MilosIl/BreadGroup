import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className='mt-4 mx-4'>
      <ul className='flex gap-4 justify-end '>
        <li>
          <Link
            href='/'
            className={
              router.pathname == '/' ? 'underline underline-offset-4' : ''
            }
          >
            Pocetna
          </Link>
        </li>
        <li>
          <Link
            href='/ads'
            className={
              router.pathname == '/ads' ? 'underline underline-offset-4' : ''
            }
          >
            Oglasi
          </Link>
        </li>
        <li>
          <Link
            href='/signup'
            className={
              router.pathname == '/signup' ? 'underline underline-offset-4' : ''
            }
          >
            Prijavi se
          </Link>
        </li>
        <li>
          <Link
            href='/login'
            className={
              router.pathname == '/login' ? 'underline underline-offset-4' : ''
            }
          >
            Uloguj se
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
