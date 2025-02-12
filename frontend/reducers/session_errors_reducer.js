import {
    RECEIVE_SESSION_ERRORS, 
    CLEAR_SESSION_ERRORS
} from '../actions/session_actions';

export default function sessionErrorsReducer(state = [], action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
}