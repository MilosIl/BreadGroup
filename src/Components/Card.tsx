const Card = () => {
  return (
    <article>
      <h3>Ime ljubimaca</h3>
      <div>Opis ljubimaca
        <p>rasa</p>
        <p>vrsta</p>
        <p>nesto o ljubimcu</p>
      </div>
      <p>pol</p>
      <p>starost</p>
      <div>
       Da li se usvaja <input type='checkbox' name='adoption' />
      </div>
      <div>
        Da li je za parenje <input type='checkbox' name='breeding' />
      </div>
      <div>
        Da li ima pedigre <input type='checkbox' name='pedigree' />
      </div>
    </article>
  );
};

export default Card;
