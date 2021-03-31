import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

function SignUpForm() {
    const [user, setUser] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: ''
    });

    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id],
            errors: state.errors
        }
    });

    const dispatch = useDispatch();

    //Issue with logging in after sign up
    //Double check reqs and bootstrapping
    function handleSignUp(e) {
        e.preventDefault();
        dispatch(signup(user));
    };

    function renderErrors() {
        return (
            <ul>
                {state.errors.session.map((err, i) => (
                    <li key={`errror ${i}`}>{err}</li>
                ))}
            </ul>
        )
    }

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
                <div className="signup-errors">
                    { renderErrors() }
                </div>
                <input type="submit" className="signup-btn" value="Sign Up"/>
            </form>
        </div>
    );
};

export default withRouter(SignUpForm);