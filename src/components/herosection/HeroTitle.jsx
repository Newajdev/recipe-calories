import React from 'react';

const HeroTitle = ({Title, Style}) => {
    return (
        <div>
            <h1 className={`text-white font-bold text-5xl text-center leading-[76px] mb-6 ${Style}`}>{Title}</h1>
        </div>
    );
};
export default HeroTitle;