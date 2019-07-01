import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/scss/argon-design-system-react.scss';

import Home from './views/Home.jsx';
import AboutUs from './views/AboutUs.jsx';
import Login from './views/examples/Login.jsx';
import Profile from './views/examples/Profile.jsx';
import Register from './views/examples/Register.jsx';
import IndexNavbar from "./components/base/IndexNavbar";
import Footer from "./components/base/Footer";
import ContactUs from "./views/ContactUs";

ReactDOM.render(
  <BrowserRouter>
    <IndexNavbar />
    <Switch>
      <Route
        path="/"
        exact
        render={props => <Home {...props} />}
      />
      <Route
        path="/about-us"
        exact
        render={props => <AboutUs {...props} />}
      />
      <Route
        path="/contact-us"
        exact
        render={props => <ContactUs {...props} />}
      />
      <Route
        path="/login-page"
        exact
        render={props => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
