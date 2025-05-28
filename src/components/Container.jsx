import Navbar from './navbar/Navbar';
import HeroContent from './herosection/HeroContent';
import Content from './ourrecipes/Content';
import RecipeS from './ourrecipes/RecipeS';
import WantToCook from './ourrecipes/WantToCook';
import { useState } from 'react';





const Container = ({ AllRecipes }) => {
    const RecipeCon = AllRecipes;


    const [wcook, setwcook ]=useState([]);
    const [Cooking, setCooking] = useState([])
  

    const HendlerWantsCook = (recipe) =>{
        const newCook = [...wcook, recipe ];
        setwcook(newCook);

    }

    const HendlerCooking = (wcook)=>{
        const newCooking = [...Cooking, wcook]
        setCooking(newCooking)
    }

    console.log(Cooking);
    

    
    

    


    return (
        <div className='max-w-7xl m-auto'>
            <Navbar></Navbar>
            <HeroContent></HeroContent>
            <Content ContentTitle={'Our Recipes'} Description={'Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. '}></Content>
            <div className='flex gap-6'>
                <div className='w-[65%]'>
                    <RecipeS RecipeCon={RecipeCon} HendlerWantsCook={HendlerWantsCook}></RecipeS>
                </div>
                <div className='w-[35%] border-2 rounded-2xl'>
                    <WantToCook wcook={wcook} HendlerCooking={HendlerCooking}></WantToCook>
                </div>
            </div>
        </div>
    );
};

export default Container;