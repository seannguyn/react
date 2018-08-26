import React from 'react'
import PropTypes from 'prop-types'

class Test extends React.Component {

  state={variable:'number_s'}

  componentWillMount() {
    this.setState({variable: 'number_2'},() => {
      console.log(this.state);
    })
    console.log('hello');
  }

  componentDidMount() {
    this.setState({variable: 'number_3'},() => {
      console.log(this.state);
    })
  }

  componentWillUpdate() {

  }

  componentDidUpdate() {

  }

  componentWillReceiveProps() {

  }

  // static getDerivedStateFromProps(nxtProps, prevState) {
  //   return null;
  // }

  render () {
    return (
      <div>
        <h1> Test Component {this.state.variable}</h1>
      </div>
    );
  }
}

export default Test;
