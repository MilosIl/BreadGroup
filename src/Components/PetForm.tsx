'use clinet';
import { publicAd } from '@/models';
import { useState } from 'react';
function PetForm({
  createAd,
  description,
  editAd,
  nameAd,
  owner,
  pet,
}: publicAd) {
  const [form, setForm] = useState({
    age: '',
    species: '',
    race: '',
    adoption: '',
    pedigree: '',
    gender: '',
    description: '',
  });

  const handleSubmit = () => {
    console.log('sacuvano');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='age'>
          <input
            type='number'
            placeholder='Godine'
            onChange={(e) => e.target.value}
          />
        </label>
      </div>

      <div>
        <label htmlFor='species'>
          <select name='species' placeholder='pas'>
            <option value='dog'>Pas</option>
            <option value='cat'>Macka</option>
            <option value='bird'>Ptica</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor='race'>
          Rasa
          <input type='text' name='race' placeholder='Rasa' />
        </label>
      </div>
      <div>
        <label htmlFor='adoption'>
          Usavanje
          <input type='checkbox' name='adoption' />
        </label>
      </div>
      <div>
        <label htmlFor='breeding'>
          Parenje
          <input type='checkbox' name='breeding' />
        </label>
      </div>
      <div>
        <label htmlFor='gender'>
          Pol
          <select name='gender'>
            <option value='male'>musko</option>
            <option value='female'>zensko</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor='description'>
          <textarea
            name='description'
            cols={30}
            rows={10}
            placeholder='Opis ljubimca'
          />
        </label>
      </div>
    </form>
  );
}

export default PetForm;
