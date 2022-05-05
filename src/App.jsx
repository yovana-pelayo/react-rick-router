import CharacterList from './components/CharacterList';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CharacterInfo from './components/CharacterInfo';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/characters:id">
          <CharacterInfo />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
// get rid of route once established in component. Example. Remove route with character info

// nested routes
