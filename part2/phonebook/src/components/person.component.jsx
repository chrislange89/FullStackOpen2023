import PropTypes from 'prop-types'; 

const Person = ({ name, number }) => {
  return (
    <p>{name} - {number}</p>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
}

export default Person;