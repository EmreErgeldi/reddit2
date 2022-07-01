import Reddit2Logo from './Images/beyaz-logo.svg';
import CreateReddit from './Images/plus.svg';
import Notifications from './Images/bell.svg';
import User from './Images/user.svg';
import Karma from './Images/karma.svg';
import Search from './Images/search.svg';
import Icon from './Icon';

const Navbar = () => {
  return ( 
    <div className='navbar'>
      <a href="/" className='navbar-logo'>
        <img alt="reddit2 logo" src={Reddit2Logo} />
      </a>
      <form className='navbar-search'>
        <label htmlFor='search' className='search-icon'>
          <img src={Search} alt="search" />
        </label>
        <input className='search-input' type="search" name="search" id="" placeholder='Search Reddit' autoComplete='off'/>
      </form>
      <div className="icons">
        <Icon image = {CreateReddit}/>
        <Icon image = {Notifications}/>
      </div>
      <div className="profile-section">
          <Icon image = {User}/>
          <div>
            <div>Username</div>
            <div><img src={Karma} alt="" className='karma'/> 1678 karma</div>
          </div>
      </div>
      
      
    </div>
   );
}
 
export default Navbar;