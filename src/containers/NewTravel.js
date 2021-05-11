import { connect } from 'react-redux';
import NewTravel from '../components/Connected/NewTravel';
import { toggleNewStepButton, newStepInputChange, newStepFormSubmit} from '../actions/travel-actions';
import { fetchCountries } from '../actions/countries-actions';

const mapState = (state) => ({
    location: state.newTravel.location,
    country: state.newTravel.country,
    departure: state.newTravel.departure,
    opened: state.newTravel.opened,
    step: state.newTravel.step, 
    countryData: state.countries.countryData,
});

const mapDispatch = (dispatch) => ({
    onToggle: () => {
      dispatch(toggleNewStepButton());
    },

    handleChange: (text) => {
      dispatch(newStepInputChange(text));
    },

    handleSubmit: () => {
      dispatch(newStepFormSubmit());
    },

    fetchCountries: () => {
      dispatch(fetchCountries());
    },
});
export default connect(mapState, mapDispatch)(NewTravel);