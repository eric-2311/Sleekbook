import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPage from './login_page/login_page';
import ProfilePage from './profile_page/profile_page';
import Modal from './login_page/modal';

const App = () => (
    <div>
        <Modal/>
        <header></header>
        <main>
            <AuthRoute exact path="/" component={LoginPage}/>
            <ProtectedRoute exact path="/profile" component={ProfilePage} />
        </main>
        <footer></footer>
    </div>
)

export default App;