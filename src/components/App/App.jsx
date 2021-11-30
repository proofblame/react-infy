import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useDarkMode } from "../UseDarkMode/UseDarkMode";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// Api
import auth from "../../utils/auth";
import api from "../../utils/api";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import RoadMap from "../RoadMap/RoadMap";
import Marketing from "../Marketing/Marketing";
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
import Scrolltotop from '../Scrolltotop/Scrolltotop';

const App = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = useState({});
  const [currentWallet, setCurentWallet] = useState({});
  const [currentTeam, setCurentTeam] = useState({});
  const [theme, themeToggler] = useDarkMode();
  const [check, setCheck] = useState(false);
  const [loggedIn, setLoggedIn] = useState(pathname);
  const [modalActive, setModalActive] = useState({ preloader: false });
  const [currentTransactions, setCurentTransactions] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);




  const themeMode = theme === "light" ? "app" : "dark app";

  useEffect(() => {
    const refTok = localStorage.getItem("refresh_token");
    if (refTok) {
      localStorage.removeItem("refresh_token");
    }

    checkToken()
  }, []);

  useEffect(() => {
    theme === "light" ? setCheck(false) : setCheck(true);
  }, [theme]);

  // Обновляем токен
  // Получаем данные пользователя, кошелька, команды.
  // TODO: получать все данные тут (еще: Обучение, Дерево)
  const checkToken = async () => {
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
          await getData();
          setLoggedIn(true);
        } catch (err) {

          console.error(err);
          setLoggedIn(false);
        }
      } else {

        await getData();
        setLoggedIn(true);
      }
    } else {

      setLoggedIn(false);
    }
  };

  const getData = async () => {
    setModalActive({ preloader: true });
    // await checkToken();
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const [user, wallet, team, transactions] = await Promise.all([
          api.getUserInfo(jwt),
          api.getWalletInfo(jwt),
          api.getTeamInfo(jwt),
          api.getTransactionsInfo(jwt, page, 8)
        ]);
        setCurrentUser(user);
        setCurentWallet(wallet);
        setCurentTeam(team);
        setCurentTransactions(transactions.histories);
        setPageCount(transactions.pageCount);
      } catch (err) {
        console.error(err);
        setLoggedIn(false);
      } finally {
        setModalActive({ preloader: false });
      }
    } else {
      setLoggedIn(false);
      setModalActive({ preloader: false });
    }
  };


  function handleRegister(username, joinedBy, email, password, telegram) {
    return auth.register(username, joinedBy, email, password, telegram);
  }

  async function handleLogin(username, password) {
    setModalActive({ preloader: true });
    const res = await auth.login(username, password);
    if (res) {
      try {
        localStorage.setItem("jwt", res.access_token);
        localStorage.setItem("rt", res.refresh_token);
        localStorage.setItem("expires", res.expires_at);
        // await checkToken();
        setLoggedIn(true);
        history.push("/profile");
        await getData();
      } catch (error) {
        console.error(error)
      } finally {
        setModalActive({ preloader: false });
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
      <div className={themeMode}>
        <Header
          themeToggler={themeToggler}
          check={check}
          onSignOut={handleSignout}
        />

        <div className="content">
          <Scrolltotop />
          <Switch>
            <ProtectedRoute loggedIn={loggedIn} component={Main} exact path="/" />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={RoadMap}
              path="/roadmap"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Marketing}
              path="/marketing"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Privacy}
              path="/privacy"
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
            <ProtectedRoute loggedIn={loggedIn} component={Tarif} checkToken={checkToken} path="/tarif" />
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
              path="/team"
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Wallet}
              currentUser={currentUser}
              currentWallet={currentWallet}
              checkToken={checkToken}
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
              setModalActive={setModalActive}
              path="/learn"
            />
            <Route path="/login">
              <Login
                onLogin={handleLogin}
                loggedIn={loggedIn}
                checkToken={checkToken}
                modalActive={modalActive}
                setModalActive={setModalActive}
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
