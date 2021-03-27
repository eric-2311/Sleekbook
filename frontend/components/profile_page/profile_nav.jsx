import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/session_actions';

export default function ProfileNav() {
    const [dropdown, setDropdown] = useState(false);

    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    });
    
    const dispatch = useDispatch();

    function handleDropdown(e) {
        e.preventDefault();
        dropdown ? setDropdown(false) : setDropdown(true)
    }
    
    function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <div className="prf-nav">
            <div className="prf-nav-logo">
                <p>s</p>
            </div>
            <div className="prf-nav-dropdown-btn">
                <button onClick={handleDropdown}>O</button>
                <ul className={dropdown ? "prf-dropdown-open" : "prf-dropdown-close"}>
                    <li className="prf-nav-list-item">
                        <input 
                        type="button"
                        className="prf-logout-btn" 
                        onClick={handleLogout} 
                        value="LOGOUT"/>
                    </li>
                </ul>
            </div>    
        </div>
    );
};