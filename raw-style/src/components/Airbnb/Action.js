import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  hover: {
    margin: '20px',
    borderTop:'2px orange solid',
  },
  nonHover: {
    margin: '20px',
    borderTop: '2px solid white'
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'orange',
  },
  avatar: {
    margin: 10,
  },
})

class Action extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    }
  }

  handleMouseHover(heading) {
    this.setState(this.toggleHoverState(heading));
  };

  toggleHoverState(heading) {
    return {
      isHovering: heading
    };
  }

  render () {
    const {classes} = this.props;
    return (
      <div style={{display: 'flex', justifyContent:'flex-end', cursor: 'pointer'}}>
        <h3     onMouseEnter={this.handleMouseHover.bind(this,1)} onMouseLeave={this.handleMouseHover.bind(this,-1)} className={this.state.isHovering === 1 ? classes.hover : classes.nonHover}>Add Listing</h3>
        <h3     onMouseEnter={this.handleMouseHover.bind(this,2)} onMouseLeave={this.handleMouseHover.bind(this,-1)} className={this.state.isHovering === 2 ? classes.hover : classes.nonHover}>Host</h3>
        <h3     onMouseEnter={this.handleMouseHover.bind(this,3)} onMouseLeave={this.handleMouseHover.bind(this,-1)} className={this.state.isHovering === 3 ? classes.hover : classes.nonHover}>Trips</h3>
        <h3     onMouseEnter={this.handleMouseHover.bind(this,4)} onMouseLeave={this.handleMouseHover.bind(this,-1)} className={this.state.isHovering === 4 ? classes.hover : classes.nonHover}>Messages</h3>
        <h3     onMouseEnter={this.handleMouseHover.bind(this,5)} onMouseLeave={this.handleMouseHover.bind(this,-1)} className={this.state.isHovering === 5 ? classes.hover : classes.nonHover}>Saved</h3>
        <h3     onMouseEnter={this.handleMouseHover.bind(this,6)} onMouseLeave={this.handleMouseHover.bind(this,-1)} className={this.state.isHovering === 6 ? classes.hover : classes.nonHover}>Help</h3>
        <Avatar onMouseEnter={this.handleMouseHover.bind(this,7)} onMouseLeave={this.handleMouseHover.bind(this,-1)} className={this.state.isHovering === 7 ? classes.orangeAvatar : classes.avatar}>N</Avatar>
      </div>
    )
  }
}

export default withStyles(styles)(Action);
