import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
import avata from './avatar.jpeg';
import cove from './cover.jpg';
import Upload from '../Upload';

const EditProfile = ({
    firstname,
    lastname,
    pseudo,
    email,
    city,
    cityCode,
    oldPassword,
    password1,
    password2,
    description,
    avatar,
    cover,
    editMessage,
    onInputSubmit,
    onInputChange,
    openedCover,
    openedAvatar,
    onToggleCover,
    onToggleAvatar,
    loginData,    
    
    }) => {
        const handleSubmit = (evt) => {
            evt.preventDefault();
            onInputSubmit();
        };
        const handleInputChange = (evt) => {
            const { name, value } = evt.target;
            onInputChange({
                [name]: value,
            });
        };

        console.log(loginData);
        
    return (              
            <div className="editProfile">
                    <form className="editProfile-form" onSubmit={handleSubmit}>
                        <div className="editProfile-info">
                            <h5 className="editProfile-title">Editez votre profil</h5>
                            <input className="editProfile-input" name="lastname" type="text" placeholder={loginData.lastname} onChange={handleInputChange} value={lastname} />
                            <input className="editProfile-input" name="firstname" type="text" placeholder={loginData.firstname} onChange={handleInputChange} value={firstname} />
                            <input className="editProfile-input" name="email" type="text" placeholder={loginData.email} onChange={handleInputChange} value={email} />
                            <input className="editProfile-input" name="pseudo" type="text" placeholder={loginData.nickname} onChange={handleInputChange} value={pseudo} />
                                <div className="editProfile-cityInfo">
                                    <input className="editProfile-input-city" name="city" type="text" placeholder={loginData.city} onChange={handleInputChange} value={city} />
                                    <input className="editProfile-input-cityCode" name="cityCode" type="number" placeholder={loginData.postal} onChange={handleInputChange} value={cityCode} />
                                </div>
                        </div>
                        <div className="editProfile-description">
                            <h5 className="editProfile-title">A propos de vous</h5>
                            <textarea className="editProfile-input" name="description" type="text" placeholder={loginData.presentation} onChange={handleInputChange} value={description} />
                        </div>
                        <div className="editProfile-password">
                            <h5 className="editProfile-title">Modifiez votre mot de passe</h5>
                            <input className="editProfile-input" name="oldpassword" type="password" placeholder="Mot de passe actuel" onChange={handleInputChange} value={oldPassword} />
                            <input className="editProfile-input" name="password1" type="password" placeholder="Nouveau mot de passe" onChange={handleInputChange} value={password1} />
                            <input className="editProfile-input" name="password2" type="password" placeholder="Retapez votre nouveau mot de passe" onChange={handleInputChange} value={password2} />
                        </div>
                        
                        
                        <div className="editProfile-buttons">
                                <button className="editProfile-button" type="submit" >Enregistrer</button>
                            <Link to="/private-profile" >
                                <button className="editProfile-button cancel" >Annuler</button>
                            </Link>
                        </div>
                                <p className="editProfile-editMessage">{editMessage}</p>
                    </form>
                
                

                
                    <div className="editProfile-picture">
                        <img className="editProfile-cover" src={loginData.cover} alt="" />
                        <button className={openedCover ? 'editProfile-button opened' : 'editProfile-button'} 
                        type="button" onClick={onToggleCover}>Editer votre photo de couverture</button> 
                        <div className={!openedCover ? 'editProfile-uploadAvatar closed' : 'editProfile-uploadAvatar'}>
                        <Upload />
                        <button className='editProfile-button cancel' type="button" onClick={onToggleCover}>Annuler</button>

                        </div>
                        <img className="editProfile-avatar"src={loginData.avatar} alt=""/>
                        <button className={openedAvatar ? 'editProfile-button opened' : 'editProfile-button'}
                        type="button" onClick={onToggleAvatar}>Editer votre avatar</button>
                        <div className={!openedAvatar ? 'editProfile-uploadAvatar closed' : 'editProfile-uploadAvatar'}>
                        <Upload />
                        <button className='editProfile-button cancel' type="button" onClick={onToggleAvatar}>Annuler</button>
                        </div>
                    </div>
                
            </div>
  );
};

EditProfile.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    cityCode: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,

    password1: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,

    avatar: PropTypes.string,
    cover: PropTypes.string,
    openedCover: PropTypes.bool.isRequired,
    openedAvatar: PropTypes.bool.isRequired,

    editMessage: PropTypes.string.isRequired,

    onInputSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onToggleCover: PropTypes.func.isRequired,
    onToggleAvatar: PropTypes.func.isRequired,

};

export default EditProfile;