import React, {Component} from 'react';

import './posts.css';

import postsApi from '../../api/posts'

import Spinner from '../common/spinner'
import Post from './post'

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: false
    }
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  async loadPosts() {
    this.setState({loading: true});

    const posts = await postsApi.getList();

    this.setState({loading: false, posts});
  }

  onEditPostClick = postId => {
    console.log('Edit post', postId)
  }

  onDeletePostClick = async postId => {
    await postsApi.delete(postId);

    this.setState(({posts}) => ({
      posts: posts.filter(({id}) => id !== postId)
    }))
  }

  renderPostsList() {
    const {posts} = this.state;

    return posts.map(post => (
      <Post
        key={post.id}
        {...post}
        onEditClick={this.onEditPostClick}
        onDeleteClick={this.onDeletePostClick}
      />))
  }

  render() {
    const {loading} = this.state;

    if (loading) {
      return <Spinner/>
    }

    return (
      <div className="posts">
        {
          this.renderPostsList()
        }
      </div>
    )
  }
}

export default Posts;