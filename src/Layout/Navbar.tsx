import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex gap-4 justify-end '>
        <li>
          <Link href='/'>Pocetna</Link>
        </li>
        <li>
          <Link href='/signup'>Prijavi se</Link>
        </li>
        <li>
          <Link href='/login'>Uloguj se</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
