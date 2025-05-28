import SmallBtn from '../SmallBtn';

const Rows = ({wcook, HendlerCooking}) => {
     const {id, recipe_name, cooking_time, total_Calories}=wcook;
    
    
    
    
    return (
        
            <tr className='flex gap-4 items-center bg-Black5 px-3 py-2 mb-1 text-'>
                <td>{recipe_name}</td>
                <td>{cooking_time}</td>
                <td>{total_Calories}</td>
                <td>
                    <button onClick={()=>HendlerCooking(id, wcook)} className={`text-BaseTitle bg-Primary px-4 py-2 rounded-full font-semibold border-2 border-transparent hover:border-BaseTitle hover:text-BaseTitle hover:bg-transparent duration-500`}>Preparing</button>
                </td>
            </tr>
            
        
    );
};

export default Rows;