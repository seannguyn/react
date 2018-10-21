import React, { Component } from 'react';

import AppMain from './AppMain'
import {Provider} from './Context';
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {


  render() {

    return (
      <Provider>
        <Router>
          <AppMain />
        </Router>
      </Provider>
    );
  }
}

export default App;
