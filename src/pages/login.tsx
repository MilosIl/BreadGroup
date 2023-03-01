const login = () => {
  const handleLogIn = () => {};
  const handleSignUp = () => {
    // treba da se navigate to signup page
  };

  return (
    <div>
      <form onSubmit={handleLogIn}>
        <label htmlFor='username'>
          <input
            type='text'
            name='username'
            id='userName'
            placeholder='Korisnicko ime'
          />
        </label>

        <label htmlFor='password '>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Vasa sifra'
          />
        </label>
        <div className=''>
          <button type='submit'>Ulogujte se</button>
          <button className="">Ulogujte se pomocu Google</button>
          <button className="">Ulogujte se pomocu Facebook</button>
          <button className="">Ulogujte se pomocu Twitter</button>
          <button onClick={handleSignUp}>Kreiraj nalog</button>
        </div>
      </form>
    </div>
  );
};

export default login;
