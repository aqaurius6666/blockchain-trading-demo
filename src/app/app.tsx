import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {TradingPage} from "./page/TradingPage/TradingPage";
import LoginPage from './page/LoginPage/LoginPage';
import {NavBar} from './component/nav-bar/navbar'
import { isUserLoggedIn } from './actions';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state:RootStateOrAny) => state.user);
  useEffect(() => {
    if (!user.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, user.authenticate]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={TradingPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
