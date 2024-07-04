import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ITeacher } from '../../interfaces/interfaces';
import Button from '../Button/Button';
import scss from './FormBooking.module.scss';
// import icons from '../../images/icons.svg';

interface IProps {
  teacher: ITeacher;
}

interface IFormBooking {
  name: string,
  email: string;
  phone: string;
}

const FormBooking = ({ teacher }: IProps) => {
  const { avatar_url, name, surname } = teacher;
  console.log(teacher);

  const schema = Yup.object().shape({
    name: Yup.string().required('this field is required'),
    email: Yup.string().email().required('please enter a valid email'),
    phone: Yup.string().required('this field is required'),
  }) as Yup.AnyObjectSchema;  

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormBooking>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormBooking> = (data) => {
    console.log(data);
    reset();
  };
  
  return (
    <div className={scss.formBooking}>
      <h2 className={scss.formBooking__title}>Book trial lesson</h2>
      <p className={scss.formBooking__text}>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>

      <div className={scss.formBooking__box}>
        <img className={scss.formBooking__image} src={avatar_url} alt={`${name} ${surname}`} width='44' height='44' />
        <div className={scss.formBooking__teacherNameWrap}>
          <p className={scss.formBooking__caption}>Your teacher</p>
          <p className={scss.formBooking__teacherName}>{name} {surname}</p>
        </div>
      </div>
      
      <form className={scss.formBooking__form} onSubmit={handleSubmit(onSubmit)}>  
        <div className={scss.formBooking__inputsWrap}>
          <label htmlFor='name'>
            <input {...register('name')} type='text' placeholder='Full Name' className={scss.formBooking__input} id='name' autoFocus />
            {errors.name && <span className={scss.formBooking__errorMessage}>{errors.name.message as string}</span>}
          </label>
          <label htmlFor='email'>
            <input {...register('email')} type='text' placeholder='Email' className={scss.formBooking__input} id='email' />
            {errors.email && <span className={scss.formBooking__errorMessage}>{errors.email.message as string}</span>}
          </label>
          <label htmlFor='phone'>
            <input {...register('phone')} type='text' placeholder='Phone number' className={scss.formBooking__input} id='phone' />
            {errors.phone && <span className={scss.formBooking__errorMessage}>{errors.phone.message as string}</span>}
          </label>
        </div>
        <Button type='submit' size='big'>Book</Button>
      </form>
    </div>
  );
};


export default FormBooking;