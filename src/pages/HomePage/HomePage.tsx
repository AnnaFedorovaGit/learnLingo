import { NavLink } from 'react-router-dom';

import './HomePage.scss';


const HomePage = () => {

  return (
    <div>
        <h1>HomePage</h1>
        <NavLink to='/teachers' className='link'>Get started</NavLink>
    </div>
  );
};


export default HomePage;