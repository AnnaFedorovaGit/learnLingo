import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, googleProvider } from '../../../firebase.config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import InputPassword from '../InputPassword/InputPassword';
import Button from '../Button/Button';
import scss from './FormRegistration.module.scss';

interface IFormRegistration {
  name: string;
  email: string;
  password: string;
}

const FormRegistration = () => {

  const schema = Yup.object().shape({
    name: Yup.string().required('this field is required'),
    email: Yup.string().email().required('please enter a valid email'),
    password: Yup.string().min(7).required(),
  }) as Yup.AnyObjectSchema;

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormRegistration>({
    resolver: yupResolver(schema),
  });

  console.log(auth?.currentUser?.email);
  console.log(auth?.currentUser?.photoURL);

  const onSubmit: SubmitHandler<IFormRegistration> = async (data) => {
    try {
      const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password);
      console.log(data);
      reset();
    } catch (error) { 
      console.error(error);
    }
  };

  const onSubmitWithGoogle = async () => {
    try {
      // const { email, password } = data;
      await signInWithPopup(auth, googleProvider);
      // console.log(data);
      // reset();
    } catch (error) { 
      console.error(error);
    }
  };
  
  return (
    <div className={scss.formRegistration}>
      <h2 className={scss.formRegistration__title}>Registration</h2>
      <p className={scss.formRegistration__text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information.</p>
      {/* <form className={scss.formRegistration__form} onSubmit={handleSubmit(onSubmit)}>   */}
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
      <Button type='submit' size='big' onClick={() => onSubmitWithGoogle()}>Sign Up with Google</Button>
    </div>
  );
};


export default FormRegistration;