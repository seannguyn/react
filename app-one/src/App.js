import React, { Component } from 'react';

import Contact from './Components/Contact.js'
import Header from './Components/Header.js';
import {Provider} from './context';
import AddContact from './Components/AddContact.js'
import About from './Components/About.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NotFound from './Components/NotFound.js'
import Test from './Components/Test.js'
import EditContact from './Components/EditContact.js'
class App extends Component {


  render() {

    return (
      <Provider>
        <Router>
        <div className="App">

          <Header title="Contact Manager"/>

          <div className="container">
            <Switch>
              <Route exact path="/" component={Contact}/>
              <Route exact path="/addContact" component={AddContact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/test" component={Test}/>
              <Route exact path="/editContact/:id" component={EditContact}/>
              <Route component={NotFound}/>

            </Switch>


          </div>

        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
