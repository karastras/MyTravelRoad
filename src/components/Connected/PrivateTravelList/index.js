import React from 'react';
import { Link } from 'react-router-dom'; 
import trashbin from './jeremy.png';
import add from './localisation.png';
import './styles.scss';

const PrivateTravelList = ({ allTravels }) => {

    return(
        <div className="travelList">
            {/* <div className="travelList-navigation">
                <nav className="travelList-nav1">
                    <ul>
                        <li className="travelList-list"><a className="travelList-lien" href="#Tous">Tous</a></li>
                        <li className="travelList-list"><a className="travelList-lien" href="#En cours">En cours </a></li>
                        <li className="travelList-list"><a className="travelList-lien" href="#Archivé">Archiver</a></li>
                    </ul>
                </nav>
            </div>

            <div className="travelList-navigation">
                    <select className="travelList-nav">
                        <option className="travelList-list">Trier par</option>
                        <option className="travelList-list">Date</option>
                        <option className="travelList-list">Pays</option>
                        <option className="travelList-list">Catégorie</option>
                    </select>
            </div> */}
            
            <div className="travelList-allTravels">
            {
                allTravels && allTravels.map((travelObject) =>(
                    travelObject.travel.map((travelDetails) => (
                    <div className="travelList-card" key={travelDetails.id}>
                        <img className="travelList-avatar"src={travelDetails.cover} alt=""/>
                        <div className="travelList-img">
                            <h4 className="travelList-title">{travelDetails.title}</h4>
                            <div className="travelList-date">
                            <p classname="travelList-dep">Départ: {travelObject.departureAt[0]}</p>
                            <Link to='/delete-travel' >
                                <img className="travelList-delete" src={trashbin} alt="trashbin" />
                            </Link>
                            </div>
                            {/* <button className="travelList-supp">Archiver</button> */}
                        </div>
                    </div>
                ))))
            }
            <Link to="/travel">
                <div className="travelList-card newcard">
                    <img className="travelList-avatar marker"src={add} alt=""/>
                    <div className="marker-title">
                    <h2 >Créer un voyage</h2>
                    </div>
                </div>
            </Link>
            
            </div>
        </div>
    );
}

export default PrivateTravelList;