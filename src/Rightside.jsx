import React from 'react';
import './Rightside.scss';


const Rightside = ({ userpic, username, name }) => (
  <div className="rightside">
    <div className="user">
      <div><img src={userpic} alt="" /></div>
      <div>
        <h4>{username}</h4>
        <p>{name}</p>
      </div>
    </div>

  </div>
);
export default Rightside;
