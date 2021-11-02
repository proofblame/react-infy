import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import WhitePaper from '../WhitePaper/WhitePaper';
import RoadMap from '../RoadMap/RoadMap';
import Marketing from '../Marketing/Marketing';
import Privacy from '../Privacy/Privacy';
import Policy from '../Policy/Policy';
import Status from '../Status/Status';
import Tarif from '../Tarif/Tarif';
import Profile from '../Profile/Profile';
import Team from '../Team/Team';
import Wallet from '../Wallet/Wallet';
import Error from '../Error/Error';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Support from '../Support/Support';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useDarkMode} from "../UseDarkMode/UseDarkMode"

function App() {
  const [theme, themeToggler] = useDarkMode();
  const [check, setCheck] = useState(false);

  const themeMode = theme === "light" ? 'app' : 'dark app';
  useEffect(() => {

    theme === "light" ? setCheck(false) : setCheck(true);
  }, [theme]);
  

  return (
      <Router>
        <div className={themeMode}>
          <Header themeToggler={themeToggler} check={check}/>
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route exact path="/whitepaper">
              <WhitePaper />
            </Route>
            <Route exact path="/roadmap">
              <RoadMap />
            </Route>
            <Route exact path="/marketing">
              <Marketing />
            </Route>
            <Route exact path="/privacy">
              <Privacy />
            </Route>
            <Route exact path="/policy">
              <Policy />
            </Route>
            <Route exact path="/status">
              <Status />
            </Route>
            <Route exact path="/tarif">
              <Tarif />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/wallet">
              <Wallet />
            </Route>
            <Route exact path="/error">
              <Error />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/support">
              <Support />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>

  );
}

export default App;
