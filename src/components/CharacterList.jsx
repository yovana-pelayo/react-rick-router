import { useEffect } from 'react';
import { useState } from 'react';
import getCharacters from '../services/characters';
import './CharacterList.css';

export default function CharacterList() {
  const [characters, setCharacters] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      console.log(data);
      setCharacters(data);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    };
    fetchData();
  }, []);
  if (loading) return <div className="lds-hourglass"></div>;
  return (
    <div>
      Character List
      {characters.map((character) => (
        <ul key={character.id}>
          <li>{character.name}</li>
          <li>Status{character.status}</li>
          <li>Species {character.species}</li>
          <img src={character.image}></img>
        </ul>
      ))}
    </div>
  );
}
