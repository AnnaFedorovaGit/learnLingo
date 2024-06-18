import { useForm } from 'react-hook-form';
import scss from './FormRegistration.module.scss';
// import icons from '../../images/icons.svg';


const FormRegistration = () => {
  const { handleSubmit } = useForm();
  // const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("RegistrationData");
  };
  
  return (
    <div className={scss.filter}>
      <form className={scss.filter__form} onSubmit={handleSubmit(onSubmit)}>        
        <p>Registration</p>
      </form>
    </div>
  );
};


export default FormRegistration;