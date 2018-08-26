import React, { Component } from 'react';
import ContactItem from './ContactItem.js'

class Contact extends Component {

  handleDelete(id) {
    console.log("this level",id);
    this.props.onDelete(id);
  }

  render() {
    let addressBook;
    if (this.props.contactList) {


      addressBook = this.props.contactList.map((indivContact) => {
        return (
          <ContactItem key={indivContact.name} contactDetail={indivContact} onDelete={this.handleDelete.bind(this)}/>
        );
      })

      console.log(this.props.contactList);
    }

    return (
      <div className="container">
        <br/>
        <br/>
        {addressBook}
      </div>
    );
  }
}

export default Contact;
