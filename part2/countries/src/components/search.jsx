const Search = ({ search, handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input 
        value={search} 
        onChange={handleSearch} 
        type="text" 
        id="search" 
      />
    </div>
  )
}

export default Search;