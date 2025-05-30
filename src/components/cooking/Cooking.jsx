import React from 'react';
import Table from './Table';
import CookingTable from './CookingTable';

const Cooking = ({cooking}) => {
    return (
        <div className='items-center flex flex-col py-8'>
                   <h3 className='font-semibold text-2xl text-BaseTitle w-11/12 text-center border-b-2 pb-4 mt-8'>Currently cooking:  {cooking.length}</h3>

                   <CookingTable cooking={cooking}></CookingTable>
              
        </div>
    );
};

export default Cooking;