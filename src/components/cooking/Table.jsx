import React from 'react';
import CookItem from './CookItem';


const Table = ({wcook, HendlerPreparing}) => {
    return (
        <>
            <table>
                <thead>
                    <tr className="flex gap-10 ml-12 mb-4 mt-6">
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wcook.map(cook => <CookItem key={cook.id} cook={cook} HendlerPreparing={HendlerPreparing} ></CookItem>)
                    }
                    
                </tbody>

                
            </table>
        </>
    );
};

export default Table;