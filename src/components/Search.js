import React from 'react';

const Search = ({ handleSubmit, handleSearch, search }) => {
  return (
    <form onSubmit={handleSubmit} className='form-control'>
      <input
        type='text'
        className='search'
        value={search}
        onChange={handleSearch}
        placeholder='Search your Recipe ...'
      />
      <button className='button' type='submit'>
        Search
      </button>
    </form>
  );
};

export default Search;
