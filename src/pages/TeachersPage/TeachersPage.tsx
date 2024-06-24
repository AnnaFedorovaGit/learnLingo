import { ITeacher } from '../../interfaces/intarfaces';
import CardItem from '../../components/CardItem/CardItem';
import Filter from '../../components/Filter/Filter';
import Button from '../../components/Button/Button';
import scss from './TeachersPage.module.scss';

import teachers from '../../api/teachers.json';


const TeachersPage = () => {

  return (
    <div className={scss.teachersPage}>
      <Filter />
      <ul className={scss.teachersPage__list}>
        {teachers.map((teacher: ITeacher, index: number) => 
          <CardItem key={index} teacher={teacher} />
        )}
      </ul>
      <div className={scss.teachersPage__buttonWrap}>
        <Button type='submit' color='light' size='medium'>Load more</Button>
      </div>
    </div>
  );
};


export default TeachersPage;