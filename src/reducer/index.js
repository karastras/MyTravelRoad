import { combineReducers } from 'redux';
import createAccount from './createAccount';
import login from './login';
import newTravel from './newTravel';
import countries from './countries';
import user from './user';
import editProfile from './editProfile';

export default combineReducers({
    createAccount,
    login,
    newTravel,
    countries,
    user,
    editProfile,
});
