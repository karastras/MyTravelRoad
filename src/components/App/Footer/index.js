import React from 'react';
import { Link } from 'react-router-dom';


import './styles.scss';


const Footer = () => (
    <div className='footer'>
      <ul className='footer-list'>
        <li>
          <Link to="/about-us" className='footer-content'>
            Qui sommes-nous?
          </Link>
        </li>
        <li>
          <Link to="/contact-us" className='footer-content'>
            Contactez nous
          </Link>
        </li>
        <li>
          <Link to="/legal-notice" className='footer-content'>
            Mentions légales
          </Link>
        </li>
      </ul>
    </div>
  );

  export default Footer;
