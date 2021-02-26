import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
    })
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log(user)
        console.log(state)
    });

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
        dispatch(logout())
    }

    if (state.currentUser) {
        return (
            <div>
                <h1>Welcome {window.currentUser.first_name}</h1>
                <button onClick={handleLogout}>Sign Out</button>
            </div>
        )
        // return <Redirect to="/" />
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