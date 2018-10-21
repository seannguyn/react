import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import Signin from './Signin'

const styles = theme => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Main extends React.Component {
  render () {

    const {classes} = this.props

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Signin />
      </main>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Main);
