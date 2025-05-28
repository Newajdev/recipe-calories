import React from 'react';
import Table from './Table';

const WantToCook = ({wcook, HendlerCooking}) => {

    
    
    
    
    return (
        <div className='items-center flex flex-col py-8'>
            <h3 className='font-semibold text-2xl text-BaseTitle w-11/12 text-center border-b-2 pb-4'>Want to cook: 0{wcook.length}</h3>
            <Table wcook={wcook}></Table>

            <h3 className='font-semibold text-2xl text-BaseTitle w-11/12 text-center border-b-2 pb-4 mt-8'>Currently cooking:  0{}</h3>

             <Table HendlerCooking={HendlerCooking}></Table>    
        </div>
    );
};

export default WantToCook;