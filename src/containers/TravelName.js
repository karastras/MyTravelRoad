import { connect } from 'react-redux';
import TravelName from '../components/Connected/NewTravel/TravelName';
import { travelInputChange, travelFormSubmit} from '../actions/travel-actions';

const mapState = (state) => ({
    location: state.newTravel.location,
    country: state.newTravel.country,
    departure: state.newTravel.departure,
    redirection: state.newTravel.redirection,
});

const mapDispatch = (dispatch) => ({
    handleChange: (text) => {
      dispatch(travelInputChange(text));
    },

    handleSubmit: () => {
      dispatch(travelFormSubmit());
    },
    
});
export default connect(mapState, mapDispatch)(TravelName);