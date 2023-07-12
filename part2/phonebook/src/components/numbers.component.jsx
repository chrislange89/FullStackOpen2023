import PropTypes from 'prop-types';
import Person from './person.component';

const Numbers = ({ people, handleDelete }) => {
  const havePeople = people.length > 0;

  if (!havePeople) {
    return (
      <div>
        <h2>Numbers</h2>
        <p>No people to show</p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Numbers</h2>
        {people.map((person) => 
          <Person 
            key={person.id}
            id={person.id}
            name={person.name} 
            number={person.number}
            handleDelete={handleDelete} 
          /> 
        )}
      </div>
    )
  }
}

Numbers.propTypes = {
  people: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default Numbers;