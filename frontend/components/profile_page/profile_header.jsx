import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/session_actions';

export default function ProfileHeader() {
    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    });

    const dispatch = useDispatch();

    function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <div className="prf-header-container">
            <h1 className="prf-name">
                {`${state.currentUser.first_name} ${state.currentUser.last_name}`}
            </h1>
            <input 
                type="button"
                className="prf-logout-btn" 
                onClick={handleLogout} 
                value="LOGOUT"/>
        </div>
    );
};