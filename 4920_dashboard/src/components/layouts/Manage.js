import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
});

class Manage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  changeTab(event, value) {
    this.setState({ value });
  };

  switchIndex(index){
    this.setState({ value: index });
  };

  render () {
    const { theme } = this.props;
    console.log(theme);
    const {value} = this.state;
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.changeTab.bind(this)}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Account" />
            <Tab label="Calendar" />
            <Tab label="Notifications" />
            <Tab label="Find Friends" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.switchIndex.bind(this)}
        >

          <TabContainer dir={theme.direction}>Account</TabContainer>
          <TabContainer dir={theme.direction}>Calendar</TabContainer>
          <TabContainer dir={theme.direction}>Notifications</TabContainer>
          <TabContainer dir={theme.direction}>Find Friends</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

Manage.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Manage);
