import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Map, Marker, Popup, TileLayer, Polyline} from 'react-leaflet';
import "@fortawesome/fontawesome-free/js/all";

import countryList from './countryList';
import './style.scss';


const NewTravel = ({fetchCountries, countryData, location, country, departure, step, opened, onToggle, handleChange, handleSubmit} ) => {
console.log(countryData)



    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        handleChange({
            [name]: value,
        });
        fetchCountries();
    };

    const handleInputSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit();
    };

    const [ activeLocation, setActiveLocation ] = React.useState(null);
      
    return(
        <div className="travel-new">
            <div className={opened ? 'newTravel-closed' : 'newTravel'}>
                <div className="top-block">
                    <div>
                        <h1 className="newTravel-title">{location}</h1>
                        <h3 className="newTravel-country">PAYS DE DEPART: {country}</h3>
                        <h4 className="newTravel-departure">Date de départ: {departure}</h4>
                    </div>

                    <button className={opened ? 'newTravel-create opened' : 'newTravel-create'}
                            type="button"
                            onClick={onToggle}>
                        <i className="fas fa-map-marked-alt fa-2x"></i>
                        <span>Nouvelle étape</span>
                    </button>

                    <Link to="/home">
                        <button className='newTravel-create'>
                            Valider le voyage
                        </button>
                    </Link>

                    {/* <label htmlFor="steps-select" className="steps-select">
                        <select name="steps" id="steps">
                            <option value="">--Choisissez une étape--</option>
                            <option value="step">{country.name}</option>

                        </select>
                    </label> */}
                </div>
                    
                <div className="bottom-block">
                <Map center={[43.696319580078125,7.270940780639648]} zoom={3}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {/* ===================MARKER ON MAP======================== */}
                        {
                            countryData[0] && countryData.map((country) => {
                                return(
                                    <Marker 
                                        key={country.name} 
                                        className="marker"
                                        position={[country.latlng[0],country.latlng[1]]}
                                        onClick={()=> {
                                            setActiveLocation(country)
                                        }} 
                                    />
                                )
                            })
                        }
                        {   activeLocation && 
                            <Popup 
                                position={[ activeLocation.latlng[0],activeLocation.latlng[1] ]}
                                onClose={()=> {
                                    setActiveLocation(null);
                                }}
                            >
                                <div>
                                    <h1 className="popup-name">{activeLocation.name}</h1>
                                    <h3 className="popup-city">{activeLocation.capital}</h3>
                                    <img className="popup-image" src={activeLocation.flag} alt="flag"/>
                                </div>
                            </Popup>
                            
                        })   
                        
                        {
                            countryData[1] && countryData.map(({ latlng }) => {
                                return(
                                <Polyline 
                                    key={latlng} 
                                    positions={[
                                        [countryData[0].latlng[0], countryData[0].latlng[1]],
                                        [countryData[countryData.length - 2].latlng[0], countryData[countryData.length - 2].latlng[1]], 
                                        [countryData[countryData.length - 1].latlng[0], countryData[countryData.length - 1].latlng[1]],
                                        ]} 
                                    color={'red'} 
                                    dashArray={"5,5"}/>
                                )
                            })
                                
                        }
                        {/* ======================================================= */}


                        
                    </Map>
                </div>
            </div>

            <div className={opened ? 'newStep' : 'newStep-closed'}>
                <form className="newStep-form" onSubmit={handleInputSubmit}>
                    <label>
                    <h1>Pays<span>*</span></h1>

{/*================== LISTE DEROULANTE COUNTRIES ===============*/}
                    <select name="countryList" className="newStep-input" value={step.country} onChange={handleInputChange}>
                        <option value="Liste des pays">Choisir un pays</option>
                        {
                        countryList.map((country) => {
                            return (
                                <option key={country} value={country}>{country}</option>
                            );    
                        })
                        }
                    </select>
{/* ============================================================== */}
                    </label>
                    {/* <label>
                    <h1>Date de départ<span>*</span></h1>
                        <input type="date" 
                               name="departure" 
                               className="newStep-input" 
                               placeholder="Date de départ" 
                               value={step.departure} 
                               onChange={handleInputChange}/> */}
                    {/* </label> */} 
                    {/* <label>
                    <h1>Date d'arrivée</h1>
                        <input type="date" 
                               name="arrival" 
                               className="newStep-inputb" 
                               placeholder="Date d'arrivée" 
                               value={step.arrival} 
                               onChange={handleInputChange }/>
    {/* ========================================================                  
    !!A METTRE EN V2!!
                    <label>
                    <h1>Ville</h1>
                        <input type="text" 
                               name="city" 
                               className="newStep-input" 
                               placeholder="Ville" 
                               value={step.city} 
                               onChange={handleInputChange}/>
                    </label>
                    <label>
                    <h1>Lieu</h1>
                        <input type="text" 
                               name="place" 
                               className="newStep-input" 
                               placeholder="Lieu" 
                               value={step.place} 
                               onChange={handleInputChange}/>
                    </label>

                    <label>
                    <h1>Etape n°</h1>
                        <input type="number" 
                               name="stepNb"
                               className="newStep-input" 
                               placeholder="Etape n°" 
                               value={step.stepNb} 
                               onChange={handleInputChange}/>
                    </label>
    ======================================================== */}
                    
            {/* </label> */}

                    <button className="newStep-button">Ajouter nouvelle étape</button>
                    
                </form>
            </div>
        </div>
    )
}
export default NewTravel;

NewTravel.propTypes = {
    location: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    step: PropTypes.shape({
        country: PropTypes.string,
        city: PropTypes.string,
        place: PropTypes.string,
        // stepNb: PropTypes.number,
        departure: PropTypes.string.isRequired,
        arrival: PropTypes.string.isRequired,
    })
};