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

  render() {
    const {posts, loading} = this.state;

    if (loading) {
      return <Spinner/>
    }

    return (
      <div className="posts">
        {
          posts.slice(0, 10).map(post => (
            <Post
              key={post.id}
              {...post}
            />
          ))
        }
      </div>
    )
  }
}

export default Posts;