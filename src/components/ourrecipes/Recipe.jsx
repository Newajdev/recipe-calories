import { AiOutlineFire } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import SecondaryBtn from '../SecondaryBtn'

const Recipe = ({ recipe, HendlerWantsCook }) => {
    const { recipe_name, recipe_img, recipe_des, ingredients_num, ingredient_name, cooking_time, total_Calories } = recipe;

    return (
        <>
            <div className="flex flex-col space-y-6 px-6 py-6 border-2 rounded-2xl">
                <img className='h-48 rounded-2xl' src={recipe_img} alt="" />
                <h3 className='font-semibold text-xl text-BaseTitle'>{recipe_name}</h3>
                <p className='fira text-base text-Black60'>{recipe_des}</p>
                <div className='border-y-2 py-6'>
                    <h4 className='font-medium text-lg text-BaseTitle'>Ingredients: {ingredients_num}</h4>
                    <ul className="ml-8 text-Black60">
                        {
                            ingredient_name.map((ingredient, idx) => <li key={idx} className='list-disc'>{ingredient}</li>)
                        }
                    </ul>
                </div>
                <div className="flex gap-4 grow items-start">
                    <p className="flex justify-center items-center gap-2 text-Black80"><IoIosTimer />{cooking_time}</p>
                    <p className="flex justify-center items-center gap-2 text-Black80"><AiOutlineFire />{total_Calories} Calories</p>
                </div>
                <div>
                <button onClick={() => HendlerWantsCook(recipe)} className={`text-BaseTitle bg-Primary px-6 py-3 rounded-full font-semibold border-2 border-transparent hover:border-BaseTitle hover:text-BaseTitle hover:bg-transparent duration-500 `}>Want to Cook</button>
                </div>

            </div>
        </>
    );
};

export default Recipe;