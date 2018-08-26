import React, { Component } from 'react';
import ContactItem from './ContactItem.js'
import {Consumer} from '../context';


class Contact extends Component {

  handleDelete(id) {
    console.log("this level",id);
  }

  render() {

    return (
      <Consumer>
        {value => {
          const {contactList} = value;
          return (
            <div className="container mb-2">

              {contactList.map( contact => (<ContactItem key={contact.name} contactDetail={contact} />))}

            </div>
          );
        }}
      </Consumer>
    );

    // let addressBook;
    // if (this.props.contactList) {
    //
    //
    //   addressBook = this.props.contactList.map((indivContact) => {
    //     return (
    //       <ContactItem key={indivContact.name} contactDetail={indivContact} onDelete={this.handleDelete.bind(this)}/>
    //     );
    //   })
    //
    //   console.log(this.props.contactList);
    // }
    //
    // return (
    //   <div className="container">
    //     <br/>
    //     <br/>
    //     {addressBook}
    //   </div>
    // );
  }
}

export default Contact;
