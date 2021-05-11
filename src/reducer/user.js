import { EDIT_USER_SUCCESS } from '../actions/profile-actions';

const initialState = {
    firstname: 'John',
    lastname: 'Deuf',
    nickname: "DuhR",
    email: 'JohnDeufDurH@Grokif.miam',
    city: 'MyTravelTown',
    cityCode: 69999,
    description: "J'adoooore le jaune d'oeuf, je parcours le monde à la recherche du jaune d'oeuf ultime, suivez moi dans mes aventures mes COCO...ttes  ",
    cover: "",
    avatar: "",
    currentPassword: "",
    password1: "",
    password2: "",
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case EDIT_USER_SUCCESS:
            return{
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

export default user;