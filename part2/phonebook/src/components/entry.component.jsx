import PropTypes from 'prop-types';

const Entry = ({ handleSubmit, newName, handleNewName, newNumber, handleNewNumber, addNewPerson }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add a new</h2>
        <div>
          <label htmlFor="name">name: </label>
          <input name="name" value={newName} onChange={handleNewName} />
          <br />
          <label htmlFor="number">number: </label>
          <input name="number" value={newNumber} onChange={handleNewNumber} required />
        </div>
        <div>
          <button className="add" type="button" onClick={addNewPerson}>add</button>
        </div>
      </form>
    </>
  );
};

Entry.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  newName: PropTypes.string.isRequired,
  handleNewName: PropTypes.func.isRequired,
  newNumber: PropTypes.string.isRequired,
  handleNewNumber: PropTypes.func.isRequired,
  addNewPerson: PropTypes.func.isRequired
};

export default Entry;