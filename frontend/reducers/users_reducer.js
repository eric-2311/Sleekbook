import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default function usersReducer(state = {}, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        default:
            return state;
    }
};
