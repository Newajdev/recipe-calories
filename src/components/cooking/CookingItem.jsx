import React from 'react';

const CookingItem = ({cooks}) => {
    const {recipe_name, total_Calories, cooking_time } = cooks;
    
    return (
        <tr className='flex gap-4 items-center bg-Black5 px-3 py-2 mb-1 text-'>
                <td>{recipe_name}</td>
                <td>{cooking_time}</td>
                <td>{total_Calories} calories</td>
            </tr>
    );
};

export default CookingItem;