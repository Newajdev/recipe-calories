import React from 'react';

const TestApp = ({Recipe}) => {
    // console.log(Recipe.recipe_name);

    const {recipe_name, recipe_des}= Recipe;
    
    return (
        <div>
            <h1>Hello From Test Racipe Name is: {recipe_name}</h1>
            <p className='bg-red-400'>{recipe_des}</p>
        </div>
    );
};

export default TestApp;