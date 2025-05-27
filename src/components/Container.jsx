import React from 'react';
import Navbar from './navbar/Navbar';
import HeroContent from './herosection/HeroContent';



const Container = () => {
    return (
        <div className='max-w-7xl m-auto'>
            <Navbar></Navbar>
            <HeroContent></HeroContent>
        </div>
    );
};

export default Container;