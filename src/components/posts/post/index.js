import React from 'react';
import PropTypes from 'prop-types'

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

    const {id, onEditClick} = this.props;

    onEditClick(id)
  }

  onDeleteClick = (event) => {
    event.stopPropagation();

    const {id, onDeleteClick} = this.props;

    onDeleteClick(id)
  }

  render() {
    const {data: {media: [firstMedia]}} = this.props;

    return (
      <div className="posts-list-item">
        <img src={firstMedia.image} alt={firstMedia.description}/>
        <div className="posts-controls">
          <Button label="Edit" onClick={this.onEditClick}/>
          <Button label="Delete" onClick={this.onDeleteClick}/>
        </div>
      </div>
    )
  }
}

export default PostsListItem;