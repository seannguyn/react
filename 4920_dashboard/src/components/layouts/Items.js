import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import GamepadIcon from '@material-ui/icons/Gamepad';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from 'react-router-dom';



const Items = (props) => {
  return (
    <List>
      <Link to="/">
        <ListItem button>
           <ListItemIcon>

              <DashboardIcon />

           </ListItemIcon>
           <ListItemText primary="Timetable" />
         </ListItem>
       </Link>
       <Link to="/manage">
         <ListItem button>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Manage" />
          </ListItem>
      </Link>
      <Link to="/friends">
        <ListItem button>
           <ListItemIcon>
             <PeopleIcon />
           </ListItemIcon>
           <ListItemText primary="Friends" />
         </ListItem>
       </Link>
       <Link to="/active">
         <ListItem button>
            <ListItemIcon>
              <GamepadIcon />
            </ListItemIcon>
            <ListItemText primary="Active" />
          </ListItem>
        </Link>
        <Link to="/explore">
         <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Manage" />
          </ListItem>
        </Link>
    </List>
  )
}

export default Items;
