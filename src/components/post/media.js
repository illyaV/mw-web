import React from 'react';

import './post.css';

function PostMedia(props) {
  const {data} = props;

  return (
    <div className="post-media">
      {
        data.map(item => (
          <img src={item.image} alt={item.description} key={item.version}/>
        ))
      }
    </div>
  )
}

export default PostMedia