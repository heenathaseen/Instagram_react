import React from 'react';
import './Rightside.scss';

const Storygrid = ({ propic, proname }) => (
  <div className="storygrid">
    <img src={propic} alt="" />
    <h4>{proname}</h4>
  </div>
);
const Rightside = ({ userpic, username, name }) => (
  <div className="rightside">
    <div className="user">
      <div><img src={userpic} alt="" /></div>
      <div>
        <h4>{username}</h4>
        <p>{name}</p>
      </div>
    </div>
    <div className="stories">
      <div className="title">
        <div className="sto">stories</div>
        <div>Watchall</div>
      </div>
      <div className="story" />
      <Storygrid />
    </div>

  </div>
);
export default Rightside;
