import PropTypes from 'prop-types';

const Search = ({ searchTerm, handleSearchTerm }) => {
  return (
    <>
      <h2>Search</h2>
      <form>
        <label htmlFor="search">filter shown with: </label>
        <input name="search" value={searchTerm} onChange={handleSearchTerm} />
      </form>
    </>
  )
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchTerm: PropTypes.func.isRequired
}

export default Search;

