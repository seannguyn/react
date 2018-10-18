import React from 'react'
import Logo from '../../assets/place.png'
import Action from './Action'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const styles = theme => ({
  nav: {
    borderBottom: '1px #ccc solid',
    display:'flex',
    justifyContent: 'space-between',
  },
  box_1: {
    flex: 0.1,
    order: 1,
    margin: '20px',
    cursor: 'pointer',
  },
  box_2: {
    flex: 3,
    order: 2,
    margin: '10px',
  },
  box_3: {
    flex: 6,
    order: 3,
    margin: '10px',
    textAlign: 'right',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    display:'flex',
    width: '100%',
    height: '100%',
  },
  searchIcon: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
  },
})

class Home extends React.Component {



  render () {
    const {classes} = this.props;
    return (

      <div className={classNames({"container-fluid": true, [classes.nav]: true})}>
        <div className={classNames({[classes.box_1]: true})}>
          <img src={Logo} alt="My logo" height="42" width="42" />
        </div>

        <div className={classNames({[classes.box_2]: true})}>
          <div className={classes.search} style={{border:'2px #ccc solid'}}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              fullWidth
              classes={{
                input: classes.inputInput,
              }}

            />
          </div>
        </div>
        <div className={classNames({[classes.box_3]: true})}>
          <Action/>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home);

// className="container-fluid" style={style.nav}
