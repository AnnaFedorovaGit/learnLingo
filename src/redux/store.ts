import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { teachersReducer } from './teachers/slice';
// import { useSelector, TypedUseSelectorHook } from 'react-redux';
// import authReducer from './rootReducer';
// import { persistReducer } from 'redux-persist';
// import { persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


// const persistConfig = {
//     key: 'auth',
//     storage,
// }

const rootReducer = combineReducers({
    // reducer: {
    //    auth: authReducer,
       teachers: teachersReducer,
    // }
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducer,
    // reducer: persistedReducer,
});

// export const persistor = persistStore(store);


export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;