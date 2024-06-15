import { NavLink } from 'react-router-dom';

import scss from './Header.module.scss';
import icons from '../../images/icons.svg';


// import Logo from '../../images/logo.svg';
// import { ReactComponent as Logo } from '../../images/logo.svg';
// import { ReactComponent as Logo } from '../../images/symbol-defs.svg#icon-logo';
// import { ReactComponent as MySuperCustomIconComponent } from "../../images/logo.svg";

const Header = () => {

  return (
    <header className={scss.header}>
      <div className={scss.header__container}>

        <NavLink to='/' className={scss.header__logoWrap}>
          <svg width='28' height='28'>
            <use href={`${icons}#icon-logo`}></use>
          </svg>
          <p className={scss.header__logoText}>LearnLingo</p>
        </NavLink>
          
        <nav className={scss.header__navigation}>
            <NavLink to='/' className={({ isActive }) => `${scss.header__link} ${isActive ? scss.header__link_active : ''}`}>Home</NavLink>
            <NavLink to='/teachers' className={({ isActive }) => `${scss.header__link} ${isActive ? scss.header__link_active : ''}`}>Teachers</NavLink>
            <NavLink to='/favorites' className={({ isActive }) => `${scss.header__link} ${isActive ? scss.header__link_active : ''}`}>Favorites</NavLink>
        </nav>

        <div className={scss.header__buttonsWrap}>
          <button className={scss.header__button}>
            <svg width='20' height='20'>
              <use href={`${icons}#icon-log-in`}></use>
            </svg>
            Log in
          </button>
          <button className={`${scss.header__button} ${scss.header__button_registration}`}>Registration</button>
        </div>

      </div>  
    </header>
  );
};


export default Header;