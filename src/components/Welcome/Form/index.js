import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Field from '../Login/Field';
import Main from '../Main'
import './style.scss';

const Form = ({
    // les props du composant statique
    firstname,
    lastname,
    nickname,
    email,
    password1,
    password2,
    city,
    cityCode,
    creationMessage,
    failedMessage,
    // les props qui viennent de container
    changeField,
    onInputSubmit
        }) => {  // fonction pour l'envoi du formulaire avec l'annulation du rechargement de la page
            const handleSubmit = (evt) => {
                evt.preventDefault();
                onInputSubmit();
            };
    return (
        <div className="form">     
            <div className="form-main">  
                <form onSubmit={handleSubmit}>
                        <div className="form-input">
                        {
                            !creationMessage && (
                                <div>
                                    <div className="form-signUpSuccess">{creationMessage}</div>
                                    <div className="form-signUpFailed">{failedMessage}</div>
                                    <div className="form-content">
                                        <Field name="firstname" type="text" placeholder="Prénom" onChange={changeField} value={firstname} />
                                
                                        <Field name="lastname" type="text" placeholder="Nom de famille" onChange={changeField} value={lastname} />
                                    </div>
                                    <div className="form-content">                          
                                        <Field name="nickname" type="text" placeholder="Pseudonyme" onChange={changeField} value={nickname} />
        
                                        <Field name="email" type="email" placeholder="Adresse Email" onChange={changeField} value={email} />
                                    </div>
                                    <div className="form-content">
                                        <Field name="password1" type="password" placeholder="Mot de passe" onChange={changeField} value={password1} />
        
                                        <Field name="password2" type="password" placeholder="Retaper votre mot de passe" onChange={changeField} value={password2} />
                                    </div>
                                    <div className="form-content">
                                    <Field name="city" type="text" placeholder="Ville" onChange={changeField} value={city} />

                                    <Field name="cityCode" type="number" placeholder="Code Postal" onChange={changeField} value={cityCode} />
                                </div> 
                                    <div className="form-buttons">
                                        <Link to='/login'>
                                            <button className="form-button cancel" type="button">Annuler</button>
                                        </Link>
                                    <button className="form-button create" type="submit">Créer mon compte</button>
                                    </div>  
                                </div>
                            )
                        }

                        {
                            creationMessage && <h2 className="form-signUpSuccess">{creationMessage}</h2>
                        }
                        </div>                           
                        
                               
                </form>
            </div>
        </div>
)}

export default Form;

Form.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname:PropTypes.string.isRequired,
    nickname: PropTypes.string,
    email: PropTypes.string.isRequired,
    password:PropTypes.string,
    city:PropTypes.string,
    cityCode: PropTypes.string,
    onChange:PropTypes.func,
    onSubmit:PropTypes.func,
    creationMessage:PropTypes.string.isRequired,
    failedMessage:PropTypes.string.isRequired,
}