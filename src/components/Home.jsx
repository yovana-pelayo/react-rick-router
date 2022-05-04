import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/characters">Characters List</Link>
    </div>
  );
}

// start with character detail initial entry
//add under app test
