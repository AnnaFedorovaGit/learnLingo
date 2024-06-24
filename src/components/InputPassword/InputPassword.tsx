import { HTMLInputTypeAttribute, useState } from 'react';
import { FieldErrors } from 'react-hook-form';
import scss from './InputPassword.module.scss';
import icons from '../../images/icons.svg';

type Props = {
  name: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: any;
  errors?: FieldErrors;
};

const InputPassword = ({ register, placeholder, name, id, errors }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleShowPassword = (): void => setShowPassword(!showPassword);

  return (
    <div>
      <label htmlFor={id} className={scss.inputPassword}>
        <input
          {...register(name)}
          name={name}
          id={id}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className={scss.inputPassword__input} />
        <button type='button' onClick={() => handleShowPassword()}>
          <svg className={scss.inputPassword__icon} width='20' height='20'>
            <use href={`${icons}${showPassword ? '#icon-eye-on' : '#icon-eye-off'}`}></use>
          </svg>
        </button>
      </label>
      {errors[name] && <span className={scss.inputPassword__errorMessage}>{errors[name].message as string}</span>}
    </div>
  );
};


export default InputPassword;