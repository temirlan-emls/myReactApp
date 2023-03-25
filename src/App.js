import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.jsx';
import LayoutPage from './pages/layoutPage/LayoutPage.jsx';
import AddUserPage from './pages/addUserPage/AddUserPage.jsx';
import ErrorPage from './pages/errorPage/ErrorPage.jsx';
import PostsPage from './pages/postsPage/PostsPage';
import CreatePostPage from './pages/createPostPage/CreatePostPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/addUser' element={<AddUserPage />}></Route>
        <Route path='/error' element={<ErrorPage />}></Route>
        <Route path='/posts' element={<PostsPage />}></Route>
        <Route path='/createPosts' element={<CreatePostPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
