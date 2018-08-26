import React, { Component } from 'react';


class ContactItem extends Component {

  constructor() {
    super()
    this.state = {
      showContact:false,
    }
  }

  handleExpand(id) {
    console.log("expand ",id);
    this.setState({showContact:!this.state.showContact},()=>{
      console.log(this.state.showContact);
    })
  }

  // ARROW FUNCTION, DONT NEED .bind(this)
  // handleExpand = (e) => {
  //   console.log("expand");
  // console.log(e.target);
  // }

  handleDelete(id) {
    console.log('delete');
    this.props.onDelete(id)
  }

  render() {
    const {showContact} = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {this.props.contactDetail.name} <i onClick={this.handleExpand.bind(this, this.props.contactDetail.id)} className="fas fa-sort-down" style={{cursor: 'pointer'}}/>
        <i onClick={this.handleDelete.bind(this, this.props.contactDetail.id)} className="fa fa-times" style={{cursor:'pointer', float:'right',color:'red'}}/>
        </h4>

        {showContact === true ?
          <ul className="list-group">
          <li className="list-group-item">Age   :{this.props.contactDetail.age} </li>
          <li className="list-group-item">Email :{this.props.contactDetail.email} </li>
        </ul>
      : null}

      </div>
    );
  }
}

export default ContactItem;
