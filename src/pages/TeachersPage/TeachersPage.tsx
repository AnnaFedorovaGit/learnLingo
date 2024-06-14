import CardItem from '../../components/CardItem/CardItem';
import Filter from '../../components/Filter/Filter';

import scss from './TeachersPage.module.scss';


const TeachersPage = () => {

  return (
    <div className={scss.teachersPage}>
      <Filter />
      <ul className={scss.teachersPage__list}>
        <CardItem />
      </ul>
      <div className={scss.teachersPage__buttonWrap}>
        <button className={scss.teachersPage__button}>Load more</button>
      </div>
    </div>
  );
};


export default TeachersPage;