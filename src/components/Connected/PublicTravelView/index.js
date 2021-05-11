import React from 'react';
// import { Link } from 'react-router-dom'; 
// import PropTypes from 'prop-types';
import {Map, Marker, Popup, TileLayer, Polyline} from 'react-leaflet';
import './styles.scss';


const PublicTravelView = ({data, travelData, fetchTravelData}) => {
    
    // console.log(travelData)
    fetchTravelData();
     return(
        <div className="pubTravView">
        <div className="top-block">
        {
        travelData.travel && 
            <div className="pubTravView-header">
                <div className="pubTravView-infos">
                    <h2 className="pubTravView-title">{travelData.travel.title}</h2>
                    {/* <p className="pubTravView-date">date de départ: {travelData.travel.departure_at}</p> */}
                </div>
            </div>
        }
        { travelData.user && travelData.user.map((user)=>{
            console.log(travelData.user);
            return(
                <div className="pubTravView-photo">
                    <img className="pubTravView-cover" src={travelData.travel.cover} alt="" />
                        
                    {/* <Link to={`/public-profil/${id}`}> */}
                        <div className="pubTravView-picture">
                            <div className="avatar-block">
                                <img className="pubTravView-avatar"src={user.avatar} alt=""/>
                            </div>
                            <p className="pubTravView-name">{user.nickname}</p>            
                        </div>
                    {/* </Link> */}
                </div>
        )})
        }
            <div>
                <div className="pubTravView-content">                    
                    {/* <select name="steps" id="steps">
                        <option value="">--Choisissez une étape--</option>
                        <option value="step"></option>

                    </select> */}
                </div>
            </div>
        </div>
            <div className="pubTravView-main">
                    {/* ============================TESTS MAP==================================== */}

                <Map center={[43.696319580078125,7.270940780639648]} zoom={3}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {/* ===================MARKER ON MAP======================== */}
                        {/* {
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
                                
                        }                        */}
                    </Map>
                </div>
                    {/* ================================================================ */}
        
        </div>
    )
};




export default PublicTravelView;