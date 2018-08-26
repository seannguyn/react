import React, { Component } from 'react';
import './App.css';
import AddPost from './Components/AddPost.js'
import About from './Components/About.js'
import AddTodo from './Components/AddTodo.js'
import Header from './Components/Header.js'
import {Provider} from 'react-redux';
import store from './store';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

          <div className="App">
            <Header/>

            <Switch>
              <Route exact path="/post" component={AddPost} ></Route>
              <Route exact path="/todo" component={AddTodo} ></Route>
              <Route exact path="/" component={About} ></Route>
            </Switch>



          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
