import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import LoginDialog from './LoginDialog'
import SignupDialog from './SignupDialog'

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
  transparent: {
    marginLeft: "50px"
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});


class Header extends React.Component {

  state = {
    anchorEl: null,
    open: false,
  };

  handleDrawerOpen(dispatch) {
    dispatch({
      type: "TOGGLE_SIDEBAR"
    })
  };

  handleMenu = event => {
   this.setState({ anchorEl: event.currentTarget });
 };

 handleClose = () => {
   this.setState({ anchorEl: null });
 };

 handleLogOut(dispatch) {
   dispatch({type:"LOGOUT"})
   this.handleClose();
 }


 handleDialogOpen(dispatch) {
   dispatch({type:"OPEN_LOGIN_DIALOG"})
 }

 handleDialogSignup(dispatch) {
   dispatch({type:"OPEN_SIGNUP_DIALOG"})
 }


  render () {

    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Consumer>
        {value => {

          const {dispatch, sidebar_show, logged_in} = value;

          return (
            <div>
            <AppBar
              position="absolute"
              className={classNames(classes.appBar, sidebar_show && classes.appBarShift)}
            >
              <Toolbar disableGutters={!sidebar_show}>


                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen.bind(this, dispatch)}
                  className={classNames(classes.menuButton, !logged_in && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>

                <Typography style={{flex:1}} className={classNames(!logged_in && classes.transparent)} variant="title" color="inherit" noWrap>
                  timeWob
                </Typography>
                <Button color="inherit">About us</Button>
                {logged_in === true ?
                  <div>
                <Avatar
                  className={classNames(classes.avatar)}
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >SN</Avatar>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogOut.bind(this,dispatch)} style={{color:'red'}}>Log out</MenuItem>
                </Menu>
                </div> :
                <div>
                <Button color="inherit" onClick={this.handleDialogSignup.bind(this, dispatch)}>Sign up</Button>
                <Button color="inherit" onClick={this.handleDialogOpen.bind(this, dispatch)}>Log in</Button>
                </div>}
              </Toolbar>
            </AppBar>

            <LoginDialog/>
            <SignupDialog/>

            </div>
          );

        }}
      </Consumer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Header);
