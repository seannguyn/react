import React, { Component } from 'react';
import FlexBox from './components/FlexBox/FlexBox'
import Home from './components/Airbnb/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/flexbox" component={FlexBox}/>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
