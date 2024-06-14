import { NavLink } from 'react-router-dom';

import scss from './HomePage.module.scss';


const HomePage = () => {
// `${scss.header__link} ${isActive ? scss.header__link_active : ''}`}
  return (
    <div className={scss.homePage}>
      <div className={scss.homePage__wrap}>
        <div className={`${scss.homePage__box} ${scss.homePage__box_info}`}>
          <div>
            <h1 className={scss.homePage__title}>Unlock your potential with the best <span className={scss.homePage__title_accent}>language</span> tutors</h1>
            <p  className={scss.homePage__text}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          </div>
          <NavLink to='/teachers' className={scss.homePage__link}>Get started</NavLink>
        </div>
        <div className={`${scss.homePage__box} ${scss.homePage__box_img}`}>
          <img className={scss.homePage__image} src='src/images/home-img.png' alt='Girl with apple device' width='391' height='578'/>
        </div>
      </div>
      <ul className={scss.homePage__list}>
        <li className={scss.homePage__item}>
          <p className={scss.homePage__counter}>32,000 +</p>
          <p className={scss.homePage__description}>Experienced tutors</p>
        </li>
        <li className={scss.homePage__item}>
          <p className={scss.homePage__counter}>300,000 +</p>
          <p className={scss.homePage__description}>5-star tutor reviews</p>
        </li>
        <li className={scss.homePage__item}>
          <p className={scss.homePage__counter}>120 +</p>
          <p className={scss.homePage__description}>Subjects taught</p>
        </li>
        <li className={scss.homePage__item}>
          <p className={scss.homePage__counter}>200 +</p>
          <p className={scss.homePage__description}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
};


export default HomePage;