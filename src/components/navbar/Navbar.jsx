import ListItem from './ListItem';
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-12'>
            <h1 className='text-BaseTitle font-bold text-3xl'>Recipe Calories</h1>

            <ul className='flex gap-5'>
                <ListItem ItemName={'home'} Style={''}></ListItem>
                <ListItem ItemName={'Recipes'} Style={''}></ListItem>
                <ListItem ItemName={'About'} Style={''}></ListItem>
                <ListItem ItemName={'Search'} Style={''}></ListItem>
            </ul>

            <div className='flex justify-center items-center gap-4 w-3/12 '>
                <div className='flex items-center gap-2 py-3 pl-6 bg-Black5 rounded-full grow text-Black60 hover:cursor-text'><LuSearch />Search</div>
                <div className='text-2xl p-3 bg-Primary rounded-full text'><CgProfile /></div>
            </div>

        </div>
    );
};

export default Navbar;