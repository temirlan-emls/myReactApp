import './style.css';
import ProductComponent from '../../components/productComponent/ProductComponent';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className='homeSection'>
      <h2>HomePage</h2>

      <div className='componentsWrapper'>
        <Link to='/product/IPhone 5'>
          <ProductComponent title='IPhone 5' subTitle='SubTitle 1' />
        </Link>
        <Link to='/product/IPhone 6'>
          <ProductComponent title='IPhone 6' subTitle='SubTitle 1' />
        </Link>{' '}
        <Link to='/product/IPhone 13'>
          <ProductComponent title='IPhone 13' subTitle='SubTitle 1' />
        </Link>{' '}
        <Link to='/product/IPhone 6s'>
          <ProductComponent title='IPhone 6s' subTitle='SubTitle 1' />
        </Link>{' '}
        <Link to='/error'>
          <ProductComponent title='Error Product' subTitle='404' />
        </Link>
      </div>
    </section>
  );
}
