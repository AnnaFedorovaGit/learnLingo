import { useForm } from 'react-hook-form';

import scss from './Filter.module.scss';
import icons from '../../images/icons.svg';


const Filter = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("formData");
  };

  // type='radio'
  
  return (
    <div className={scss.filter}>
      <form className={scss.filter__form} onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label className={scss.filter__label} htmlFor='languages'>Languages</label>
          <div className={scss.filter__inputContainer}>
            <input {...register('languages')} placeholder='French' className={scss.filter__input} id='languages'/>
            <svg className={scss.filter__icon} width='20' height='20'>
              <use href={`${icons}#icon-arrow`}></use>
            </svg>
            {/* <input {...register('location')} onChange={handleSetLocation} placeholder='French' className={css.input} /> */}
          </div>
        </div>

        <div>
          <label className={scss.filter__label} htmlFor='knowledge'>Level of knowledge</label>
          <div className={scss.filter__inputContainer}>
            <input {...register('knowledge')} placeholder='A1 Beginner' className={scss.filter__input} id='knowledge'/>
            <svg className={scss.filter__icon} width='20' height='20'>
              <use href={`${icons}#icon-arrow`}></use>
            </svg>
          </div>
        </div>

        <div>
          <label className={scss.filter__label} htmlFor='price'>Price</label>
          <div className={scss.filter__inputContainer}>
            <input {...register('price')} placeholder='30 $' className={scss.filter__input} id='price'/>
            <svg className={scss.filter__icon} width='20' height='20'>
              <use href={`${icons}#icon-arrow`}></use>
            </svg>
          </div>
        </div>
        
      </form>
    </div>
  );
};


export default Filter;