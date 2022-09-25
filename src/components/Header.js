import { Auth } from './Auth'
import banner from '../assets/banner.jpg'



export const Header = () => {
  
  return (
    
    <header>
      <img
      src={banner}
      alt='banner'
      className='banner'
      ></img>
      <nav>
        <Auth />
      </nav>
      
    </header>
  );   
};