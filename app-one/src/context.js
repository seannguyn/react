import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import axios from 'axios';
const Context = React.createContext();

const reducer = (state,action) => {
  switch(action.type) {
    case 'DELETE_TAGET':

      console.log("hellllloooooo", state.contactList);

      return {

        contactList: state.contactList.filter((eachContact) => eachContact.id !== action.payload),

      }
    case 'ADD_TAGET':
      console.log("adding....",action.payload);
      return {
        contactList: [action.payload,...state.contactList]
      }
    case 'EDIT_TAGET':
      console.log("adding....",action.payload);
      return {
        ...state,
        contactList: state.contactList.map((eachContact) => eachContact.id === action.payload.id ? (eachContact = action.payload) : eachContact)
      }
      default:
        return state;
  }
}

export class Provider extends Component {

  constructor() {
    super();
    this.state = {
      contactList : [],

      dispatch: (action) => {
        this.setState((state) => reducer(state,action))
      }

    };
  }

  getUser() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      type: 'GET',
      dataType: 'json',
      cache: false,
      data: {param1: 'value1'},
      success: function (data) {
        this.setState({contactList:data}, function () {
          console.log(this.state.data);
        })

      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    })

  }

  async getUser_axios() {
    // axios then returns a promise
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    this.setState({contactList:res.data})
  }


  componentDidMount() {
    // this.getUser();
    this.getUser_axios();
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
