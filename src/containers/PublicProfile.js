import { connect } from 'react-redux';
import PublicProfile from '../components/Connected/PublicProfile';

const mapState = (state) => ({
    datas: state.login.data,

});

const mapDispatch = null;


export default connect(mapState, mapDispatch)(PublicProfile);