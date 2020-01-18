import React from 'react';

function PostsListItem(props) {
  const {data: {media: [firstMedia]}} = props;

  return (
    <div className="posts-list-item">
      <img src={firstMedia.image} alt={firstMedia.description}/>
    </div>
  )
}

export default PostsListItem;