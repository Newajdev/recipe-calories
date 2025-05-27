import React from 'react';

const SecondaryBtn = ({BtnTitle, Style}) => {
    return (
        <div>
            <button className={`text-BaseTitle bg-Primary px-6 py-3 rounded-full font-semibold border-2 border-transparent hover:border-BaseTitle hover:text-BaseTitle hover:bg-transparent duration-500 ${Style}`}>{BtnTitle}</button>
        </div>
    );
};

export default SecondaryBtn;