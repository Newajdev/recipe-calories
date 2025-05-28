import Recipe from "./Recipe";



const RecipeS = ({RecipeCon, HendlerWantsCook}) => {

    
    return (
        <div className="grid grid-cols-2 gap-6">            
            {
                RecipeCon.map(recipe=> <Recipe key={recipe.id} recipe={recipe} HendlerWantsCook={HendlerWantsCook}></Recipe>)
            }
        </div>
    );
};



export default RecipeS;