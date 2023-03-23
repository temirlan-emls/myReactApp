import './style.css';

export default function ProductComponent({ title, subTitle }) {
  return (
    <div className='firstComponent'>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
}
