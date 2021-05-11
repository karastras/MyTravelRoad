import axios from 'axios';
import {  SIGN_UP_INPUT_SUBMIT, signUpSuccess, signUpError} from '../actions/createAccount-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    // console.log('je veux laisser passer cette action', action)
    switch (action.type){
        case SIGN_UP_INPUT_SUBMIT:
          axios({
            method: 'post',
            url:  'http://54.198.22.9/api/register',
            data: {
              firstname: store.getState().createAccount.firstname,
              lastname: store.getState().createAccount.lastname,
              nickname: store.getState().createAccount.nickname,
              email: store.getState().createAccount.email,
              password: store.getState().createAccount.password1,
            },
          })
          .then((res) => {
            const serverResponse = res.data;
            console.log(serverResponse);
            dispatch(signUpSuccess(serverResponse));
          })
          .catch((err) => {
            console.error(err);
            dispatch(signUpError())
          })
          break;      
        default:
          break;
    } 
  };




  