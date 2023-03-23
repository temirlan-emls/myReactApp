import { Outlet, NavLink } from 'react-router-dom';

import './style.css';

export default function LayoutPage() {
  return (
    <div className='layout'>
      <nav className='navbar'>
        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/adduser'}>Add User</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
