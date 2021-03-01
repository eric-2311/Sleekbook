import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const SIGN_UP_USER = "SIGN_UP_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const login = user => dispatch => {
    SessionApiUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)), err => (
            dispatch(receiveSessionErrors(err.responseJSON))
        ));
};

const signUpUser = user => ({
    type: SIGN_UP_USER,
    user
});

export const signup = user => dispatch => {
    SessionApiUtil.signup(user)
        .then(user => dispatch(signUpUser(user)), err => (
            dispatch(receiveSessionErrors(err.responseJSON))
        ));
};

const logoutCurrentUser = () => ({
    type: LOGOUT_USER
});

export const logout = () => dispatch => {
    SessionApiUtil.logout()
        .then(() => dispatch(logoutCurrentUser()), err => (
            dispatch(receiveSessionErrors(err.responseJSON))
        ));
};

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});