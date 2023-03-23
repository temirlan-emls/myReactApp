import { Outlet, NavLink } from 'react-router-dom';

import './style.css';

export default function LayoutPage() {
  return (
    <div className='layout'>
      <nav className='navbar'>
        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/product'}>Product</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
