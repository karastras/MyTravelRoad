import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

const DeleteTravel = () => {
        const onDeleteTravel = () => {
        const token = localStorage.getItem('token');
        axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'delete',
            url: `http://54.198.22.9/api/travel/{id}/delete`,  
        })
          .then((response) => {
            console.log('la reponse', response);
            window.location.assign('/');
          })
          .catch((error) => {
            console.log("y'a eu une erreur chef!",error);
          });
      };

    return (
        <div className="delTravel">
            <div className="delTravel-advertissement">
                <h2 className="delTravel-title">Attention</h2>
                <p className="delTravel-content">
                    Vous allez supprimer définitivement le voyage et toutes ses données.<br/>
                    Voulez-vous vraiment continuer?</p>
            </div>
            <div className="delTravel-button">

                <button className="delTravel-delete" onClick={() => {onDeleteTravel();}}>Supprimer le voyage</button>

                <Link to='/my-travels'>
                <button className="delTravel-cancel">Annuler</button>
                </Link>
            </div>
            
        </div>
)};



export default DeleteTravel;
