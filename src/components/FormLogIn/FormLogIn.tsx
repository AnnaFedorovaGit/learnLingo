import { useForm } from 'react-hook-form';
import scss from './FormLogIn.module.scss';
// import icons from '../../images/icons.svg';


const FormLogIn = () => {
  const { handleSubmit } = useForm();
  // const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("formData");
  };
  
  return (
    <div className={scss.filter}>
      <form className={scss.filter__form} onSubmit={handleSubmit(onSubmit)}>        
        <p>logIn</p>
      </form>
    </div>
  );
};


export default FormLogIn;