import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import HomeContainer from './home/HomeContainer';
import AuthComponent from './auth/signUp/AuthComponent';
import LoginComponent from './auth/SignIn/LoginComponent';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={HomeContainer} />
                    <Route path='/home' component={HomeContainer} />
                    <Route path='/auth/register' component={AuthComponent} />
                    <Route path='/auth/login' component={LoginComponent} />
                    {/* Add all your remaining routes here, like /trending, /about, etc. */}
                </div>
            </Router>
        );
    }
}

export default App;