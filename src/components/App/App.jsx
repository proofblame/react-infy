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
  let history = useHistory();
  const [currentUser, setCurrentUser] = useState({ _id: null });
  const [theme, themeToggler] = useDarkMode();
  const [check, setCheck] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const themeMode = theme === "light" ? 'app' : 'dark app';

  useEffect(() => {

    theme === "light" ? setCheck(false) : setCheck(true);
  }, [theme]);

  function handleRegister(nicknameInviter, nicknameOwner, email, password, telegram) {
    // return auth.register(nicknameInviter, nicknameOwner, email, password, telegram);
    setCurrentUser({
      _id: 123,
      nicknameInviter, 
      nicknameOwner, 
      email,
      password, 
      telegram
    })
    localStorage.setItem('user', JSON.stringify(currentUser))
    setLoggedIn(true)
    history.push("/");
    
  }

  function handleLogin(email, password) {
    return auth.login(email, password).then(res => {
      localStorage.setItem('jwt', res.jwt);
    });
  }

  function handleSignout() {
    setLoggedIn(false);
    setCurrentUser({ _id: null });
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
          <ProtectedRoute loggedIn={loggedIn} component={Profile} path="/profile" />
          <ProtectedRoute loggedIn={loggedIn} component={Team} path="/team" />
          <ProtectedRoute loggedIn={loggedIn} component={Wallet} path="/wallet" />
          <ProtectedRoute loggedIn={loggedIn} component={Support} path="/support" />
          <Route component={Login} onLogin={handleLogin} path="/login" />
          <Route path="/registration">
          <Registration onRegister={handleRegister}/>
          </Route>
          <Route component={Error}path="*" />
        </Switch>
        <Footer loggedIn={loggedIn} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
