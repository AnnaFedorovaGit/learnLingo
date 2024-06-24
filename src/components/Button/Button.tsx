import scss from './Button.module.scss';

interface IProps {
  children: string;
  type: string;
  color?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'big';
  onClick?: () => void;
}

const Button = ({ children, color = 'light', size = 'medium', onClick }: IProps) => {
  const colorClasses = {
    dark: scss.button_dark,
    light: scss.button_light,
  };

  const sizeClasses = {
    small: scss.button_small,
    medium: scss.button_medium,
    big: scss.button_big,
  };
  
  return (
    <button
      onClick={onClick}
      className={`${scss.button} ${colorClasses[color] || ''} ${sizeClasses[size] || ''}`}>
      { children }
    </button>
  );
};


export default Button;