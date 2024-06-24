import { useEffect, useRef } from 'react';
import scss from './Modal.module.scss';
import icons from '../../images/icons.svg';

interface IProps { 
    isOpen: boolean;
    onClose: () => void;
    children: JSX.Element;
}


const Modal = ({ isOpen, onClose, children }: IProps) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const closeModal = ({ code }: KeyboardEvent): void => {
      if (code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', closeModal);
    
    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [onClose]);
  
  const handleClickOutside = (e: React.MouseEvent): void => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return isOpen && (
    <div className={scss.modal} onClick={handleClickOutside}>
      <div className={scss.modal__popUp} ref={modalRef}>
        <button className={scss.modal__button} onClick={onClose}>
          <svg className={scss.modal__icon} width='32' height='32'>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};


export default Modal;