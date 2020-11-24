import { React } from 'react';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
// Pages/Components
import HomePage from './Pages/HomePage';
// Styles
import GlobalStyle from './Styled-Components/GlobalStyle';
// Router
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App" style={{ position: 'relative' }}>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
