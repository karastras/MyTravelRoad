import React from 'react';
import { Redirect } from 'react-router-dom'
import './style.scss';

const TravelName = ({location, country, departure, handleChange, handleSubmit, redirection}) => {
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        handleChange({
            [name]: value,
        });
      };

    const handleInputSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit();
    };

    if (redirection) return <Redirect to="/create-travel" />;

    return(
    <div className="travelName">
        <form className="travelName-form" onSubmit={handleInputSubmit}>
            <label>
            <h1 className="travelName-title">Titre de ton voyage<span>*</span></h1>
                <input type="text" 
                        name="location" 
                        className="travelName-input" 
                        placeholder="Titre de ton voyage" 
                        value={location}
                        onChange={handleInputChange} 
                        />
            </label>
            <label>
            <h1 className="travelName-title">Pays de départ<span>*</span></h1>
                <input type="text" 
                        name="country" 
                        className="travelName-input" 
                        placeholder="Pays de départ" 
                        value={country}
                        onChange={handleInputChange}
                        />
            </label>
            <label>
            <h1 className="travelName-title">Date de départ<span>*</span></h1>
                <input type="date" 
                        name="departure" 
                        className="travelName-input" 
                        placeholder="Date de départ" 
                        value={departure}
                        onChange={handleInputChange}
                        />
            </label>
            <button className="newStep-button">Créer un nouveau voyage</button>
        </form>
    </div>
)};

export default TravelName;
