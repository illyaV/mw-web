import React, {Component} from 'react';
import {withRouter} from "react-router";

import './post.css';

import postsApi from '../../api/posts'

import Spinner from '../common/spinner'
import Media from './media'

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
      loading: true
    }
  }

  async componentDidMount() {
    await this.loadPost()
  }

  async loadPost() {
    const {match: {params: {id}}} = this.props;
    const post = await postsApi.get(id);

    this.setState({loading: false, post});
  }

  render() {
    const {loading, post} = this.state;

    if (loading) {
      return <Spinner/>
    }

    const {data: {media}} = post;

    return (
      <div className="post">
        <div className="post-description">{post.description}</div>
        <Media data={media}/>
      </div>
    )
  }
}

export default withRouter(Posts);