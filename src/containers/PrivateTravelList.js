import { connect } from 'react-redux';
import PrivateTravelList from '../components/Connected/PrivateTravelList';
import {fetchTravels} from '../actions/privateTravelList-actions'


const mapState = (state) => ({
    allTravels: state.newTravel.allTravels,
});

const mapDispatch = (dispatch) => ({
    fetchTravels: () => {
        dispatch(fetchTravels());
      },
});


export default connect(mapState, mapDispatch)(PrivateTravelList);