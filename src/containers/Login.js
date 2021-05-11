import { connect } from 'react-redux';
import Login from '../components/Welcome/Login';
import { toggleLogginForm,  loginInputChange, loginInputSubmit } from '../actions/login-actions';

// récupère l'état du Login 
const mapState = (state) => ({
    opened: state.login.opened,
    email: state.login.email,
    password: state.login.password,
    isLogged: state.login.isLogged,
    loading: state.login.loading,
    nickname: state.login.nickname,
    loggedMessage: state.login.loggedMessage,
});

const mapDispatch = (dispatch) => ({
    onToggle: () => {
      dispatch(toggleLogginForm());
    },
    changeField: (value, name) => {
      const object = {
        [name]: value,
      };
      dispatch(loginInputChange(object));
    },
    handleLogin: () => {
        dispatch(loginInputSubmit());
    },
});
    

export default connect(mapState, mapDispatch)(Login);


