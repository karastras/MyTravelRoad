import {  SIGN_UP_INPUT_CHANGE,
          SIGN_UP_INPUT_SUBMIT,
          SIGN_UP_SUCCESS,
          SIGN_UP_ERROR,
        } from '../actions/createAccount-actions';

const initialState = {
        user: {},
        firstname: '',
        lastname: '',
        email: '',
        nickname:'',
        password1:'',
        password2:'',
        city:'',
        cityCode: '',
        creationMessage: '',
        failedMessage: '',  
};

const signup = (state = initialState, action = {}) => {
    switch (action.type) {
        case SIGN_UP_INPUT_CHANGE:
            return {
                ...state,           
                ...action.payload,
            }; 
            case SIGN_UP_INPUT_SUBMIT:
            return {
                ...state,
            };
       
        case SIGN_UP_SUCCESS:
          return {
            ...state,
            creationMessage: `Le compte ${action.payload.email} a bien été créé, vous pouvez vous connecter!`,
            firstname: '',
            lastname: '',
            email: '',
            nickname:'',
            password1:'',
            password2:'',
            city:'',
            cityCode: '',
            failedMessage: "",
          };
          
        case SIGN_UP_ERROR:
          return {
            ...state,
            user: {},
            failedMessage: 'La création du compte a échoué',
            creationMessage: '',
          };
          
        default:
          return state; 
    }
}

export default signup;