import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/PostActions';

class Posts extends React.Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  render () {
    const postItem = this.props.posts.map((post) => {
      return (
        <div key={post.id} className="card card-body mb-3">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      );
    })
    return(
      <div>
      {postItem}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
