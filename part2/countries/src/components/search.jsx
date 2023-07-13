import PropTypes from 'prop-types';

const Search = ({ search, handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">
        Search: 
      </label>
      <input 
        value={search} 
        onChange={handleSearch} 
        type="text" 
        id="search" 
      />
    </div>
  )
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search;