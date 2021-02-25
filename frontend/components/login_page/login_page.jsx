import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { signup } from '../../actions/session_actions';

export default function LoginPage() {
    const [currentUser, setUser] = useState({
        email: '',
        password: ''
    });
    const user = useSelector(state => state.entities.users[state.session.id]);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(currentUser)
    });

    function handleSubmit(e) {
        e.preventDefault();

        const currentUser = Object.assign({}, currentUser);
        dispatch(signup(currentUser))
    };

    return (
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={() => handleSubmit}>
                <label>Email:
                    <input
                        type="text"
                        onChange={e => setUser({ email: e.target.value })}/>
                </label>
            </form>
        </div>
    );
};