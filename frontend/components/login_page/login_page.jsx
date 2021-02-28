import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup, logout, login } from '../../actions/session_actions';

export default function LoginPage() {
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
        dispatch(signup(user));
    };

    function handleLogin(e) {
        e.preventDefault();
        dispatch(login(user))
    }

    function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
    }

    if (state.currentUser) {
        return (
            <div>
                <h1>Welcome {state.currentUser.first_name}</h1>
                <button onClick={handleLogout}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div className="login-page-container">
                <div className="login-title-container">
                    <h1 className="login-title">sleekbook</h1>
                </div>
                <div>
                    <form className="sign-in-form" onSubmit={handleLogin}>
                            <input 
                                type="text"
                                className="sign-in-input"
                                placeholder="Email"
                                onChange={e => setUser(prevState => ({
                                    ...prevState,
                                    email: e.target.value
                                }))}/>
                            <input
                                type="password"
                                className="sign-in-input"
                                placeholder="Password"
                                onChange={e => setUser(prevState => ({
                                    ...prevState,
                                    password: e.target.value
                                }))}/>
                        <input className="sign-in-btn" type="submit" value="Log In" />
                    </form>
                </div>
                {/* <h1>Sign Up Form</h1> */}
                {/* <form onSubmit={handleSignUp}>
                    <label>First Name:
                        <input
                            type="text"
                            onChange={e => setUser(prevState => ({
                                ...prevState,
                                first_name: e.target.value
                            }))}/>
                    </label>
                    <label>Last Name:
                        <input
                            type="text"
                            onChange={e => setUser(prevState => ({
                                ...prevState,
                                last_name: e.target.value
                            }))}/>
                    </label>
                    <label>Email:
                        <input
                            type="text"
                            onChange={e => setUser(prevState => ({
                                ...prevState,
                                email: e.target.value
                            }))}/>
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            onChange={e => setUser(prevState => ({
                                ...prevState,
                                password: e.target.value
                            }))}/>
                    </label>
                    <input type="submit" value="Sign Up"/>
                </form> */}
            </div>
        );
    }
};