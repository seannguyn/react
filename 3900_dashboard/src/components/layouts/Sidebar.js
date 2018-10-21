import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Items from './Items';

import {Consumer} from '../../Context';

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
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
  hide : {
    display: 'none'
  }
});

class Sidebar extends React.Component {

  state = {
    logged_in: false,
  };

  handleDrawerClose(dispatch) {
    this.setState({ open: false });
    dispatch({type: "CLOSE_SIDEBAR", payload: false})
  };

  render () {

    const { classes, theme } = this.props;
    const {logged_in} = this.state;
    return (
      <Consumer>

        {value => {
          const {dispatch} = value;
          const {sidebar_show} = value;
          return (
            <Drawer
              variant="permanent"
              classes={{
                paper: classNames(classes.drawerPaper, !sidebar_show && classes.drawerPaperClose ),
              }}
              open={sidebar_show}
            >
              <div className={classes.toolbar}>
                blah blah
              </div>
              <Divider />
                <Items />
              <Divider />

            </Drawer>
          )
        }}

      </Consumer>
    )

  }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
