import React from 'react';
import './App.css';
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Index from './components/Index/index'
import { Router, Route } from "react-router-dom";
import history from './config/history'

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' component={Index} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signUp' component={SignUp} />
        </div>
      </Router>
    )
  }
}


export default App;
