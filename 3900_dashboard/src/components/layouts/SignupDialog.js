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

class SignupDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirm: '',
      backdrop: true
    }
  }

  handleDialogClose(dispatch) {
    dispatch({type:"CLOSE_SIGNUP_DIALOG"})
  }

  handleSignup(dispatch) {
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    dispatch({type:"CLOSE_SIGNUP_DIALOG"})
    dispatch({type:"SIGNUP", payload: user});
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value})
  }


  render () {
    const {backdrop} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch, signup_dialog} = value
          return (
            <Dialog
              open={signup_dialog}
              onClose={this.handleDialogClose.bind(this, dispatch)}
              aria-labelledby="form-dialog-title"
              disableBackdropClick={backdrop}
            >
              <DialogTitle id="form-dialog-title">Join us</DialogTitle>
              <DialogContent>
                <TextField
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
                  required
                  margin="dense"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  onChange={this.onChange.bind(this)}
                />
                <TextField
                  required
                  margin="dense"
                  name="password_confirm"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  onChange={this.onChange.bind(this)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDialogClose.bind(this, dispatch)} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleSignup.bind(this, dispatch)} color="primary">
                  Register
                </Button>
              </DialogActions>
            </Dialog>
          )
        }}
      </Consumer>
    )
  }
}

export default SignupDialog;
