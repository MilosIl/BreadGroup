const PetForm = () => {
  const handleSubmit = () => {
    console.log('sacuvano');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='gender'>
          Gender
          <select name='gender'>
            <option value='male'>male</option>
            <option value='female'>female</option>
          </select>
        </label>
      </div>
    </form>
  );
};

export default PetForm;
