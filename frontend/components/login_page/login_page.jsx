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
    })

    // console.log(user)
    function updateEmail() {
        return e => setUser({ email: e.currentTarget.value });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const currentUser = Object.assign({}, user);
        dispatch(signup(currentUser))
    };

    return (
        <div>
            <h1>Sign Up Form</h1>
            <form onSubmit={() => handleSubmit}>
                <label>Email:
                    <input
                        type="text"
                        onChange={updateEmail(currentUser.email)}/>
                </label>
            </form>
        </div>
    )
}