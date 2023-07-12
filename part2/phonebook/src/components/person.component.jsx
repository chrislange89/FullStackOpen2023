import PropTypes from 'prop-types'; 

const Person = ({ id, name, number, handleDelete }) => {
  return (
      <tr>
        <td>{name}</td>
        <td>{number}</td>
        <button id={id} type="button" onClick={handleDelete}>Delete</button>
      </tr>
  )
}

Person.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default Person;