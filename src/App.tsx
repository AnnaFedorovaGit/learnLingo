import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages//HomePage/HomePage'));
const TeachersPage = lazy(() => import('./pages/TeachersPage/TeachersPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path='/teachers' element={<TeachersPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
          {/* <Route path='*' redirect to element={<HomePage />} /> */}
        </Route>
    </Routes>
  );
}


export default App;
