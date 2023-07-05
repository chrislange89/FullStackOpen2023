import PropTypes from 'prop-types';
import Person from './person.component';

const Numbers = ({ people }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {people.map((person) => 
        <Person 
          key={person.id} 
          name={person.name} 
          number={person.number} 
        /> 
      )}
    </div>
  )
}

Numbers.propTypes = {
  people: PropTypes.array.isRequired
}

export default Numbers;