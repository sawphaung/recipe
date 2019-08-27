import React from 'react';
import Recipe from './Recipe';

const RecipeLists = ({ recipes }) => {
  return (
    <div className='recipe-lists'>
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          time={recipe.recipe.totalTime}
        />
      ))}
    </div>
  );
};

export default RecipeLists;
