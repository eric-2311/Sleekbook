import {
    RECEIVE_CURRENT_USER,
    SIGN_UP_USER,
    LOGOUT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({id: null});

export default function sessionReducer(state = _nullUser, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { id: action.currentUser.id });
        case SIGN_UP_USER:
            return Object.assign({}, state, { id: action.user.id });
        case LOGOUT_USER:
            return _nullUser;
        default:
            return state;
    };
};
