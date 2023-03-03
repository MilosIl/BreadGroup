const myAds = () => {
  const allAds = ['oglas 1', 'oglas 2', 'oglas 3'];

  return (
    <div>
      <h2>Moji oglasi</h2>
      <ul>
        {allAds.map((ads) => {
          return (
            <li key={ads}>
              <h3>{ads}</h3>
              <p>ostatak oglasa</p>
              <div>
                <button>izmeni</button>
                <button>obrisi</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default myAds;
