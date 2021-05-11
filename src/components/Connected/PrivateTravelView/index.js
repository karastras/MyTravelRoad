import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pic from './cover.jpg';
import avatarpicture from './face.jpg';
import './styles.scss';

const PrivateTravelView = () => {
    return(
        <div className="privTravView">
            <div className="privTravView-header">
                <div className="privTravView-infos">
                    <h2 className="privTravView-title">Titre du voyage</h2>
                    <p className="privTravView-date">date de départ: 00/00/0000</p>
                </div>

                <div className="privTravView-photo">
                    <img className="privTravView-cover" src={pic} alt="" />
                        <div className="privTravView-picture">
                            <img className="privTravView-avatar"src={avatarpicture} alt=""/>
                            <p className="privTravView-name">PSEUDO</p>            
                        </div>
                </div>
                <div className="privTravView-content">                    
                <select name="steps" id="steps">
                            <option value="">--Choisissez une étape--</option>
                            <option value="step">flagada</option>

                        </select>

                </div>
                
            </div>
            <div className="privTravView-main">
                <div className="privTravView-map">
                    lopmlo
                </div>
            </div>
        </div>
    )
};




export default PrivateTravelView;