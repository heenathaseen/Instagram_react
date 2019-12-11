import React from 'react';
import './Post.scss';


const Post = ({
  propic, username, image, statusline,
}) => (
  <div className="post">
    <div className="header">
      <div className="pro-img"><img src={propic} alt="" /></div>
      <div><h4>{username}</h4></div>
      <div><i className="fas fa-ellipsis-h" /></div>
    </div>
    <img src={image} alt="" />
    <div className="icons">
      <div><i className="far fa-heart" /></div>
      <div><i className="far fa-comment" /></div>
      <div><i className="far fa-bookmark" /></div>
    </div>
    <div className="line">
      <div><h4>{username}</h4></div>
      <div><p>{statusline}</p></div>
    </div>
    <div className="addcomment">
      <input type="text" placeholder="Add comment...." />
    </div>

  </div>
);
export default Post;
