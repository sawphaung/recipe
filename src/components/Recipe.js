import React from 'react';

const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div className='recipe'>
      <h1 className='recipe-title'>{title}</h1>
      <div className='image-div'>
        <img src={image} alt='' />
      </div>
      <p>Calories: {parseInt(calories)} Kcal</p>
      <p>Ingredients:</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
