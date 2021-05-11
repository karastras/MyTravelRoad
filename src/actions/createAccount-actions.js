export const SIGN_UP_INPUT_CHANGE = 'SIGN_UP_INPUT_CHANGE';
export const SIGN_UP_INPUT_SUBMIT = 'SIGN_UP_INPUT_SUBMIT';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';


// action pour chaque changement dans un input
export const SignUpInputChange = (payload) => ({
    type: SIGN_UP_INPUT_CHANGE,
    payload,
  });
  
  // action pour la soumission des inputs
  export const SignUpInputSubmit = () => ({
    type: SIGN_UP_INPUT_SUBMIT,
  });
  
  export const signUpSuccess = (payload) => ({
    type: SIGN_UP_SUCCESS,
    payload,
  });
  
  export const signUpError = () => ({
    type: SIGN_UP_ERROR,
  });