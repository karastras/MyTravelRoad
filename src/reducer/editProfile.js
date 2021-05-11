import {    EDIT_USER_CHANGE, 
            EDIT_USER_ERROR, 
            EDIT_USER_SUCCESS, 
            TOGGLE_EDIT_USER_UPLOAD_COVER,
            TOGGLE_EDIT_USER_UPLOAD_AVATAR,
        } from '../actions/profile-actions';


const initialState = {
    firstname: "",
    lastname: "",
    nickname: "",
    email: "",
    city: "",
    cityCode: '',
    description: "",
    cover: "",
    avatar: "",
    currentPassword: "",
    password1: "",
    password2: "",
    editMessage:"",
    openedCover: false,
    openedAvatar: false,
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
            case EDIT_USER_CHANGE:
                return {
                    ...state,
                    ...action.payload,
                };
            case EDIT_USER_ERROR:
                return{
                    ...state,
                    editMessage: "Les changements n'ont pas été enregistrés",
                    firstname: '',
                    lastname: '',
                    nickname: "",
                    email: '',
                    city: '',
                    cityCode: '',
                    description: "",
                    cover: "",
                    avatar: "",
                    currentPassword: "",
                    password1: "",
                    password2: "",
                }
            case EDIT_USER_SUCCESS:
                return{
                    ...state,
                    editMessage: "Les changements ont bien été enregistrés",
                    firstname: '',
                    lastname: '',
                    nickname: "",
                    email: '',
                    city: '',
                    cityCode: '',
                    description: "",
                    cover: "",
                    avatar: "",
                    currentPassword: "",
                    password1: "",
                    password2: "",
                }
            case TOGGLE_EDIT_USER_UPLOAD_COVER:
                return{
                    ...state,
                    openedCover: !state.openedCover,
                }
            case TOGGLE_EDIT_USER_UPLOAD_AVATAR:
                return{
                    ...state,
                    openedAvatar: !state.openedAvatar,
                }
            
        default:
            return state;
    }
};

export default user;