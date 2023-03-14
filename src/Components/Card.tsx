import { IPet } from '@/models';

const Card = ({
  age,
  description,
  gender,
  isForAdoption,
  isForBreeding,
  owner,
  pedigree,
  race,
  species,
}: IPet) => {
  return (
    <article>
      <h3>Ime ljubimaca</h3>
      <div>
        O ljubimcu
        <p>Vrsta: {species}</p>
        <p>Rasa: {race}</p>
        <p>Opis: {description}</p>
      </div>
      <p>Pol: {gender}</p>
      <p>Godine: {age}</p>
      <div>{isForAdoption ? 'Jeste za usavanje' : 'Nije za usavanje'}</div>
      <div>{isForBreeding ? 'Jeste za parenje' : 'Nije za parenje'}</div>
      <div>{pedigree ? 'Ima papire' : 'Nema papire'}</div>
    </article>
  );
};

export default Card;
