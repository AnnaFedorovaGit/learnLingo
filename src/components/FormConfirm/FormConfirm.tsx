import { useAppDispatch } from '../../redux/store';
import { logOutUser } from '../../redux/auth/operations';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import scss from './FormConfirm.module.scss';


const FormConfirm = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  
  const handleLogOut = () => {
    dispatch(logOutUser());
    toast.success('Successfully logouted!');
    onClose();
  };
  
  return isOpen && (
    <>
    <div className={scss.formConfirm}>
      <p className={scss.formConfirm__title}>Are you sure you want to Logout?</p>
      <div className={scss.formConfirm__buttonsWrap}>
        <Button type='submit' size='small' onClick={handleLogOut}>Logout</Button>
        <Button type='button' size='small' onClick={onClose}>Cancel</Button>
      </div>
    </div>
    </>
  );
};


export default FormConfirm;