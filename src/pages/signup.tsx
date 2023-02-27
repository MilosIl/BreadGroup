import React from 'react';

type Props = {};

function signup({}: Props) {
  const handleSignUp = () => {};
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label htmlFor='name'>
          <input type='text' placeholder=' ime' name='name' />
        </label>

        <label htmlFor='lastName'>
          <input type='text' placeholder=' prezime' name='lastName' />
        </label>

        <label htmlFor='email'>
          <input type='email' placeholder='email' name='email' />
        </label>

        <label htmlFor='location'>
          <input type='text' placeholder='Lokacija' name='location' />
        </label>

        <label htmlFor='password'>
          <input type='password' placeholder='Sifra' name='password' />
        </label>
        <label htmlFor='password-validation'>
          <input
            type='password'
            placeholder='Ponovi sifru'
            name='password-validation'
          />
        </label>
        <button type='submit'>Prijavi se</button>
      </form>
    </div>
  );
}

export default signup;
