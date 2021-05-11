import { createStore, compose, applyMiddleware } from 'redux';

import createAccountMiddleware from '../middleware/createAccountMiddleware';
import loginMiddleware from '../middleware/loginMiddleware';
import travelMiddleware from '../middleware/travelMiddleware';
import countriesMiddleware from '../middleware/countriesMiddleware';
import editProfileMiddleware from '../middleware/editProfileMiddleware';
import privateTravelsMiddleware from '../middleware/privateTravelsMiddleware';

import reducer from '../reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        createAccountMiddleware,
        loginMiddleware,
        travelMiddleware,
        countriesMiddleware,
        editProfileMiddleware,
        privateTravelsMiddleware,
    ),
);

const store = createStore(
    reducer, 
    enhancers,
);


export default store;