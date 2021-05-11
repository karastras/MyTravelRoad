export const FETCH_TRAVELS = 'FETCH_TRAVELS';
export const FETCH_TRAVELS_SUCCESS = 'FETCH_TRAVELS_SUCCESS';
export const FETCH_TRAVELS_ERROR = 'FETCH_TRAVELS_ERROR';

export const fetchTravels = () => ({
  type: FETCH_TRAVELS,
});

export const fetchTravelsSuccess = (payload) => ({
  type: FETCH_TRAVELS_SUCCESS,
  payload,
});

export const fetchTravelsError = () => ({
  type: FETCH_TRAVELS_ERROR,
});

  
  