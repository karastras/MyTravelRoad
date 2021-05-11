export const EDIT_USER_CHANGE = 'EDIT_USER_CHANGE';
export const EDIT_USER_SUBMIT = 'EDIT_USER_SUBMIT';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR';
export const TOGGLE_EDIT_USER_UPLOAD_COVER = 'TOGGLE_EDIT_USER_UPLOAD_COVER';
export const TOGGLE_EDIT_USER_UPLOAD_AVATAR = 'TOGGLE_EDIT_USER_UPLOAD_AVATAR';

export const editUserChange = (payload) => ({
    type: EDIT_USER_CHANGE,
    payload
});

export const editUserSubmit = () => ({
    type: EDIT_USER_SUBMIT,
})

export const editUserSuccess = (payload) => ({
    type: EDIT_USER_SUCCESS,
    payload
})

export const editUserError = () => ({
    type: EDIT_USER_ERROR,
})

export const toggleEditUserUploadCover = () => ({
    type: TOGGLE_EDIT_USER_UPLOAD_COVER,
})

export const toggleEditUserUploadAvatar = () => ({
    type: TOGGLE_EDIT_USER_UPLOAD_AVATAR,
})
