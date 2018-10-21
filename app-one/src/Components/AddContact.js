import React, { Component } from 'react';
import {Consumer} from '../context';
import uuid from 'uuid';
import TextInputGroup from './TextInputGroup'
import axios from 'axios';

class AddContact extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      website: '',
      email: '',
      error :{}
    }
  }

  onChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }

  async onSubmit(dispatch, e) {
    e.preventDefault();

    const {name, website, email} = this.state;

    console.log(this.state);
    const newContact ={
      name: name,
      website: website,
      email: email,
    }

    await axios.post('https://jsonplaceholder.typicode.com/users',newContact)
    
    dispatch({type:'ADD_TAGET', payload:newContact})


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

              <div className="card-header">Add Contact</div>

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
                  <input type="submit" className="btn btn-block btn-light" value="Add Contact"></input>
                </form>
              </div>

            </div>
          );
        }}
      </Consumer>


    )
  }
}

export default AddContact;
