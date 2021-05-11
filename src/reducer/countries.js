import { FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR } from '../actions/countries-actions';

const initialState = {
    countryData: [],
    error: null,
};

const countries = (state = initialState, action = {}) => {
switch (action.type) {
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      countryData: [...state.countryData, {...action.payload}],
      error: null,
      
    };
    
    case FETCH_COUNTRIES_ERROR:
      return {
        ...state,
        error: 'Impossible de récupérer le pays souhaité',
    };
    
  default:
    return state; 
}
}

export default countries;

