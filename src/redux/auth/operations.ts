import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../../firebase.config";
// import { auth, googleProvider } from "../../../firebase.config";
import { signOut } from 'firebase/auth';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFormRegistration } from "../../interfaces/interfaces";


// export const registerUser = createAsyncThunk<IFormRegistration, IFormRegistration>('auth/registerUser', async (data, thunkAPI) => { 
//   try {
//     const { email, password } = data;
//     const userData = await createUserWithEmailAndPassword(auth, email, password);
//     console.log(userData);
//     return data;
//   } catch (error) {
//     const errorMessage = (error as Error).message;
//     return thunkAPI.rejectWithValue(errorMessage);
//   }
// });

export const signUpUser = createAsyncThunk<IFormRegistration, IFormRegistration>('auth/signUp', async (data, thunkAPI) => { 
  try {
    const { name, email, password } = data;
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    await updateProfile(user, {
      displayName: name,
    });
    console.log(user);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const logOutUser = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await signOut(auth);
    console.log(auth);
  } catch(error) { 
    const errorMessage = (error as Error).message;
    return thunkAPI.rejectWithValue(errorMessage);
  }
});




// export const setUserProfile = createAsyncThunk<IFormRegistration, IFormRegistration>('auth/registerUserName', async (data, thunkAPI) => {
//   try {
//     const { name } = data;
//     const auth = getAuth();
//     const user = auth.currentUser;
//     await updateProfile(user, {
//       displayName: name,
//     });
//     console.log(user);
//     return data;
//     } catch (error) {
//       const errorMessage = (error as Error).message;
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// export const setUserProfile = async (user, displayName) => {
//   try {
//     await user.updateProfile({
//       displayName: displayName,
//       // Дополнительные поля профиля, если необходимо
//     });
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

// export const onSubmitWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//     } catch (error) { 
//       console.error(error);
//     }
// };

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// export const fetchTeachers = createAsyncThunk<ITeacher[], void, {rejectValue: string;}>('teachers/fetchAll', async (_, thunkAPI) => { 
//   try {
//     const teachersRef = ref(db, 'teachers');
//     const data = await get(teachersRef);
//     return data.val();
//   } catch (error) {
//     const errorMessage = (error as Error).message;
//     return thunkAPI.rejectWithValue(errorMessage);
//   }
// });