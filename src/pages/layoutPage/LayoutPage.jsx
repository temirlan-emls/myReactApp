import { Outlet, NavLink } from 'react-router-dom';

import './style.css';

export default function LayoutPage() {
  return (
    <div className='layout'>
      <nav className='navbar'>
        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/addUser'}>Add User</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
        <NavLink to={'/createPosts'}>Create Posts</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
