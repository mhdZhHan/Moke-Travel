import { Fragment } from "react";
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Global from './Global'
import Header from './components/includes/Header';
import Places from "./components/screens/Places"
import Place from "./components/screens/Place"
import Footer from './components/includes/Footer';

function App() {
  return (
    <Fragment>
      <Global />
          <Router>
            <AppContainer>
                  <Header />
                  <Switch>
                    <Route path="/" exact component={Places}/>
                    <Route path="/place/:id" component={Place}/>
                  </Switch>
                  <Footer />
            </AppContainer>
        </Router>
    </Fragment>
  );
}

const AppContainer = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`;
export default App;
