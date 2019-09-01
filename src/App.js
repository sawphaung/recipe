import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import RecipeLists from './components/RecipeLists';
import Search from './components/Search';

import './App.scss';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('soup');

  const APP_ID = 'cf323220';
  const APP_KEY = 'ca2847e728f789f06f6a37ab119662fd';

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
      setLoading(false);
    };
    getRecipes();
  }, [query]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  return (
    <Fragment>
      <div className='header'>
        <Header />
        <Search
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          search={search}
        />
      </div>
      <div className='container'>
        <RecipeLists recipes={recipes} loading={loading} />
      </div>
    </Fragment>
  );
}

export default App;
