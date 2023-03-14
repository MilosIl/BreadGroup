import Footer from "@/Layout/Footer";
import Navbar from "@/Layout/Navbar";
import { FormEvent } from "react";

function signup() {
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };
  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center h-[80vh]">
      <form onSubmit={handleSignUp} className='flex flex-col gap-4'>
        <label htmlFor='name'>
          <input type='text' className="input" placeholder=' Ime' name='name' />
        </label>

        <label htmlFor='lastName'>
          <input type='text' className="input" placeholder=' Prezime' name='lastName' />
        </label>

        <label htmlFor='email'>
          <input type='email' className="input" placeholder='Email' name='email' />
        </label>

        <label htmlFor='password'>
          <input type='password' className="input" placeholder='Sifra' name='password' />
        </label>
        <label htmlFor='password-validation'>
          <input
            type='password'
            className="input"
            placeholder='Ponovi sifru'
            name='password-validation'
          />
        </label>
        <button className="btn mt-2" type='submit'>Prijavi se</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default signup;
