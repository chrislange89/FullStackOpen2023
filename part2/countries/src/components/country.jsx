import PropTypes from 'prop-types';

const Country = ({ country }) => {
  return (
    <p>{country.name.common}</p>
  )
}

Country.propTypes = {
  country: PropTypes.object.isRequired
}

export default Country;