import React from 'react';

const ListItem = ({ItemName, Style}) => {
    return (
        <>
        <li className={`${Style} text-base text-Black60 list-none hover:text-Primary hover:cursor-pointer duration-500`}>{ItemName}</li>            
        </>
    );
};

export default ListItem;