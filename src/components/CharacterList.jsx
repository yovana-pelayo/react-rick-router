import { useEffect, useState } from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import CharacterInfo from './CharacterInfo';

export default function CharacterList() {
  const { url, path } = useRouteMatch();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
      console.log('hi', results);
      setLoading(false);
    }
    getCharacters();
  }, []);
  // if (loading) return <div className="lds-hourglass"></div>;
  return (
    <>
      <h1>character list</h1>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <ul>
            {characters.map((character) => (
              <li key={character.id}>
                <Link to={`${url}/${character.id}`}>{character.name} </Link>
              </li>
            ))}
          </ul>
          <Route path={`${path}/:id`}>
            <CharacterInfo characters={characters} />
          </Route>
        </>
      )}
    </>
  );
}
