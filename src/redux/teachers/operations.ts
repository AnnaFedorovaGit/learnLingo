import { createAsyncThunk } from "@reduxjs/toolkit";
// import { requestAllTeachers } from '../../api/api';
import { db } from '../../../firebase.config';
import { get, ref } from 'firebase/database';
import { ITeacher } from '../../interfaces/interfaces';

// export const fetchTeachers = createAsyncThunk('teachers/fetchAll', async (_, thunkAPI) => {
//     try {
//         const teachers = await requestAllTeachers();
//         return teachers;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });


export const fetchTeachers = createAsyncThunk<ITeacher[], void, {rejectValue: string;}>('teachers/fetchAll', async (_, thunkAPI) => { 
  try {
    const teachersRef = ref(db, 'teachers');
    const data = await get(teachersRef);
    return data.val();
  } catch (error) {
    const errorMessage = (error as Error).message;
    return thunkAPI.rejectWithValue(errorMessage);
  }
});