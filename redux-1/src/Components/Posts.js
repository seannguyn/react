import React from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends React.Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
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

    return (
      <div>
        <h1>Posts</h1>
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
