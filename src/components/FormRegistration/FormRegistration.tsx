import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/store';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, googleProvider } from '../../../firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { IFormRegistration } from '../../interfaces/interfaces';
// import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { signUpUser } from '../../redux/auth/operations';
import InputPassword from '../InputPassword/InputPassword';
import Button from '../Button/Button';
import scss from './FormRegistration.module.scss';


const FormRegistration = () => {
  const dispatch = useAppDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('this field is required'),
    email: Yup.string().email().required('please enter a valid email'),
    password: Yup.string().min(7).required(),
  }) as Yup.AnyObjectSchema;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormRegistration>({
    resolver: yupResolver(schema),
  });

  console.log("userEmail = ", auth?.currentUser?.email);
  console.log("userName = ", auth?.currentUser?.displayName);

  const onSubmit: SubmitHandler<IFormRegistration> = (data) => {
    dispatch(signUpUser(data)); 
    reset();
  };

  const onSubmitWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) { 
      console.error(error);
    }
  };
  
  return (
    <div className={scss.formRegistration}>
      <h2 className={scss.formRegistration__title}>Registration</h2>
      <p className={scss.formRegistration__text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
      <form className={scss.formRegistration__form}>  
        <div className={scss.formRegistration__inputsWrap}>
          <label htmlFor='name'>
            <input {...register('name')} placeholder='Name' className={scss.formRegistration__input} id='name' autoFocus />
            {errors.name && <span className={scss.formRegistration__errorMessage}>{errors.name.message as string}</span>}
          </label>
          <label htmlFor='email'>
            <input {...register('email')} placeholder='Email' className={scss.formRegistration__input} id='email' />
            {errors.email && <span className={scss.formRegistration__errorMessage}>{errors.email.message as string}</span>}
          </label>
          <InputPassword name='password' id='password' register={register} placeholder='Password' errors={errors} />
        </div>
        <Button type='submit' size='big' onClick={handleSubmit(onSubmit)}>Sign Up</Button>
      </form>
      <Button type='submit' size='big' onClick={onSubmitWithGoogle}>Sign Up with Google</Button>
    </div>
  );
};


export default FormRegistration;