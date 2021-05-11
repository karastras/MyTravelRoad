import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Form from '../../containers/CreateAccount';
import AboutUs from '../App/Footer/AboutUs'
import Contact from '../App/Footer/Contact';
import LegalNotice from '../App/Footer/LegalNotice'
import Video from './Video';

import './styles.scss';

const Welcome = () => (
    <div className='welcome'>
        
    <Switch>
      <Route path="/login">
        <Main />
      </Route>      
      
      <Route path="/create-account">
        <Form />      
      </Route>

      <Route exact path="/about-us">
        <AboutUs />
      </Route>
      
      <Route exact path="/contact-us">
        <Contact />
      </Route>

      <Route exact path="/legal-notice">
        <LegalNotice />
      </Route>
    </Switch>

      <Video />
     
    </div>
  );

  export default Welcome;