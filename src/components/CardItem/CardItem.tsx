import scss from './CardItem.module.scss';
import icon from '../../images/symbol-defs.svg';


const CardItem = () => {

  return (
    <li className={scss.cardItem}>
      <div>image</div>
      <div className={scss.cardItem__mainInfoWrap}>
        <div className={scss.cardItem__mainInfoInner}>
          <p className={scss.cardItem__subtitle}>Languages</p>

          <div className={scss.cardItem__contentBox}>
            <div className={`${scss.cardItem__contentWrap} ${scss.cardItem__contentWrap_gap}`}>
              <div className={scss.cardItem__contentInner}>
                <svg width='16' height='16'>
                  <use href={`${icon}#icon-log-in`}></use>
                </svg>
                <p className={scss.cardItem__content}>Lessons online</p>
              </div>
              <p>Lessons done: 1098</p>
              <div className={scss.cardItem__contentInner}>
                <svg width='16' height='16'>
                  <use href={`${icon}#icon-log-in`}></use>
                </svg>
                <p className={scss.cardItem__content}>Rating: 4.8</p>
              </div>
              <p>Price / 1 hour: <span className={scss.cardItem__accent}>30$</span></p>
            </div>

            <svg className={scss.cardItem__icon} width='26' height='26'>
              <use href={`${icon}#icon-log-in`}></use>
            </svg>
          </div>
        </div>

        <h3 className={scss.cardItem__title}>Jane Smith</h3>

        <ul className={`${scss.cardItem__list} ${scss.cardItem__list_listInfo}`}>
          <li>
            <p className={scss.cardItem__text}><span className={scss.cardItem__span}>Speaks: </span><span className={scss.cardItem__underline}>German, French</span></p>
          </li>
          <li>
            <p className={scss.cardItem__text}><span className={scss.cardItem__span}>Lesson Info: </span>Lessons are structured to cover grammar, vocabulary, and practical usage of the language.</p>
          </li>
          <li>
            <p className={scss.cardItem__text}><span className={scss.cardItem__span}>Conditions: </span>Welcomes both adult learners and teenagers (13 years and above).Provides personalized study plans</p>
          </li>
        </ul>

        <button className={scss.cardItem__button}>Read more</button>

        <ul className={scss.cardItem__list}>
          <li className={scss.cardItem__itemLevel}>#A1 Beginner</li>
          <li className={scss.cardItem__itemLevel}>#A2 Elementary</li>
          <li className={scss.cardItem__itemLevel}>#B1 Intermediate</li>
          <li className={scss.cardItem__itemLevel}>#B2 Upper-Intermediate</li>
        </ul>
      </div>
    </li>
  );
};


export default CardItem;