import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppMain from './AppMain'
import {Provider} from './Context';



class App extends Component {


  render() {

    return (
      <Provider>
        <AppMain />
      </Provider>
    );
  }
}

export default App;
