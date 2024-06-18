import { useEffect, useState, Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import scss from './Layout.module.scss';


const Layout = () => {
  const location = useLocation();
  const [pageName, setPageName] = useState<string>('/');

  useEffect(() => {
    const path = location.pathname;
    const segments = path.split('/');
    const valueFromURL = segments[segments.length - 1];
    setPageName(valueFromURL);
  }, [location]);

  return (
    <>
      <Header />
      <main className={`${scss.layout} ${(pageName === 'teachers' || pageName === 'favorites') ? scss.layout_background : null}`}>
        <div className={`${scss.layout__container} ${(pageName === 'teachers' || pageName === 'favorites') ? scss.layout__container_padding : null}`}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};


export default Layout;