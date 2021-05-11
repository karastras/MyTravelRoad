import React from 'react';
import { Link } from 'react-router-dom'; 
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';


import './style.scss';
import './custom.scss';

const Home = ({data}) =>{ 
    console.log(data);

    return(
    <div className="home">
        <div className="welcome-message">
            <h1>Bienvenue {data.user.nickname}!</h1>
            <Link to="/travel">
                <button className="new-travel">
                    Créer un voyage
                </button>
            </Link>
        </div>

        <Carousel className="item-div ">
        {
            data.travels.map((travel) => (
                <Carousel.Item key={travel.id} className="item">
                    <img
                    className="voyage-picture"
                    src={travel.cover}
                    alt="slide"
                    />
                    <Carousel.Caption className="position-sticky">
                    <h3>{travel.title}</h3>
                    
                    <Link to={`/travel-view/${travel.id}`}>
                        <button className="carousel-button">Voir ce voyage</button>
                    </Link>

                    </Carousel.Caption>
                </Carousel.Item>
                )
            )
        } 
        </Carousel>  

        
            
            
            
            {/* <Carousel.Item className="item">
                <img
                className="d-block w-100 h-100 voyage-picture"
                src={ameNord}
                alt="Third slide"
                />

                <Carousel.Caption className="position-sticky">
                <h3>Amérique du Nord 2018</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                className="d-block w-100 h-100 voyage-picture"
                src={afrique}
                alt="Third slide"
                />

                <Carousel.Caption className="position-sticky">
                <h3>Tanzanie 2009</h3>
                </Carousel.Caption>
            </Carousel.Item> */}
    </div>
        
)}

export default Home;

Home.propTypes = {
    firstname: PropTypes.string,
}