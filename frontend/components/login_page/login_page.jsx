import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    login,  
    clearSessionErrors
} from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

function LoginPage() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    }); 

    const state = useSelector(state => {
        return {
            currentUser: state.entities.users[state.session.id],
            errors: state.errors
        }
    });

    useEffect(() => {
        dispatch(clearSessionErrors())
    }, [])

    const dispatch = useDispatch();

    function handleDemo(e) {
        e.preventDefault();
        dispatch(login({
            email: 'demo@mail.com',
            password: 'demopassword'
        }));
    };

    function handleLogin(e) {
        e.preventDefault();
        dispatch(login(user));
    };

    function renderErrors() {
        return (
            <ul>
                {state.errors.session.map((err, i) => (
                    <li key={`error ${i}`}>{err}</li>
                ))}
            </ul>
        )
    };

    return (
        <div className="login-page-container">
            <div className="login-title-container">
                <h1 className="login-title">sleekbook</h1>
                <p className="demo-msg">First time? Try our demo!</p>
                <div 
                    className="demo-sign-in"
                    onClick={handleDemo}>
                    <img 
                        src={window.demoPic} 
                        className="demo-login"/>
                    <p className="demo-msg">Sign in as Charlie Brown</p>
                </div>
            </div>
            <div className="login-errors">
                { renderErrors() }
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
                    <input 
                        className="create-btn" 
                        type="button" 
                        value="Create New Account"
                        onClick={() => dispatch(openModal("signup"))} />
                </form>
            </div>
        </div>
    );
};

export default withRouter(LoginPage);