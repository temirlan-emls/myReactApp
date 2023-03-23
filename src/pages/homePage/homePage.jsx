import './style.css';
import CharacterComponent from '../../components/characterComponent/CharacterComponent';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [characters, setCharacter] = useState();
  const [charactersCount, setCharacterCount] = useState(20);

  const moreHandler = () => {
    setCharacterCount((prev) => prev + 20);
  };

  const numToArr = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  };

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${numToArr(charactersCount)}`
      )
      .then((res) => setCharacter((prev) => res.data));
  }, [charactersCount]);
  return (
    <section className='homeSection'>
      <h2>HomePage</h2>

      <div className='componentsWrapper'>
        {characters &&
          characters.map((character) => (
            <CharacterComponent key={character.id} character={character} />
          ))}
      </div>

      <button className='moreButton' onClick={moreHandler}>
        More
      </button>
    </section>
  );
}
