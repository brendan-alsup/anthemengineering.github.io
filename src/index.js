import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from 'react-router-dom';

import Home from './views/Home.jsx';
import AboutUs from './views/AboutUs.jsx';
import Login from './views/examples/Login.jsx';
import Profile from './views/examples/Profile.jsx';
import Register from './views/examples/Register.jsx';
import IndexNavbar from './components/base/IndexNavbar';
import Footer from './components/base/Footer';
import ContactUs from './views/ContactUs';

import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/scss/argon-design-system-react.scss';

/**
 * Provides routes to all elements of the application. In addition, contains the base components outside of the
 * individual routes, so they are rendered regardless of route
 * Using HashRouter instead of BrowserRouter, because website is hosted on a static file server. If the BrowserRouter is
 * used when the website is hosted on a static file server, pages will not be found if a route is refreshed.
 * */
ReactDOM.render(
    <HashRouter>
      <IndexNavbar />
      <Switch>
        <Route
          path='/'
          exact
          render={(props) => <Home {...props} />}
        />
        <Route
          path='/about-us'
          exact
          render={(props) => <AboutUs {...props} />}
        />
        <Route
          path='/contact-us'
          exact
          render={(props) => <ContactUs {...props} />}
        />
        <Route
          path='/login-page'
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path='/profile-page'
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path='/register-page'
          exact
          render={(props) => <Register {...props} />}
        />
        {/* TODO add page not found and remove redirect afterwards
      <Route
        path='*'
        render={props => <PageNotFound {...props} />}
      />
      */}
        <Redirect to='/' />
      </Switch>
      <Footer />
    </HashRouter>,
    document.getElementById('root')
);
