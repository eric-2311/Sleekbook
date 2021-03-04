import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileHeader from './profile_header';

function ProfilePage() {
    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    });

    return (
        <div className="prf-page-container">
            <ProfileHeader />
        </div>
    )
}

export default withRouter(ProfilePage);