import { useParams } from 'react-router-dom';
import './style.css';

function ProductPage() {
  let { name } = useParams();
  return (
    <section className='productWrapper'>
      <h2>{name}</h2>
      <img
        src='https://ichef.bbci.co.uk/news/976/cpsprodpb/BB9C/production/_126782084_b2390aa4-d626-4967-a051-b2c20a3de01c.jpg'
        alt={name}
      />
      <p>
        The {name} is a smartphone that was designed and marketed by Apple Inc.
        It is the 6th generation iPhone, succeeding both the iPhone 4 and iPhone
        4S, and preceding both the {name}S and 5C. It was formally unveiled as
        part of a press event on September 12, 2012, and subsequently released
        on September 21, 2012.[12] The {name} was the first iPhone to be
        announced in September, and setting a trend for subsequent iPhone
        releases, the first iPhone to be completely developed under the guidance
        of Tim Cook and the last iPhone to be overseen by Steve Jobs. The iPhone
        5's design was used three times, first with the {name} itself in 2012,
        then with the 5S in 2013, and finally with the first-generation iPhone
        SE in 2016.
      </p>
    </section>
  );
}

export default ProductPage;
