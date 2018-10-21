import React from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import Posts from './Posts'

class AddPost extends React.Component {

  constructor() {
    super();
    this.state = {
      title:'',
      body:'',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const id = 101;

    const post = {
      id: id,
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);
  }

  render () {

    const {title, body} = this.state;

    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit.bind(this)}>

          <div>
            <label>Title</label>
            <input onChange={this.onChange.bind(this)} name="title" type="text" placeholder="Enter title" value={title}/>
          </div>


          <div>
            <label>Body</label>
            <input onChange={this.onChange.bind(this)} name="body" type="text" placeholder="Enter Body" value={body}/>
          </div>

          <input type="submit" className="btn btn-primary"/>
        </form>

        <hr/>
        <Posts/>
      </div>
    );

  }
}

export default connect(null, { createPost })(AddPost);
