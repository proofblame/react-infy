import './App.css';
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import auth from '../../utils/auth';

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
import MainRoute from '../MainRoute/MainRoute';
import {
  Switch,
  Route,
  useLocation,
  useHistory
} from "react-router-dom";
import { useDarkMode } from "../UseDarkMode/UseDarkMode"
import Learn from '../Learn/Learn';
import jsonwebtoken from 'jsonwebtoken'
import Loader from '../Loader/Loader';




function App() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [currentWallet, setCurentWallet] = useState({});
  const [currentTeam, setCurentTeam] = useState({});


  const [theme, themeToggler] = useDarkMode();
  const [check, setCheck] = useState(false);
  const [loggedIn, setLoggedIn] = useState(pathname);
  const [isChecked, setIsChecked] = useState(false);

  const themeMode = theme === "light" ? 'app' : 'dark app';



  useEffect(() => {
    checkToken();
  }, []);
  useEffect(() => {
    theme === "light" ? setCheck(false) : setCheck(true);
  }, [theme]);

  function checkToken() {
    refToken()
    const refresh_token = localStorage.getItem('refresh_token');
    return auth.refreshToken(refresh_token)
      .then(res => {
        localStorage.setItem('jwt', res.access_token);
      }).then(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
          auth
            .getUserInfo(jwt)
            .then(user => {
              setLoggedIn(true);
              setCurrentUser(user);
            })
            .catch((e) => {
              if (e.status === 403) {
                // refToken() 
              } else {
                console.error(e)
              }

            });
          auth
            .getWalletInfo(jwt)
            .then(wallet => {
              setCurentWallet(wallet);
            })
            .catch((e) => {
              if (e.status === 403) {
                // refToken()
              } else {
                console.error(e)
              }

            });
          auth
            .getTeamInfo(jwt)
            .then(team => {
              setCurentTeam(team);
            })
            .catch((e) => {
              if (e.status === 403) {
                // refToken()
              } else {
                console.error(e)
              }

            });

        } else {
          setLoggedIn(false);
        }
      }).catch(() => {

        setLoggedIn(false);

      })
      .finally(() => {
        setIsChecked(true)
      })
  }








  function handleRegister(username, joinedBy, email, password, telegram) {
    return auth.register(username, joinedBy, email, password, telegram)

  }

  function handleLogin(username, password) {
    return auth.login(username, password).then(res => {
      localStorage.setItem('jwt', res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token);
    });
  }

  function refToken() {
    const refresh_token = localStorage.getItem('refresh_token');
    return auth.refreshToken(refresh_token)
      .then(res => {
        localStorage.setItem('jwt', res.access_token);
      })
      .catch((e) => {
        if (e.status !== 200) {
          history.push("/login");
          console.error(e)
        }
      });
  }

  function handleSignout() {
    setLoggedIn(false);
    setCurrentUser({});
    setCurentWallet({});
    setCurentTeam({});
    localStorage.removeItem('jwt');
    localStorage.removeItem('refresh_token');
  }






  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={themeMode}>
        <Header themeToggler={themeToggler} check={check} onSignOut={handleSignout} />
        <MainRoute isChecked={isChecked}>
          <Switch>
            <ProtectedRoute loggedIn={loggedIn} component={Main} exact path="/" />
            <ProtectedRoute loggedIn={loggedIn} component={WhitePaper} path="/whitepaper" />
            <ProtectedRoute loggedIn={loggedIn} component={RoadMap} path="/roadmap" />
            <ProtectedRoute loggedIn={loggedIn} component={Marketing} path="/marketing" />
            <ProtectedRoute loggedIn={loggedIn} component={Privacy} path="/privacy" />
            <ProtectedRoute loggedIn={loggedIn} component={Policy} path="/policy" />
            <ProtectedRoute loggedIn={loggedIn} component={Status} path="/status" />
            <ProtectedRoute loggedIn={loggedIn} component={Tarif} refToken={refToken} path="/tarif" />
            <ProtectedRoute loggedIn={loggedIn} component={Profile} currentUser={currentUser} path="/profile" />
            <ProtectedRoute loggedIn={loggedIn} component={Team} refToken={refToken} currentUser={currentUser} currentTeam={currentTeam} checkToken={checkToken} path="/team" />
            <ProtectedRoute loggedIn={loggedIn} component={Wallet} refToken={refToken} currentUser={currentUser} currentWallet={currentWallet} checkToken={checkToken} path="/wallet" />
            <ProtectedRoute loggedIn={loggedIn} component={Support} path="/support" />
            <ProtectedRoute loggedIn={loggedIn} component={Learn} refToken={refToken} path="/learn" />

            <Route path="/login">
              <Login onLogin={handleLogin} loggedIn={loggedIn} checkToken={checkToken} refToken={refToken} />
            </Route>
            <Route path="/registration">
              <Registration loggedIn={loggedIn} onRegister={handleRegister} />
            </Route>


            <Route component={Error} path="*" />
          </Switch>
        </MainRoute>

        <Footer loggedIn={loggedIn} onSignOut={handleSignout} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
