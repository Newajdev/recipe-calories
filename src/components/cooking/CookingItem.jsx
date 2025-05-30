import React from 'react';

const CookingItem = ({cooks}) => {
    const {recipe_name, total_Calories, cooking_time } = cooks;
    
    return (
        <tr className='flex items-center bg-Black5 pl-3 py-2 mb-1'>
                <td className='w-48 text-start'>{recipe_name}</td>
                <td className='w-28 text-start'>{cooking_time}</td>
                <td className='w-28 text-start'>{total_Calories} calories</td>
            </tr>
    );
};

export default CookingItem;