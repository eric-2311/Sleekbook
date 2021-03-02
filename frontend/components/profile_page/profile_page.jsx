import React from 'react';
import { logout } from '../../actions/session_actions';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function ProfilePage() {
    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    });

    const dispatch = useDispatch();

    function handleLogout(e) {
        e.preventDefault();
        dispatch(logout())
    }

    if (state.currentUser) {
        return (
            <div>
                Hello World!
                <p>{state.currentUser.first_name}</p>
                <button onClick={handleLogout}>LOGOUT</button>
            </div>
        )
    }
}

export default withRouter(ProfilePage);