import './App.css';
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import auth from '../../utils/auth';
import config from '../../base/base';

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
  Switch,
  Route,
  useHistory 
} from "react-router-dom";
import { useDarkMode } from "../UseDarkMode/UseDarkMode"

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [currentWallet, setCurentWallet] = useState({});
  const [currentTeam, setCurentTeam] = useState({});


  const [theme, themeToggler] = useDarkMode();
  const [check, setCheck] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const themeMode = theme === "light" ? 'app' : 'dark app';

  useEffect(() => {
    theme === "light" ? setCheck(false) : setCheck(true);
  }, [theme]);

  useEffect(() => {
    checkToken();
  }, []);

  function checkToken() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .getUserInfo(jwt)
        .then(user => {
          setLoggedIn(true);
          setCurrentUser(user);
        })
        .catch(e => console.error(e.message));
        auth
        .getWalletInfo(jwt)
        .then(wallet => {
          setCurentWallet(wallet);
        })
        .catch(e => console.error(e.message));
        auth
        .getTeamInfo(jwt)
        .then(team => {
          setCurentTeam(team);
        })
        .catch(e => console.error(e.message));

    } else {
      
    }
  }








  function handleRegister(username, joinedBy, email, password, telegram) {
    return auth.register(username, joinedBy, email, password, telegram)
    
  }

  function handleLogin(username, password) {
    return auth.login(username, password).then(res => {
      localStorage.setItem('jwt', res.access_token);
    });
  }

  function handleSignout() {
    setLoggedIn(false);
    setCurrentUser({});
    setCurentWallet({});
    setCurentTeam({});
    localStorage.removeItem('jwt');
  }






  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={themeMode}>
        <Header themeToggler={themeToggler} check={check} />
        <Switch>
          <ProtectedRoute loggedIn={loggedIn} component={Main} exact path="/" />
          <ProtectedRoute loggedIn={loggedIn} component={WhitePaper} path="/whitepaper" />
          <ProtectedRoute loggedIn={loggedIn} component={RoadMap} path="/roadmap" />
          <ProtectedRoute loggedIn={loggedIn} component={Marketing} path="/marketing" />
          <ProtectedRoute loggedIn={loggedIn} component={Privacy} path="/privacy" />
          <ProtectedRoute loggedIn={loggedIn} component={Policy} path="/policy" />
          <ProtectedRoute loggedIn={loggedIn} component={Status} path="/status" />
          <ProtectedRoute loggedIn={loggedIn} component={Tarif} path="/tarif" />
          <ProtectedRoute loggedIn={loggedIn} component={Profile} currentUser={currentUser} path="/profile" />
          <ProtectedRoute loggedIn={loggedIn} component={Team} currentUser={currentUser} currentTeam={currentTeam} path="/team" />
          <ProtectedRoute loggedIn={loggedIn} component={Wallet} currentUser={currentUser} currentWallet={currentWallet} path="/wallet" />
          <ProtectedRoute loggedIn={loggedIn} component={Support} path="/support" />
          <Route path="/login">
            <Login onLogin={handleLogin} loggedIn={loggedIn} checkToken={checkToken}/>
          </Route>
          <Route path="/registration">
          <Registration loggedIn={loggedIn} onRegister={handleRegister}/>
          </Route>
          <Route component={Error}path="*" />
        </Switch>
        <Footer loggedIn={loggedIn} onSignOut={handleSignout}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
