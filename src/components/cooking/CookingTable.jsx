import React from 'react';
import CookingItem from './CookingItem';

const CookingTable = ({cooking}) => {
    return (
        <>
            <table className='w-full'>
                <thead>
                    <tr className="flex gap-10 ml-12 mb-4 mt-6">
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
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