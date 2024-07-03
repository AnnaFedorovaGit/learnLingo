import { AppState } from '../store';


export const selectAllTeachers = (store: AppState) => store.teachers.teachers;

// export const selectFavouriteTeachers = store => { 
//     return store.teachers.filter(({ favourite }) => favourite);
// }