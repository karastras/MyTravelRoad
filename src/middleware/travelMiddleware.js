import axios from 'axios';
import { useParams } from "react-router";

import { TRAVEL_FORM_SUBMIT, 
         travelSuccess, 
         travelError, 
         NEWSTEP_FORM_SUBMIT, 
         newStepSuccess, 
         newStepError, 
         FETCH_TRAVEL_DATA, 
         fetchTravelDataSuccess, 
         fetchTravelDataError} from '../actions/travel-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    // console.log('je veux laisser passer cette action', action)
    switch (action.type){
        case TRAVEL_FORM_SUBMIT:
          const token = localStorage.getItem('token');
          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'post',
            url:  'http://54.198.22.9/api/travel/add',
            data: {
              title: store.getState().newTravel.location,
              country: store.getState().newTravel.country,
              departure_at: store.getState().newTravel.departure,
            },
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(travelSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            dispatch(travelError());
          })
          break;    

        case NEWSTEP_FORM_SUBMIT:
          axios({
            method: 'post',
            url:  'http://54.198.22.9/create-travel',
            data: {
              step: store.getState().newTravel.step,
              // country: store.getState().newTravel.country,
              // departure: store.getState().newTravel.departure,
              // arrival: store.getState().newTravel.arrival,

            },
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(newStepSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            console.log('ERREUR!!')
            dispatch(newStepError());
          })
          break;  
        
        case FETCH_TRAVEL_DATA:
          const tokenExpected = localStorage.getItem('token');
          let { id } = useParams();

          axios({
            headers: { Authorization: `Bearer ${tokenExpected}`},
            method: 'get',
            url:  `http://54.198.22.9/api/travel/${id}/detail`,
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(fetchTravelDataSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            dispatch(fetchTravelDataError());
          })
          break;
        
        default:
          break;
    } 
  };




  