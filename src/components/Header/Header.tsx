import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useModal from '../../hooks/useModal';
import Modal from '../../helpers/Modal/Modal';
import FormLogIn from '../FormLogIn/FormLogIn';
import FormRegistration from '../FormRegistration/FormRegistration';
import scss from './Header.module.scss';
import icons from '../../images/icons.svg';

type FormType = 'logIn' | 'registration';


const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [modalContent, setModalContent] = useState<FormType | null>(null);

  const handleOpenModal = (formType: FormType) => { 
    setModalContent(formType);
    openModal();
  }

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
          <button className={scss.header__button} onClick={() => handleOpenModal('logIn')}>
            <svg width='20' height='20'>
              <use href={`${icons}#icon-log-in`}></use>
            </svg>
            Log in
          </button>
          <button className={`${scss.header__button} ${scss.header__button_registration}`} onClick={() => handleOpenModal('registration')}>Registration</button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <>
            {modalContent === 'logIn' && <FormLogIn />}
            {modalContent === 'registration' && <FormRegistration/>}
          </>
        </Modal>

      </div>  
    </header>
  );
};


export default Header;