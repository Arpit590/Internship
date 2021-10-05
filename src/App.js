import { Route, Switch } from 'react-router';
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import Options from "./components/Options";


function App() {
  return (
    <div className="app">
      <Header/>
      <Options/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
