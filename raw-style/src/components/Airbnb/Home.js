import React from 'react'
import Logo from '../../assets/place.png'
import Action from './Action'

const style = {
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
    flex: 4,
    order: 2,
    margin: '10px',
  },
  box_3: {
    flex: 6,
    order: 3,
    margin: '10px',
    textAlign: 'right',
  }
}

class Home extends React.Component {
  render () {
    return (
      <div className="container-fluid" style={style.nav}>
        <div style={style.box_1}>
          <img src={Logo} alt="My logo" height="42" width="42" />
        </div>
        <div style={style.box_2}>
          <h3>Box Two</h3>
        </div>
        <div style={style.box_3}>
          <Action/>
        </div>
      </div>
    )
  }
}

export default Home;
