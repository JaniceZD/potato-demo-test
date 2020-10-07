import React from 'react';
import './App.css';
import {BackTop} from "antd"
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import {Router, Route} from "react-router-dom";
import history from './config/history'

class App extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <BackTop/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/signUp' component={SignUp}/>
                </div>
            </Router>
        )
    }
}


export default App;
