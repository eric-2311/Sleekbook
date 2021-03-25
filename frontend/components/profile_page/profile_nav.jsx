import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/session_actions';

export default function ProfileNav() {
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
        <div>
            <input 
                type="button"
                className="prf-logout-btn" 
                onClick={handleLogout} 
                value="LOGOUT"/>
        </div>
    )
}