import React, { Component } from 'react';

import {Consumer} from '../context';
import uuid from 'uuid';
import TextInputGroup from './TextInputGroup'
import axios from 'axios';

class EditContact extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      website: '',
      email: '',
      error :{}
    }
  }

  async componentDidMount() {
    const {id} = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(res.data);
    this.setState({name: res.data.name, website: res.data.website, email: res.data.email})
  }

  onChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }

  async onSubmit(dispatch, e) {

    const {id} = this.props.match.params;
    e.preventDefault();

    const {name, website, email} = this.state;




    if (name === '' ) {
      this.setState({error:{name:"Name is required"}})
      return;
    }

    if (website === '' ) {
      this.setState({error:{website:"wesite is required"}})
      return;
    }
    if (email === '' ) {
      this.setState({error:{email:"Email is required"}})
      return;
    }

    const updateContact ={
      name: name,
      website: website,
      email: email,
    }

    console.log("WHAT IS ID BRO",id);
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact)

    dispatch({type:'EDIT_TAGET', payload:res.data})

    this.setState({
      name: '',
      website: '',
      email: '',
      error: {}
    })

    this.props.history.push("/")

  }


  render () {
    const {name, website, email} = this.state;
    return (
      <Consumer>
        {value =>{

          const {dispatch} = value;

          return (
            <div className="card-body mb-3">

              <div className="card-header">Edit Contact</div>

              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter a Name"
                    value={name}
                    onChange={this.onChange.bind(this)}
                    error={this.state.error.name}
                    />

                  <TextInputGroup
                    label="Website"
                    name="website"
                    placeholder="Enter a website"
                    value={website}
                    onChange={this.onChange.bind(this)}
                    error={this.state.error.age}
                    />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter an Email"
                    value={email}
                    onChange={this.onChange.bind(this)}
                    error={this.state.error.email}
                    />
                  <input type="submit" className="btn btn-block btn-light" value="Update Contact"></input>
                </form>
              </div>

            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
