import { connect } from 'react-redux';
import App from '../components/App';
import { checkAuth } from '../actions/login-actions';

const mapState =(state) => ({
    isLogged: state.login.isLogged,
});

const mapDispatch = (dispatch) => ({
    checkLoginAuth: () => {
        dispatch(checkAuth());
    },
});

export default connect(mapState, mapDispatch)(App);