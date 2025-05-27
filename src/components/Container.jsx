import Navbar from './navbar/Navbar';
import HeroContent from './herosection/HeroContent';
import Content from './ourrecipes/Content';
import RecipeS from './ourrecipes/RecipeS';
import Recipe from './ourrecipes/Recipe';




const Container = ({ AllRecipes }) => {
    // console.log(AllRecipes);
    const RecipeCon = AllRecipes

    console.log(RecipeCon);


    return (
        <div className='max-w-7xl m-auto'>
            <Navbar></Navbar>
            <HeroContent></HeroContent>
            <Content ContentTitle={'Our Recipes'} Description={'Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. '}></Content>
            <div className=''>
                <div className='w-[65%]'>
                    <RecipeS RecipeCon={RecipeCon}></RecipeS>
                </div>
            </div>

        </div>
    );
};

export default Container;