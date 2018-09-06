import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Timetable from './Timetable'
import Manage from './Manage'
import Friends from './Friends'
import Active from './Active'

class Content extends React.Component {
  render () {

    return (
      <div>
          <Switch>
            <Route exact path="/" component={Timetable}></Route>
            <Route exact path="/manage" component={Manage}></Route>
            <Route exact path="/friends" component={Friends}></Route>
            <Route exact path="/active" component={Active}></Route>
          </Switch>
      </div>

    )
  }
}

export default Content;
