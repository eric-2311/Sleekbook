import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPage from './login_page/login_page';
import ProfilePage from './profile_page/profile_page';
import Modal from './login_page/modal';

const App = () => (
    <div>
        <Modal/>
        <header></header>
        <AuthRoute exact path="/" component={LoginPage}/>
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
    </div>
)

export default App;