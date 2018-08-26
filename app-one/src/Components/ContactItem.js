import React, { Component } from 'react';

import {Consumer} from '../context';
import axios from 'axios';
import {Link} from 'react-router-dom'
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

  async handleDelete(id, dispatch) {
    // add try catch block because this is a fake REST API
    try {

      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({type:'DELETE_TAGET',payload:id})

    }
    catch (e) {
      dispatch({type:'DELETE_TAGET',payload:id})
    }


    console.log('clicked');
  }


  render() {

    const {showContact} = this.state;
    const {id} = this.props.contactDetail;
    return (

      <Consumer>
        {value => {
          const {dispatch} = value
          return (
            <div className="card card-body mb-3">
              <h4>
                {this.props.contactDetail.name} <i onClick={this.handleExpand.bind(this, this.props.contactDetail.id)} className="fas fa-sort-down" style={{cursor: 'pointer'}}/>

                <i   className="fas fa-times" style={{cursor:'pointer', float:'right',color:'red'}} onClick={this.handleDelete.bind(this, id, dispatch)}/>
                <Link to={`editContact/${id}`}>

                  <i   className="fas fa-pencil-alt" style={{cursor:'pointer', float:'right',color:'black', marginRight:'1rem'}}/>
                </Link>
              </h4>

              {showContact === true ?
                <ul className="list-group">
                <li className="list-group-item">Website   :{this.props.contactDetail.website} </li>
                <li className="list-group-item">Email :{this.props.contactDetail.email} </li>
              </ul>
            : null}

            </div>
          )
        }}

      </Consumer>

    );
  }
}

export default ContactItem;
