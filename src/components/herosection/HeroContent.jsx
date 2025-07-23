import HeroTitle from './HeroTitle';
import HeroDes from './HeroDes';
import PremaryBtn from '../PremaryBtn';
import heroBanner from '../../../public/HeroBanner.png';


const HeroContent = () => {
    return (
        <div style={{ backgroundImage: `url("${heroBanner}")` }} className='bg-hero-image w-[1280px] bg-no-repeat px-48 py-32' >
            <HeroTitle Title={'Discover an exceptional cooking class tailored for you!'} Style={''}></HeroTitle>
            <HeroDes Description={'Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.'}></HeroDes>
            <div className='flex gap-6 justify-center'>
                <PremaryBtn BtnTitle={'Explore More'} Style={''}></PremaryBtn>
                <PremaryBtn BtnTitle={'Our Feedback'} Style={''}></PremaryBtn>
            </div>
        </div>
    );
};

export default HeroContent;