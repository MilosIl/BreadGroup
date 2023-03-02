const Card = () => {
  return (
    <div>
      <h3>name</h3>
      <p>description</p>
      <p>gender</p>
      <p>age</p>
      <div>
        Is it for adoption <input type='checkbox' name='adoption' />
      </div>
      <div>
        Is it for breeding <input type='checkbox' name='breeding' />
      </div>
      <div>
        pedigree <input type='checkbox' name='pedigree' />
      </div>
    </div>
  );
};

export default Card;
