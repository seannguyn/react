import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state,action) => {
  switch(action.type) {

    case "TOGGLE_SIDEBAR":

      console.log(state);
      const{sidebar_show} = state;
      return {
        ...state,
        sidebar_show: !sidebar_show
      }

    case "LOGIN":
      console.log("authenticating", action.payload);
      return {
        ...state,
        logged_in: true,
      }

    case "SIGNUP":
      console.log("signup", action.payload);
      return {
        ...state,
        logged_in: true,

      }

    case "LOGOUT":
      console.log("here");
      return {
        ...state,
        logged_in: false,
        sidebar_show: false,
      }

    default:
      return state;
  }
}

export class Provider extends Component {

  constructor() {
    super();
    this.state = {
      sidebar_show: false,
      logged_in: true,
      controller:{
        timetable: true,
        account: false,
        friends: false,
        active: false
      },

      dispatch: (action) => {
        this.setState((state) => reducer(state,action))
      }

    };
  }



  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }

}


export const Consumer = Context.Consumer;
