import { Teacher } from '../../interfaces/intarfaces';
import CardItem from '../../components/CardItem/CardItem';
import Filter from '../../components/Filter/Filter';

import teachers from '../../api/teachers.json';

import scss from './TeachersPage.module.scss';


const TeachersPage = () => {

  return (
    <div className={scss.teachersPage}>
      <Filter />
      <ul className={scss.teachersPage__list}>
        {teachers.map((teacher: Teacher, index: number) => 
          <CardItem key={index} teacher={teacher} />
        )}
      </ul>
      <div className={scss.teachersPage__buttonWrap}>
        <button className={scss.teachersPage__button}>Load more</button>
      </div>
    </div>
  );
};


export default TeachersPage;