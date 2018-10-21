import React from 'react'
import PropTypes from 'prop-types'
import {Consumer} from './Context';
import { withStyles } from '@material-ui/core/styles';

import Header from './components/layouts/Header'
import Signin from './components/layouts/Signin'

import Sidebar from './components/layouts/Sidebar'
import Main from './components/layouts/Main'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  }
});

class AppMain extends React.Component {

  render () {

    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const {logged_in} = value;
          return (
            <div className={classes.root}>
              <Header/>
              {logged_in === true ? <Sidebar/> : null}
              <Main/>


            </div>
          )
        }}
      </Consumer>

    )
  }
}

export default withStyles(styles, { withTheme: true })(AppMain);
