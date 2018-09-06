import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import {Consumer} from '../../Context';


const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  typo: {
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirm: '',
      Signin_form: true,
      error: {},
      error_bool: false
    }
  }

  errorCheck() {
    const {password,password_confirm,Signin_form} = this.state;
    if (password.length === 0) {
      this.setState({error:{password:'please enter password'}, error_bool:true})
      return true;
    }
    else if (password.length < 5) {
      this.setState({error:{password:'password too short (>5)'}, error_bool:true})
      return true;
    }
    if (Signin_form === false && password !== password_confirm) {
      this.setState({error:{password:'password dont match'}, error_bool:true})
      return true;
    }
  }

  onChange(e) {
    console.log(e.target.name, e.target.value);
    this.setState({[e.target.name] : e.target.value})
  }

  toggle() {

    this.setState({
      Signin_form: !this.state.Signin_form,
      error: {},
      error_bool: false,
    })
  }

  Login(dispatch, e) {
    e.preventDefault();
    if (this.errorCheck()) return;

    if (this.state.Signin_form === true) {

      console.log("here signin",this.state.email, this.state.password);
      const user = {
        email: this.state.email,
        password: this.state.password
      }
      dispatch({type:"LOGIN", payload: user});

    } else {
      const user = {
        email: this.state.email,
        password: this.state.password
      }
      dispatch({type:"SIGNUP", payload: user});
    }

  }

  render() {
    const { classes } = this.props;
    const {Signin_form} = this.state;
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <React.Fragment>
              <CssBaseline />
              <main className={classes.layout}>
                <Paper className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockIcon />
                  </Avatar>
                  <Typography variant="headline">Authentication</Typography>
                  <form className={classes.form} onSubmit={this.Login.bind(this, dispatch)}>
                    {Signin_form === true ?
                      <div>
                      <FormControl margin="normal" required fullWidth>
                        <TextField
                          label="Email Address"
                          autoFocus
                          onChange={this.onChange.bind(this)}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                        />
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                        <TextField
                          error={this.state.error_bool}
                          helperText={this.state.error_bool === true ? this.state.error.password : null}
                          label="Password"
                          onChange={this.onChange.bind(this)}
                          name="password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        fullWidth
                        variant="raised"
                        color="primary"
                        className={classes.submit}
                      >
                        Sign in
                      </Button>
                      <Divider />
                      <Typography className={classes.typo}>Don't have an account?
                        <Button variant="contained" color="secondary" className={classes.button} onClick={this.toggle.bind(this)}>
                          Sign up
                        </Button>
                      </Typography>

                    </div>
                      :
                      <div>
                      <FormControl margin="normal" required fullWidth>
                        <TextField
                          label="Email Address"
                          autoFocus
                          onChange={this.onChange.bind(this)}
                          id="email"
                          name="email"
                          autoComplete="email"
                        />
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                        <TextField
                          error={this.state.error_bool}
                          helperText={this.state.error_bool === true ? this.state.error.password : null}
                          label="Password"
                          onChange={this.onChange.bind(this)}
                          name="password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                        />
                      </FormControl>
                      <FormControl margin="normal" required fullWidth>
                        <TextField
                          error={this.state.error_bool}
                          helperText={this.state.error_bool === true ? this.state.error.password : null}
                          label="Confirm Password"
                          onChange={this.onChange.bind(this)}
                          name="password_confirm"
                          type="password"
                          id="password_confirm"
                          autoComplete="current-password"
                        />
                      </FormControl>
                      <Button
                        type="submit"
                        fullWidth
                        variant="raised"
                        color="secondary"
                        className={classes.submit}
                      >
                        Sign up
                      </Button>
                      <Typography className={classes.typo}>Have an account?
                        <Button variant="contained" color="primary" className={classes.button} onClick={this.toggle.bind(this)}>
                          Sign in
                        </Button>
                      </Typography>
                    </div>
                    }


                  </form>
                </Paper>
              </main>
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }

}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
