import { useEffect } from 'react';
// import { useEffect, useState } from 'react';
import { ITeacher } from '../../interfaces/interfaces';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import { selectAllTeachers } from '../../redux/teachers/selectors';
// FromFirestoreDatabase:
// import { getDocs, collection } from 'firebase/firestore';
// import { database } from '../../../firebase.config';
import CardItem from '../../components/CardItem/CardItem';
import Filter from '../../components/Filter/Filter';
import Button from '../../components/Button/Button';
import scss from './TeachersPage.module.scss';
import { AppDispatch } from '../../redux/store';


const TeachersPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teachers = useSelector(selectAllTeachers);

  useEffect(() => { 
    dispatch(fetchTeachers());
  }, [dispatch])
  
  // const teachersCollectionRef = collection(database, 'teachers');

  // const getTeachersListFromFirestoreDatabase = async () => {
  //   try {
  //     const data = await getDocs(teachersCollectionRef);
  //     const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id,}));
  //     console.log(filteredData);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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