import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { createBrowserHistory } from 'history';

import l from './layout'
import './app.css';
import Upcomping, {MoviePg, reduce as reduceMovies } from './movies'

const reducers = combineReducers({ movies: reduceMovies });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//const history = syncHistoryWithStore(createBrowserHistory(), store)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={createBrowserHistory()} >
          <Route exact path="/" component={Upcomping}></Route>
          <Route exact path="/movie" component={MoviePg}></Route>
        </Router>
      </Provider>
    );
  }
}
//<img src={ReactImage} alt="react" />