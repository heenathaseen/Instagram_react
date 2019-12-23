import React from 'react';
import './Post.scss';


const Post = ({
  postlist,
}) => (
  <>
    {postlist.map((p) => (
      <div className="post">
        <div className="header">
          <div className="pro-img"><img src={p.propic} alt="" /></div>
          <div><h4>{p.username}</h4></div>
          <div><i className="fas fa-ellipsis-h" /></div>
        </div>
        <img src={p.image} alt="" />
        <div className="icons">
          <div><i className="far fa-heart" /></div>
          <div><i className="far fa-comment" /></div>
          <div><i className="far fa-paper-plane" /></div>
          <div><i className="far fa-bookmark" /></div>
        </div>
        <div className="line">
          <div><h4>{p.username}</h4></div>
          <div><p>{p.statusline}</p></div>
        </div>
        <div className="comments">
          <p>
View all
            { p.no }
 comments
          </p>
          <div className="comment">
            <div>
              <h4>{p.cuser}</h4>
              <p>{p.ccomment}</p>
            </div>
            <i className="far fa-heart" />
          </div>
          <span>{p.time}</span>
        </div>
        <div className="addcomment">
          <p>Add Comment</p>
          <span>post</span>

        </div>

      </div>
    ))}

  </>
);
export default Post;
