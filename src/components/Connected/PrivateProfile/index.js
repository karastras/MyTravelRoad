import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import pic from './cover.jpg';
//import avatarpicture from './face.jpg';

import './styles.scss';



const privateProfile = ({ userData }) => {
    // console.log(userData)
    return (
        <div className="privateProfile">
            
            <div className="privateProfile-infos">
                
                <div className="privateProfile-profil">
                    <h4 className="privateProfile-titleProfile">Informations personnelles :</h4>
                    <h6><b>Nom</b></h6>
                    <p>{userData.lastname}</p>
                    
                    <h6><b>Prénom</b></h6>
                    <p>{userData.firstname}</p>
                    
                    <h6><b>Email</b></h6>
                    <p>{userData.email}</p>
                    
                    <h6><b>Ville</b></h6>
                    <p>{userData.city}</p>
                    
                    <h6><b>Code Postal</b></h6>
                    <p>{userData.postal}</p>
                </div>

                <div className="privateProfile-article">
                    <article>
                        <h4 className="privateProfile-titleDescription">A propos de vous :</h4>
                            <p className="privateProfile-description">
                                {userData.presentation}
                            </p>
                    </article>
                </div>

                <div className="privateProfile-buttons">
                    <Link to='/edit-profile' >
                        <button className="privateProfile-button">Editer le profil</button>
                    </Link>
                    <Link to='/public-profile' >
                        <button className="privateProfile-button">Ma vue publique</button>
                    </Link>                
                    <Link to='/delete-account' >
                        <button className="privateProfile-delete">Supprimer mon compte</button>
                    </Link>
                </div>

            </div>

            <div className="privateProfile-infos">

                    <img className="privateProfile-cover" src={userData.cover} alt="" />

                <div className="privateProfile-picture">
                    <img className="privateProfile-avatar"src={userData.avatar} alt=""/>

                    <p className="privateProfile-name">{userData.nickname}</p>            
                </div>

                
            </div>
        </div>

    );
}
export default privateProfile;

privateProfile.propTypes = {
    userData: PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        lastname:PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        city:PropTypes.string,
        postal: PropTypes.number,
        avatar:PropTypes.string.isRequired,
        cover:PropTypes.string.isRequired,
        presentation:PropTypes.string.isRequired,
    }).isRequired,
};
