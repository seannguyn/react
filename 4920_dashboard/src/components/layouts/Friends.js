import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss/src/loadCSS';


const styles = theme => ({
layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
      display: 'flex',
    },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  avatar: {
    width: 90,
    height: 90,
    marginTop: '5px',
    marginBottom: '5px',
    marginLeft: '5px',
    marginRight: '5px',

  },
  button: {
    margin: theme.spacing.unit,
  },
  icon: {
    margin: theme.spacing.unit,
  },
});



const cards_people = [
  {
    id:1,
    name:"Sean Ng",
    mutual: "5",
    timetable: {},
    free: true,
  },
  {
    id:2,
    name:"Sean Y",
    mutual: "5",
    timetable: {},
    free: false,
  },
  {
    id:3,
    name:"Holly",
    mutual: "5",
    timetable: {},
    free: true,
  },
  {
    id:4,
    name:"Ben",
    mutual: "5",
    timetable: {},
    free: false,
  },
  {
    id:5,
    name:"Nam",
    mutual: "5",
    timetable: {},
    free: true,
  }
];

class Friends extends React.Component {

  constructor() {
    super();
    this.state = {
      cards: cards_people
    }
  }

  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  customFilter(p,search) {

    const value = search.toLowerCase();
    const name = p.name.toLowerCase();

    if (value.length <= 0) {
      return p
    } else if (name.indexOf(value) !== -1) {
      return p
    }
  }

  filterFriend(e) {
    console.log(e.target.name, e.target.value);
    if (e.target.value.length === 0) {
      this.setState({cards: cards_people})
    } else {
      var dis = cards_people.filter((p) => this.customFilter(p, e.target.value));
      this.setState({cards: dis})
      console.log(dis);
    }



  }

  render () {
    const { classes,theme } = this.props;
    const {cards} = this.state;
    return (
      <div>
        <TextField
          fullWidth
          label="Search Bar"
          name="search"
          type="text"
          id="search"
          onChange={this.filterFriend.bind(this)}
        />
        <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {cards.map(card => (
                <Grid item key={card.id} sm={6} md={4} lg={4}>
                  <Card className={classes.card}>

                    <Avatar
                        className={classNames(classes.avatar)}
                        color="inherit"
                      >TW</Avatar>

                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography variant="title">
                          {card.name}

                        </Typography>
                        <Typography theme={theme} variant="subheading" color="textSecondary">
                          {card.free === true ? <div><Icon className={classNames(classes.icon, 'fa fa-circle')} color="primary"/> free now</div>
                        : <div> <Icon className={classNames(classes.icon, 'fa fa-circle')} color="inherit"/> unavailable </div>}


                        </Typography>
                        <Button variant="contained" color="primary" className={classes.button}>
                          wob
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button}>
                          remove
                        </Button>
                      </CardContent>
                      <div className={classes.controls}>

                      </div>
                    </div>

                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Friends);
