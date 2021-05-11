import { connect } from 'react-redux';
import PrivateProfile from '../components/Connected/PrivateProfile';

const mapState = (state) => ({
    userData: state.login.data.user
});

const mapDispatch = null;


export default connect(mapState, mapDispatch)(PrivateProfile);