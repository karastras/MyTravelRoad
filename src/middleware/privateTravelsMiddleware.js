import axios from 'axios';
import { FETCH_TRAVELS, fetchTravelsSuccess, fetchTravelsError } from '../actions/privateTravelList-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    // console.log('je veux laisser passer cette action', action)
    switch (action.type){
        case FETCH_TRAVELS:
          const token = localStorage.getItem('token');
          axios({
            headers: { Authorization: `Bearer ${token}`},
            method: 'get',
            url:  'http://54.198.22.9/api/travel/user',
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(fetchTravelsSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            dispatch(fetchTravelsError());
          })
          break;      
        default:
          break;
    } 
  };




  