import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CharacterInfo({ characters = [] }) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const selectedCharacter = characters.find(
      (character) => character.id === Number(id)
    );
    setCharacter(selectedCharacter);
  }, [id]);
  return (
    <div>
      <h2>Character {id}</h2>
      <p>Status{character.status}</p>
      <p>Species {character.species}</p>
      <img src={character.image}></img>
    </div>
  );
}
// getting id from the route.. use params
