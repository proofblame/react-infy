import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useDarkMode } from "../UseDarkMode/UseDarkMode";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// Api
import auth from "../../utils/auth";
import api from "../../utils/api";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Privacy from "../Privacy/Privacy";
import Policy from "../Policy/Policy";
import Status from "../Status/Status";
import Tarif from "../Tarif/Tarif";
import Profile from "../Profile/Profile";
import Team from "../Team/Team";
import Wallet from "../Wallet/Wallet";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import Support from "../Support/Support";
import Learn from "../Learn/Learn";
import Modal from "../Modal/Modal";
import Preloader from "../Preloader/Preloader";
import Scrolltotop from "../Scrolltotop/Scrolltotop";
import RoadMap from '../RoadMap/RoadMap';
import AboutMore from '../AboutMore/AboutMore'

const App = () => {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [currentWallet, setCurentWallet] = useState({});
  const [currentTeam, setCurentTeam] = useState({});
  const [theme, themeToggler] = useDarkMode();
  const [check, setCheck] = useState(false);
  const [loggedIn, setLoggedIn] = useState(pathname);
  const [modalActive, setModalActive] = useState({
    preloader: false,
  });
  const [currentTransactions, setCurentTransactions] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [tarif, setTarif] = useState(null);
  const [isPaid, setIsPaid] = useState(false)





  const themeMode = theme === "light" ? "app" : "dark app";

  useEffect(() => {
    const refTok = localStorage.getItem("refresh_token");
    if (refTok) {
      localStorage.removeItem("refresh_token");
    }

    checkToken();
  }, []);

  useEffect(() => {
    theme === "light" ? setCheck(false) : setCheck(true);
  }, [theme]);

  // Обновляем токен
  // Получаем данные пользователя, кошелька, команды.
  // TODO: получать все данные тут (еще: Обучение, Дерево)
  const checkToken = async () => {
    await refToken();
    if (refToken) {
      await getData();
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const refToken = async () => {
    const expires = localStorage.getItem("expires");
    const rt = localStorage.getItem("rt");
    const jwt = localStorage.getItem("jwt");
    if (rt && jwt && expires) {
      if (expires < Date.now()) {
        try {
          const res = await api.refreshToken(rt);
          localStorage.setItem("jwt", res.access_token);
          localStorage.setItem("rt", res.refresh_token);
          localStorage.setItem("expires", res.expires_at);
          return true
        } catch (err) {
          console.error(err);
          return false
        }
      } else {
        return true
      }
    } else {
      return false
    }
  }

  const getData = async () => {
    // setModalActive({ preloader: true });
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const [user, wallet, team, transactions, tarif] = await Promise.all([
          api.getUserInfo(jwt),
          api.getWalletInfo(jwt),
          api.getTeamInfo(jwt),
          api.getTransactionsInfo(jwt, page, 8),
          api.getTarif(jwt)
        ]);
        setCurrentUser(user);
        setCurentWallet(wallet);
        setCurentTeam(team);
        setCurentTransactions(transactions.histories);
        setPageCount(transactions.pageCount);
        setTarif(tarif);
        setIsPaid(tarif.isPaid)
      } catch (err) {
        console.error(err);
        setLoggedIn(false);
      } finally {
        // setModalActive({ preloader: false });
      }
    } else {
      setLoggedIn(false);
      // setModalActive({ preloader: false });
    }
  };

  function handleRegister(username, joinedBy, email, password, telegram) {
    return auth.register(username, joinedBy, email, password, telegram);
  }

  async function handleLogin(username, password) {
    const res = await auth.login(username, password);
    if (res) {
      try {
        localStorage.setItem("jwt", res.access_token);
        localStorage.setItem("rt", res.refresh_token);
        localStorage.setItem("expires", res.expires_at);
        setLoggedIn(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleSignout() {
    setLoggedIn(false);
    setCurrentUser({});
    setCurentWallet({});
    setCurentTeam({});
    localStorage.removeItem("jwt");
    localStorage.removeItem("rt");
    localStorage.removeItem("expires");
  }
  // TODO: сделать через один защищенный компонент
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Scrolltotop />
      <div className={themeMode}>
        <Header
          themeToggler={themeToggler}
          check={check}
          onSignOut={handleSignout}
        />

        <div className="content">

          <Switch>
            <ProtectedRoute
              loggedIn={loggedIn}
              component={AboutMore}
              exact
              path="/about"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Main}
              exact
              path="/"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Privacy}
              path="/privacy"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={RoadMap}
              path='/roadmap'
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Policy}
              path="/policy"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Status}
              path="/status"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Tarif}
              checkToken={checkToken}
              refToken={refToken}
              path="/tarif"
              tarif={tarif}
              setTarif={setTarif}
              isPaid={isPaid}
              setIsPaid={setIsPaid}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Profile}
              currentUser={currentUser}
              path="/profile"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Team}
              currentUser={currentUser}
              currentTeam={currentTeam}
              checkToken={checkToken}
              refToken={refToken}
              path="/team"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Wallet}
              currentUser={currentUser}
              currentWallet={currentWallet}
              checkToken={checkToken}
              refToken={refToken}
              path="/wallet"
              currentTransactions={currentTransactions}
              setCurentTransactions={setCurentTransactions}
              pageCount={pageCount}
              setPageCount={setPageCount}
              page={page}
              setPage={setPage}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Support}
              path="/support"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Learn}
              checkToken={checkToken}
              refToken={refToken}
              setModalActive={setModalActive}
              path="/learn"
            />
            <Route path="/login">
              <Login
                onLogin={handleLogin}
                loggedIn={loggedIn}
                checkToken={checkToken}
              />
            </Route>
            <Route path="/registration">
              <Registration loggedIn={loggedIn} onRegister={handleRegister} />
            </Route>
            <Route component={Error} path="*" />
          </Switch>
        </div>

        <Footer loggedIn={loggedIn} onSignOut={handleSignout} />
        <Modal active={modalActive.preloader}>
          <Preloader />
        </Modal>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
