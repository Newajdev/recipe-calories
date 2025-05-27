import React from 'react';

const Button = ({BtnTitle, Style}) => {
    return (
        <div>
            <button className={`${Style} text-BaseTitle bg-Primary px-8 py-5 rounded-full font-semibold border-2 border-transparent hover:border-white hover:text-white hover:bg-transparent duration-500`}>{BtnTitle}</button>
        </div>
    );
};

export default Button;