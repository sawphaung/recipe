import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header';
import RecipeLists from './components/RecipeLists';
import Search from './components/Search';
import Footer from './components/Footer';

import './App.scss';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = 'cf323220';
  const APP_KEY = 'ca2847e728f789f06f6a37ab119662fd';

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);
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
      <Header />
      <div className='container'>
        <Search
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          search={search}
        />
        <RecipeLists recipes={recipes} />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
