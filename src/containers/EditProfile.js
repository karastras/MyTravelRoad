import { connect } from 'react-redux';
import EditProfile from '../components/Connected/EditProfile';
import { editUserChange, editUserSubmit, toggleEditUserUploadCover, toggleEditUserUploadAvatar} from '../actions/profile-actions';


const mapState =(state) => ({
    firstname: state.editProfile.firstname,
    lastname: state.editProfile.lastname,
    email: state.editProfile.email,
    pseudo: state.editProfile.pseudo,
    city: state.editProfile.city,
    cityCode: state.editProfile.cityCode,
    description: state.editProfile.description,
    password1: state.editProfile.password1,
    password2: state.editProfile.password2,    
    editMessage: state.editProfile.editMessage,
    openedCover: state.editProfile.openedCover,
    openedAvatar: state.editProfile.openedAvatar,
    loginData: state.login.data.user,
    
});

const mapDispatch = (dispatch) => ({
    onInputChange: (text) => {
        dispatch(editUserChange(text));
    },
    onInputSubmit: () => {
        dispatch(editUserSubmit() )
    },
    onToggleCover: () => {
        dispatch(toggleEditUserUploadCover());
      },
      onToggleAvatar: () => {
        dispatch(toggleEditUserUploadAvatar());
      },
});


export default connect(mapState, mapDispatch)(EditProfile);