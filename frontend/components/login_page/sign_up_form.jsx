import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../actions/session_actions';

export default function SignUpForm() {
    const [user, setUser] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: ''
    });

    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id]
        }
    });

    const dispatch = useDispatch();

    function handleSignUp(e) {
        e.preventDefault();
        dispatch(signup(user))
    };

    return (
        <div className="sign-up-container">
            <h1 className="sign-up-title">Sign Up</h1>
            <p className="sign-up-msg">It's fast and easy!</p>
            <form onSubmit={handleSignUp} className="sign-up-form">
                <input
                    type="text"
                    placeholder="First Name"
                    className="sign-up-input"
                    onChange={e => setUser(prevState => ({
                        ...prevState,
                        first_name: e.target.value
                    }))}/>
                <input
                    type="text"
                    placeholder="Last Name"
                    className="sign-up-input"
                    onChange={e => setUser(prevState => ({
                        ...prevState,
                        last_name: e.target.value
                    }))}/>
                <input
                    type="text"
                    placeholder="Email"
                    className="sign-up-input"
                    onChange={e => setUser(prevState => ({
                        ...prevState,
                        email: e.target.value
                    }))}/>
                <input
                    type="password"
                    placeholder="Password"
                    className="sign-up-input"
                    onChange={e => setUser(prevState => ({
                        ...prevState,
                        password: e.target.value
                    }))}/>
                <input type="submit" className="signup-btn" value="Sign Up"/>
            </form>
        </div>
    );
};