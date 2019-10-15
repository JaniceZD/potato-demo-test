import React from 'react';
import './App.css';
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
// import Index from './components/Index/index'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/'>
            Hi!
          </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signUp' component={SignUp} />
        </div>
      </Router>
    )
  }
}


export default App;
