import { React } from 'react';
import Nav from './Components/Nav';
// Pages/Components
import HomePage from './Pages/HomePage';
import EastCoast from './Pages/EastCoast';
import Central from './Pages/Central';
import WestCoast from './Pages/WestCoast';
// Styles
import GlobalStyle from './Styled-Components/GlobalStyle';
// Router
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/east">
          <EastCoast />
        </Route>
        <Route exact path="/central">
          <Central />
        </Route>
        <Route exact path="/west">
          <WestCoast />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
