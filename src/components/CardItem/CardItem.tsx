import { useState } from 'react';
import { ITeacher } from '../../interfaces/interfaces';
import DetailedInfo from '../DetailedInfo/DetailedInfo';
import LevelsList from '../LevelsList/LevelsList';
import scss from './CardItem.module.scss';
import icons from '../../images/icons.svg';


interface IProps {
  teacher: ITeacher;
}

const CardItem = ({ teacher }: IProps) => {
  const { avatar_url, name, surname, lessons_done, rating, price_per_hour, languages, lesson_info, conditions } = teacher;
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false);

  const handleAddToFavourite = (): void => { 
    // setIsFavourite(!isFavourite);
  }

  const handleLoadingInfo = (): void => { 
      setShowAdditionalInfo(true);
  } 

  // console.log(teacher);

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

            <button onClick={() => handleAddToFavourite()}>
              {/* <svg style={isFavourite === true ? {fill : 'var(--main-yellow)', stroke: 'var(--main-yellow)'} : { }} className={scss.cardItem__icon} width='26' height='26'> */}
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

        {!showAdditionalInfo && 
          <button className={scss.cardItem__button} onClick={() => handleLoadingInfo()}>Read more</button>
        }

        {showAdditionalInfo &&
          <div className={`${showAdditionalInfo ? scss.cardItem__appearAnimation : ''}`}>
            <DetailedInfo teacher={teacher} />
          </div>
        }

        {!showAdditionalInfo &&
          <LevelsList teacher={teacher} />
        }
      </div>
    </li>
  );
};


export default CardItem;