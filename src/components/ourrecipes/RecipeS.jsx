import Recipe from "./Recipe";



const RecipeS = ({RecipeCon}) => {
    // console.log(AllRecipes);
    
    return (
        <div className="grid grid-cols-2 gap-6">            
            {
                RecipeCon.map(recipe=> <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};



export default RecipeS;