import Footer from '@/Layout/Footer';
import Navbar from '@/Layout/Navbar';
import Link from 'next/link';

const login = () => {
  const handleLogIn = () => {};


  return (
    <>
    <Navbar/>    
    <div className="container mx-auto mt-16  ">
      <form className="flex flex-col items-center justify-center" onSubmit={handleLogIn}>
        <label htmlFor='username'>
          <input
          className='input'
            type='text'
            name='username'
            id='userName'
            placeholder='Korisnicko ime'
          />
        </label>

        <label htmlFor='password '>
          <input
          className='input'
            type='password'
            name='password'
            id='password'
            placeholder='Vasa sifra'
          />
        </label>
        <div className="flex  flex-col gap-4 mt-4">

          <button className="btn " type='submit'>Ulogujte se</button>
          <button  className="btn btn-outline">
            <Link href='/signup'>
            Kreiraj nalog
            </Link>
            </button>
        </div>
      </form>
        <div className='mt-8 flex flex-col items-center justify-center  gap-2 border-t-2  py-4 border-green-500 basis-1'>
          <button className="border p-2 bg-green-500 rounded-lg">Ulogujte se pomocu Google</button>
          <button className="border p-2 bg-green-500 rounded-lg">Ulogujte se pomocu Facebook</button>
          <button className="border p-2 bg-green-500 rounded-lg">Ulogujte se pomocu Twitter</button>
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default login;
