import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../../../containers/Login';
import Nav from '../../../containers/Nav';
import logo from './logo-travel.png';
import './styles.scss';


const Header = ( { isLogged } ) => {
    return (
    <div className="header">

        <div className="header-left">          
            {isLogged ? 
                <Link to="/home"> <img src={logo} alt="logo My Travel Road" className="header-logo" /> </Link>
                    :                
                <Link to="/login"> <img src={logo} alt="logo My Travel Road" className="header-logo" /> </Link>
            }      
        </div>

        <div className="header-right">
            {isLogged ? <Nav /> : <Login /> }
        </div>
    </div>
  );
};

  Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
  };

  export default Header;