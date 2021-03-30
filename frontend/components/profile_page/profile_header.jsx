import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileNav from './profile_nav';

export default function ProfileHeader() {
    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    });

    const dispatch = useDispatch();
    

    return (
        <div className="prf-header-container">
            <div className="prf-nav-container">
                <ProfileNav/>
            </div>
            <div className="prf-header-content">
                <h1 className="prf-name">
                    {`${state.currentUser.first_name} ${state.currentUser.last_name}`}
                </h1>
            </div>
        </div>
    );
};