import React from 'react';
import PropTypes from 'prop-types';
// import cove from './img/voyage.jpg';
// import avata from './img/avatar.png';
// import afrique from './img/afrique.jpg';
// import ameSud from './img/amerique-sud.jpg';
// import ameNord from './img/amerique-nord.jpg';

import './style.scss';

const PublicProfile = ({ datas }) => {
    console.log(datas.travels)
    return (
    <div className="profile">
        <div className="profile-photo">
            <img src={datas.user.cover} alt="fond d'écran" className="profile-cover"/>
        </div>
        <div className="profile-picture">
            <img src={datas.user.avatar} alt="avatar" className="profile-avatar"/>
            <h2 className="profile-pseudo">{datas.user.nickname}</h2>
        </div>
        <div className="profile-journal">
            <h2 className='profile-title'>Journal de bord</h2>
            <p>{datas.user.presentation}</p>
        </div>

        <div className="past-travels">
            {
                datas.travels.map((travel) => (
                <div className="voyage">
                    <img src={travel.cover} alt={travel.title} className="travel-cover"/>
                    <h2 className="voyage-title">{travel.title}</h2>
                </div>
                ))
            }
        </div>
    </div>
);
};


export default PublicProfile;

PublicProfile.protoTypes = {
    datas: PropTypes.arrayOf(
        PropTypes.shape({
            pseudo: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired,
            presentation: PropTypes.string.isRequired,
        }),
        PropTypes.shape({
            cover: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
    
    

};