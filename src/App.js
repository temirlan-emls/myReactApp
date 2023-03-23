import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage.jsx';
import LayoutPage from './pages/layoutPage/LayoutPage.jsx';
import AboutPage from './pages/aboutPage/AboutPage.jsx';
import ErrorPage from './pages/errorPage/ErrorPage.jsx';
import ProductPage from './pages/productPage/ProductPage.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutPage />}>
        <Route index element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/error' element={<ErrorPage />}></Route>
        <Route path='/product/:name' element={<ProductPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
