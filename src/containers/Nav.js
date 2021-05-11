import { connect } from 'react-redux';
import Nav from '../components/App/Header/Nav';
import { loginInputLogout } from '../actions/login-actions';
import {fetchTravels} from '../actions/privateTravelList-actions';

const mapState = (state) => ({
    loggedMessage: state.login.loggedMessage,
});

const mapDispatch = (dispatch) => ({
    handleLogout: () => {
        dispatch(loginInputLogout());
    },
    fetchTravels: () => {
        dispatch(fetchTravels());
      },
});


export default connect(mapState, mapDispatch)(Nav);