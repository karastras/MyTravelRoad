import {TOGGLE_LOGIN_FORM,
        LOGIN_INPUT_CHANGE,
        LOGIN_INPUT_SUBMIT,
        LOGIN_SUCCESS,
        LOGIN_ERROR,
        LOGOUT_SUCCESS,
        LOGOUT_ERROR,        
        } from '../actions/login-actions';

const initialState = {
    opened: false,
    loading: false,
    email: 'junie@martin.fr',
    password:'junie',
    isLogged: false,
    nickname: '',
    loggedMessage: '',
    data: '', 
};

const login = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                opened: true,
            };
        case LOGIN_INPUT_CHANGE:
            return {
                ...state,
                ...action.payload,
            };
        case LOGIN_INPUT_SUBMIT:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogged: true,
                nickname: action.payload.user.nickname,
                loggedMessage: '',
                data: action.payload,
            };
            case LOGIN_ERROR:
                return {
                ...state,
                loading: false,
                isLogged: false,
                opened: false,
                nickname: '',
                loggedMessage: 'Erreur de connexion',
            };
            case LOGOUT_SUCCESS:
                return {
                ...state,
                isLogged: false,
                nickname: '',
                loggedMessage: '',
            };
            case LOGOUT_ERROR:
                return {
                ...state,
                isLogged: true,
                loggedMessage: 'La déconnexion a échoué',
            };
        default:
            return state;
    }
};

export default login;