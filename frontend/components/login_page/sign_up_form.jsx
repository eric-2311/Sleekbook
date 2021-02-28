import React, { useState } from 'react';

export default function SignUpForm() {
    const [user, setUser] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: ''
    })

    return (
        <div>
            <h1>Sign Up Form</h1>
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
    )
   
}