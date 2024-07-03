import { createSlice, PayloadAction } from '@reduxjs/toolkit'; 
import { fetchTeachers } from './operations';
import { ITeacher } from '../../interfaces/interfaces';


interface State {
  teachers: ITeacher[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: State = {
    teachers: [],
    isLoading: false,
    error: null,
}

function isError(payload: any): payload is Error {
  return payload instanceof Error;
}

const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTeachers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTeachers.fulfilled, (state, action: PayloadAction<ITeacher[]>) => {
                state.isLoading = false;
                state.teachers = action.payload;
            })
            .addCase(fetchTeachers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = isError(action.payload) ? action.payload : new Error('Unknown error');
                // state.error = action.payload instanceof Error ? action.payload : new Error('Unknown error');
            })
        }
    }) 
    

export const teachersReducer = teachersSlice.reducer;