import { ITeacher } from '../../interfaces/intarfaces';

import scss from './CardItem.module.scss';
import icons from '../../images/icons.svg';

interface IProps {
  teacher: ITeacher;
}

const CardItem = ({ teacher }: IProps) => {
  const { avatar_url, name, surname, lessons_done, rating, price_per_hour, languages, lesson_info, conditions, levels } = teacher;

  return (
    <li className={scss.cardItem}>
      <div className={scss.cardItem__imageWrap}>
        <img src={avatar_url} alt={`${name} ${surname}`} width='96' height='96' className={scss.cardItem__image} />
        <svg width='12' height='12' className={scss.cardItem__iconCircle}>
          <use href={`${icons}#icon-green-circle`}></use>
        </svg>
      </div>
      
      <div className={scss.cardItem__mainInfoWrap}>
        <div className={scss.cardItem__mainInfoInner}>
          <p className={scss.cardItem__subtitle}>Languages</p>

          <div className={scss.cardItem__contentBox}>
            <div className={`${scss.cardItem__contentWrap} ${scss.cardItem__contentWrap_gap}`}>
              <div className={scss.cardItem__contentInner}>
                <svg width='16' height='16' className={scss.cardItem__icon}>
                  <use href={`${icons}#icon-book`}></use>
                </svg>
                <p className={scss.cardItem__content}>Lessons online</p>
              </div>
              <p>Lessons done: {lessons_done}</p>
              <div className={scss.cardItem__contentInner}>
                <svg width='16' height='16'>
                  <use href={`${icons}#icon-star`}></use>
                </svg>
                <p className={scss.cardItem__content}>Rating: {rating}</p>
              </div>
              <p>Price / 1 hour: <span className={scss.cardItem__accent}>{price_per_hour}$</span></p>
            </div>

            <button>
              <svg className={scss.cardItem__icon} width='26' height='26'>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>

          </div>
        </div>

        <h3 className={scss.cardItem__title}>{name} {surname}</h3>

        <ul className={`${scss.cardItem__list} ${scss.cardItem__list_listInfo}`}>
          <li>
            <p className={scss.cardItem__text}><span className={scss.cardItem__span}>Speaks: </span><span className={scss.cardItem__underline}>{languages.join(', ')}</span></p>
          </li>
          <li>
            <p className={scss.cardItem__text}><span className={scss.cardItem__span}>Lesson Info: </span>{lesson_info}</p>
          </li>
          <li>
            <p className={scss.cardItem__text}><span className={scss.cardItem__span}>Conditions: </span>{conditions.join(' ')}</p>
          </li>
        </ul>

        <button className={scss.cardItem__button}>Read more</button>

        <ul className={scss.cardItem__list}>
          {levels.map((level, index) => 
            <li key={index} className={scss.cardItem__itemLevel}>#{level}</li>
          )}
        </ul>
      </div>
    </li>
  );
};


export default CardItem;