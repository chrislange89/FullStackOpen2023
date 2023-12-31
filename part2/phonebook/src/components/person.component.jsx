import PropTypes from 'prop-types'; 

const Person = ({ id, name, number, handleDelete }) => {
  return (
      <tr>
        <td className="idColor">{id}</td>
        <td>{(name) ? name : ''}</td>
        <td>{number ? number : ''}</td>
        <td>
          <button className='delete' id={id} type="button" onClick={handleDelete}>Delete</button>
        </td>
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