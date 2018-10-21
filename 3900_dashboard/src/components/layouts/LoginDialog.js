import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Consumer} from '../../Context';

const styles = theme => ({

});

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class LoginDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      backdrop: true,
      errorEmail: false,
      errorPassword: false,
    }
  }


  handleDialogClose(dispatch) {
    dispatch({type:"CLOSE_LOGIN_DIALOG"})
  }

  async handleLogin(dispatch,e) {
    e.preventDefault();
    const {email,password} = this.state;
    var flagError = false;
    if (emailRegex.test(String(email).toLowerCase()) === false) {
      this.setState({errorEmail:true},() => {console.log(this.state.errorEmail)})
      console.log("email invalid");
      flagError = true
    }
    if (password.length === 0) {
      this.setState({errorPassword:true})
      flagError = true
    }
    else if (password.length < 5) {
      this.setState({errorPassword:true})
      flagError = true
    }

    if (flagError === false) {

      const user = {
        email: this.state.email,
        password: this.state.password
      }
      dispatch({type:"CLOSE_LOGIN_DIALOG"})
      dispatch({type:"LOGIN", payload: user});
    }


  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value})

  }


  render () {
    const {backdrop} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch, login_dialog} = value
          return (
            <Dialog
              open={login_dialog}
              onClose={this.handleDialogClose.bind(this, dispatch)}
              aria-labelledby="form-dialog-title"
              disableBackdropClick={backdrop}
            >
            <form onSubmit={this.handleLogin.bind(this, dispatch)}>
              <DialogTitle id="form-dialog-title">Login</DialogTitle>
              <DialogContent>

                <TextField
                  error={this.state.errorEmail}
                  helperText={this.state.errorPassword === true ? "Enter valid email" : null}
                  required
                  autoFocus
                  margin="dense"
                  name="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                  onChange={this.onChange.bind(this)}
                />
                <TextField
                  error={this.state.errorPassword}
                  helperText={this.state.errorPassword === true ? "Enter password longer than 5 char" : null}
                  required
                  autoFocus
                  margin="dense"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={this.onChange.bind(this)}
                />

              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDialogClose.bind(this, dispatch)} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Log in
                </Button>
              </DialogActions>
              </form>
            </Dialog>
          )
        }}
      </Consumer>
    )
  }
}

export default LoginDialog;
