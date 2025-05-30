import React from 'react';
import CookingItem from './CookingItem';

const CookingTable = ({cooking}) => {
    return (
        <>
            <table className='w-full  '>
                <thead>
                    <tr className="flex ml-3 mb-4 mt-6">
                        <th className='w-48 text-start'>Name</th>
                        <th className='w-28 text-start'>Time</th>
                        <th className='w-28 text-start'>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cooking.map((cooks, idx) => <CookingItem key={idx} cooks={cooks} ></CookingItem>)
                    }
                </tbody>

                
            </table>
        </>
    );
};

export default CookingTable;