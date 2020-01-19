import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Button from '../../common/button'

class PostsListItem extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    id: PropTypes.string,
    onEditClick: PropTypes.func,
    onDeleteClick: PropTypes.func
  }

  onEditClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const {id, onEditClick} = this.props;

    onEditClick(id)
  }

  onDeleteClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const {id, onDeleteClick} = this.props;

    onDeleteClick(id)
  }

  render() {
    const {data: {media: [firstMedia]}, id} = this.props;

    return (
      <Link className="posts-list-item" to={`posts/${id}`}>
        <img src={firstMedia.image} alt={firstMedia.description}/>
        <div className="controls">
          <Button label="Edit" onClick={this.onEditClick}/>
          <Button label="Delete" onClick={this.onDeleteClick}/>
        </div>
      </Link>
    )
  }
}

export default PostsListItem;