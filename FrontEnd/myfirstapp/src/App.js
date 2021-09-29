import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import SecuredRoute from './securityUtils/SecureRoute'

import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import Footer from './components/Layout/Footer';
import Dashboard from "./components/Dashboard";
import Search from "./components/BookManagement/Search";
import Book from "./components/BookManagement/Book";
import AddBook from "./components/BookManagement/AddBook";
import MyAccount from "./components/UserManagement/MyAccount";

import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header></Header>
            {
              //Public Routes
            }
        
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/books/:isbn" component={Book} />
            <Route exact path="/addbook" component={AddBook} />
            <SecuredRoute exact path="/my_account" component={MyAccount} authed={this.props.security}/>            

            {
              //Private Routes
            }
            {/* <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addPerson" component={AddPerson} /> */}
            <Footer></Footer>
          
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;