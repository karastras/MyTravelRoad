import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'; 

import './style.scss';

const Nav = ({ loggedMessage, handleLogout, fetchTravels}) => { 
    return (
    <div className="navigation">
      <div className="navigation-links">
        <NavLink exact className="navigation-link" to="/home">
            ACCUEIL
        </NavLink>
        <NavLink exact className="navigation-link" to="/private-profile">
            PROFIL  
        </NavLink>
        <NavLink exact className="navigation-link" to="/my-travels" onClick={fetchTravels}>
            MES VOYAGES
        </NavLink>

        {/* <NavLink exact className="navigation-link" to="/my-travel-view">
            PrivateTravelView
        </NavLink>

        <NavLink exact className="navigation-link" to="/travel-view">
            PublicTravelView
        </NavLink> */}
      </div>
    <div className="navigation-logged">
      <p className="navigation-message">
        {loggedMessage}
      </p>
    
      <button
        type="button"
        className="navigation-button"
        onClick={handleLogout}
      >
        Déconnexion
      </button>
    </div>
  </div>
);
};

Nav.propTypes = {
    handleLogout: PropTypes.func.isRequired,
    loggedMessage: PropTypes.string,
};




export default Nav;