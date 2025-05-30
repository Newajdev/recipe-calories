import React from 'react';
import Table from './Table';
import CookingItem from './CookingItem';

const WantToCook = ({wcook, HendlerPreparing}) => {

    
    return (
        <div className='items-center flex flex-col py-8'>
            <h3 className='font-semibold text-2xl text-BaseTitle w-11/12 text-center border-b-2 pb-4'>Want to cook: {wcook.length}</h3>
            <Table wcook={wcook} HendlerPreparing={HendlerPreparing}></Table>    
        </div>
    );
};

export default WantToCook;