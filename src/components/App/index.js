import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../../containers/Header';
import Footer from './Footer';
import Welcome from '../Welcome';
import Connected from '../Connected';
import './styles.scss';

const App = ({ checkLoginAuth, isLogged } ) => {
   useEffect(() => {
    checkLoginAuth();
 } );
return (
    <div className={ isLogged ? 'app' : 'app-welcome'}>

      <Header />

      { isLogged ? <Connected />  : <Welcome /> }

      { isLogged ? <Redirect to="/home" /> : <Redirect to="/login" /> }

      <Footer />
    </div>
  );
};

App.propTypes = {
  checkLoginAuth: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default App;
