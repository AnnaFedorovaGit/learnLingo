import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import InputPassword from '../InputPassword/InputPassword';
import Button from '../Button/Button';
import scss from './FormLogIn.module.scss';

interface IFormLogIn {
  email: string;
  password: string;
}

const FormLogIn = () => {

  const schema = Yup.object().shape({
    email: Yup.string().email().required('please enter a valid email'),
    password: Yup.string().required('this field is required'),
  }) as Yup.AnyObjectSchema;  

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormLogIn>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormLogIn> = (data) => {
    console.log(data);
    reset();
  };
  
  return (
    <div className={scss.formLogIn}>
      <h2 className={scss.formLogIn__title}>Log In</h2>
      <p className={scss.formLogIn__text}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
      <form className={scss.formLogIn__form} onSubmit={handleSubmit(onSubmit)}>  
        <div className={scss.formLogIn__inputsWrap}>
          <label htmlFor='email'>
            <input {...register('email')} type='text' placeholder='Email' className={scss.formLogIn__input} id='email' autoFocus />
            {errors.email && <span className={scss.formLogIn__errorMessage}>{errors.email.message as string}</span>}
          </label>
          <InputPassword name='password' id='password' register={register} placeholder='Password' errors={errors} />
        </div>
        <Button type='submit' size='big'>Log In</Button>
      </form>
    </div>
  );
};


export default FormLogIn;