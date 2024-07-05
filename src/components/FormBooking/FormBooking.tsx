import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { ITeacher } from '../../interfaces/interfaces';
import Button from '../Button/Button';
import scss from './FormBooking.module.scss';
import icons from '../../images/icons.svg';

interface IProps {
  teacher: ITeacher;
}

interface IFormBooking {
  reason: string,
  name: string,
  email: string;
  phone: string;
}

const FormBooking = ({ teacher }: IProps) => {
  const { avatar_url, name, surname } = teacher;
  const [activeRadioBtn, setActiveRadioBtn] = useState<string>('Career and business');
  const reasons = ['Career and business', 'Lesson for kids', 'Living abroad', 'Exams and coursework', 'Culture, travel or hobby'];

  const schema = Yup.object().shape({
    reason: Yup.string().required(),
    name: Yup.string().required('this field is required'),
    email: Yup.string().email().required('please enter a valid email'),
    phone: Yup.string().required('this field is required'),
  }) as Yup.AnyObjectSchema;  

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormBooking>({
    resolver: yupResolver(schema),
  });

  useEffect(() => { 
  }, [activeRadioBtn])
  
  const handleChangeRadio = (e): void => {
    setActiveRadioBtn(e.target.value);

  // dispatch(filterTasksByPriority(e.target.value));
  };

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
        <h3 className={scss.formBooking__subject}>What is your main reason for learning English?</h3>
        <div className={scss.formBooking__radioBtnWrap}>

          <ul className={scss.formBooking__list}>
            {reasons.map((reason, index) => (
              <li key={index} className={scss.formBooking__item}>
                <div className={scss.formBooking__iconWrap}>
                  <input
                    id={reason}
                    name='reason'
                    type='radio'
                    value={reason}
                    onClick={handleChangeRadio}
                    // onChange={handleChangeRadio}
                    {...register('reason')}
                  />
                  <svg className={`${scss.formBooking__icon} ${activeRadioBtn === reason ? '' : scss.formBooking__icon_disabled}`} width='24' height='24'>
                    <use href={`${icons}${activeRadioBtn === reason ? '#icon-radio-button-active' : '#icon-radio-button-disabled'}`}></use>
                  </svg>
                </div>
                <label htmlFor={reason} className={scss.formBooking__radioBtnLabel}>
                  {reason}
                </label>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={scss.formBooking__inputsWrap}>
          <label htmlFor='name'>
            <input {...register('name')} type='text' placeholder='Full Name' className={scss.formBooking__input} id='name' />
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