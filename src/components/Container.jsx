import Navbar from './navbar/Navbar';
import HeroContent from './herosection/HeroContent';
import Content from './ourrecipes/Content';
import RecipeS from './ourrecipes/RecipeS';
import WantToCook from './cooking/WantToCook';
import Cooking from './cooking/Cooking';
import { useState } from 'react';






const Container = ({ AllRecipes }) => {
    const RecipeCon = AllRecipes;

    const [wcook, setwcook] = useState([])

    const HendlerWantsCook =(recipe)=>{
        const newWantsCook = [...wcook, recipe ]
        setwcook(newWantsCook)
    }

    const [cooking, setcooking] = useState([]);

    const HendlerPreparing =(id, cook)=>{
        const newPreparing = [...cooking, cook]
        setcooking(newPreparing);

        const isPreparing =  wcook.filter(wcook => wcook.id !==id);
        setwcook(isPreparing)

    }
    
    
    

    return (
        <div className='max-w-7xl m-auto'>
            <Navbar></Navbar>
            <HeroContent></HeroContent>
            <Content ContentTitle={'Our Recipes'} Description={'Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. '}></Content>
            <div className='flex gap-6'>
                <div className='w-[65%]'>
                    <RecipeS RecipeCon={RecipeCon} HendlerWantsCook={HendlerWantsCook}></RecipeS>
                </div>
                <div className='w-[35%] border-2 rounded-2xl py-8'>
                    <WantToCook wcook={wcook} HendlerPreparing={HendlerPreparing}></WantToCook>
                    <Cooking cooking={cooking}></Cooking>
                </div>
            </div>
        </div>
    );
};

export default Container;