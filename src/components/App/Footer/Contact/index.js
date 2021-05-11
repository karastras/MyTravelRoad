import React from 'react';
import './styles.scss';




const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-intro">
                <h1 className="contact-title">Contactez-nous</h1>
                <p className="contact-legend">Merci de remplir vos informations et 
                nous vous répondrons dans les plus brefs délais.</p>
            </div>
            
            
                <form className="contact-form">
                    <div>                    
                        <input className="contact-input" placeholder="Nom" type="text" />                    
                    </div>
                    <div>                    
                        <input className="contact-input" placeholder="Prénom" type="text" />                    
                    </div>
                    <div>                
                        <input className="contact-input" placeholder="Email" type="text" />                    
                    </div>
                    <div>                
                        <input className="contact-input" placeholder="Téléphone" type="number" />                    
                    </div>
                    <div>                
                        <input className="contact-input" placeholder="Sujet du message" type="text" />                    
                    </div>
                    <div>                
                        <textarea className="contact-input" placeholder="Entrez votre message" type="text" ></textarea>                    
                    </div>
                    <div>
                    <button className="contact-button"type="submit">Envoyer</button>
                    </div>
                </form>
            
        </div>
    );
    }   


export default Contact;