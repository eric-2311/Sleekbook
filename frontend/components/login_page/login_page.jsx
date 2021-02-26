import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { signup, logout, login } from '../../actions/session_actions';

export default function LoginPage() {
    const [currentUser, setUser] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: ''
    });
    const user = useSelector(state => state.entities.users[state.session.id]);
    const dispatch = useDispatch(signup(currentUser));

    useEffect(() => {
        console.log(currentUser)
        console.log(user)
    });

    function handleSignUp(e) {
        e.preventDefault();
        dispatch(signup(currentUser));
    };

    function handleLogin(e) {
        e.preventDefault();
        dispatch(login(currentUser))
    }

    function handleLogout(e) {
        e.preventDefault();
        dispatch(logout())
    }

    if (window.currentUser) {
        return (
            <div>
                <h1>Welcome {window.currentUser.first_name}</h1>
                <button onClick={handleLogout}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Sign Up Form</h1>
                <form onSubmit={handleSignUp}>
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
                </form>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}>
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
                    <input type="submit" value="Log In" />
                </form>
            </div>
        );
    }
};