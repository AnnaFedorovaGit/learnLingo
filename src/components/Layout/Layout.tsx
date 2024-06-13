import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../Header/Header';

import './Layout.scss';


const Layout = () => {

  return (
    <>
      {/* <Header /> */}
      <main>
        <div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};


export default Layout;