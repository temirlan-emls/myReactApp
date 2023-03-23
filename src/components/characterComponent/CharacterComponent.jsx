import './style.css';

export default function CharacterComponent({ character }) {
  return (
    <div className='firstComponent'>
      <img src={character.image} alt={character.name} />

      <h2>{character.name}</h2>
      <p>ORIGIN: {character.origin.name}</p>
    </div>
  );
}
