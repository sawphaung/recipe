import React from 'react';

const Recipe = ({
  title,
  image,
  calories,
  ingredients,
  time,
  totalWeight,
  source,
  serving
}) => {
  return (
    <div className='recipe'>
      <div className='image-div'>
        <img src={image} alt='' />
      </div>
      <h1 className='recipe-title'>{title}</h1>
      <p className='calories'>
        Calories: <span>{parseInt(calories)} Kcal</span>
      </p>
      <p className='calories'>
        Time: <span>{time}</span> Minutes
      </p>
      <p className='calories'>
        Total Weight: <span>{parseInt(totalWeight)} g</span>
      </p>

      <p className='calories'>
        Serving: <span>{serving}</span>{' '}
      </p>

      <p>Ingredients:</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>

      <p className='calories'>
        Source: <span>{source}</span>
      </p>
    </div>
  );
};

export default Recipe;
