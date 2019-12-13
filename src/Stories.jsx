import React from 'react';
import './Stories.scss';
import profile from './profile.jpg';
import ananya from './ananya.png';

const Storygrid = ({ propic, proname, storytime }) => (
  <div className="storygrid">
    <img src={propic} alt="" />
    <h4>{proname}</h4>
    <p>{storytime}</p>
  </div>
);

const Stories = () => (
  <div className="stories">
    <div className="title">
      <div className="sto"><p>stories</p></div>
      <div><h5> Watch All</h5></div>
    </div>
    <div>
      <Storygrid
        propic={ananya}
        proname="Ria"
        storytime="1 hour ago"
      />
      <Storygrid
        propic={profile}
        proname="Ananya Pande"
        storytime="12 hour ago"
      />
    </div>
  </div>
);
export default Stories;
