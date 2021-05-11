import { connect } from 'react-redux';
import Header from '../components/App/Header';


const mapState =(state) => ({
    isLogged: state.login.isLogged,
});

const mapDispatch = null;


export default connect(mapState, mapDispatch)(Header);