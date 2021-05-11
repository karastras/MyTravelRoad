import axios from 'axios';
import { EDIT_USER_SUBMIT, editUserSuccess, editUserError } from '../actions/profile-actions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;

    switch (action.type){
            case EDIT_USER_SUBMIT:
              const token = localStorage.getItem('token');
                axios({
                    headers: { Authorization: `Bearer ${token}`},
                    method: 'patch',
                    url: 'http://54.198.22.9/api/user/edit',
                    data: {
                        firstname: store.getState().editProfile.firstname,
                        lastname: store.getState().editProfile.lastname,
                        email: store.getState().editProfile.email,
                        nickname: store.getState().editProfile.nickname,
                        presentation: store.getState().editProfile.description,
                        city: store.getState().editProfile.city,
                        postal: store.getState().editProfile.cityCode,
                        currentPassword: store.getState().editProfile.currentPassword,
                        newPassword: store.getState().editProfile.password1,                     
                    }
                })
                .then((res) => {
                    const serverResponse = res.data;
                    console.log(serverResponse);
                    dispatch(editUserSuccess(serverResponse));
                  })
                  .catch((err) => {
                    console.log(err);
                    dispatch(editUserError());
                  });
                break;
        default:
          break;
    } 
  };