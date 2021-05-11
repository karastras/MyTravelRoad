import { connect } from 'react-redux';
import Form from '../components/Welcome/Form';
import { SignUpInputChange,SignUpInputSubmit } from '../actions/createAccount-actions';

// récupère l'état du Form 
const mapState = (state) => ({
    firstname: state.createAccount.firstname,
    lastname: state.createAccount.lastname,
    nickname: state.createAccount.nickname,
    email: state.createAccount.email,
    password1 : state.createAccount.password1,
    password2: state.createAccount.password2,
    city: state.createAccount.city,
    cityCode: state.createAccount.cityCode,
    creationMessage: state.createAccount.creationMessage,
    failedMessage: state.createAccount.failedMessage,
});

const mapDispatch = (dispatch) => ({
    changeField: (value, name) => {
        const text = {
          [name]: value,
        };
        dispatch(SignUpInputChange(text));
    },
    onInputSubmit: () => {
    dispatch(SignUpInputSubmit() )

    },
});

export default connect(mapState, mapDispatch)(Form);


