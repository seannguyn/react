import React, { Component } from 'react';

import Contact from './Components/Contact.js'
import Header from './Components/Header.js';
import uuid from 'uuid'

class App extends Component {

  constructor() {
    super();
    this.state = {
      contactList : [],
    }
  }

  componentWillMount() {
    this.setState({
      contactList : [
        {
          id: uuid.v4(),
          name: 'Sean',
          age: '22',
          email: 'sean@gmail.com'
        },
        {
          id: uuid.v4(),
          name: 'Cece',
          age: '20',
          email: 'cece@gmail.com'
        },
        {
          id: uuid.v4(),
          name: 'Bum',
          age: '2',
          email: 'bum@gmail.com'
        },
      ]
    })
  }

  handleDelete(id) {
    console.log("App root",id);
    let contacts = this.state.contactList;

    let index = contacts.findIndex(x => x.id === id)
    contacts.splice(index,1);

    // contacts = contacts.filter((contact) => contact.id !== id)

    this.setState({contactList:contacts})

  }

  render() {

    return (
      <div className="App">

        <Header title="Contact Manager"/>

          <Contact onDelete={this.handleDelete.bind(this)} contactList={this.state.contactList}/>

      </div>
    );
  }
}

export default App;
