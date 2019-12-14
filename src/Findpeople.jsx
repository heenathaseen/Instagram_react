import React from 'react';
import './Findpeople.scss';
import profile from './profile.jpg';
import ananya from './ananya.png';
import jen from './Jennifer Lawrence.jpg';
import char from './Charlize Theron.jpg';
import dwa from './dwaynejohn.jpeg';
import rob from './robertdowney.jpg';
import tom from './tomhank.jpg';


const Discover = ({ propic, proname, followedby }) => (
  <div className="discover">
    <img src={propic} alt="" />
    <h6>{proname}</h6>
    <p>{followedby}</p>
    <button type="button">Follow</button>
  </div>
);
const Explore = ({ image }) => (
  <div className="exploregrid">
    <img src={image} alt="" />
  </div>
);

const Findpeople = () => (
  <div className="findpeople">
    <h5>Discover People</h5>
    <p className="see">See All</p>
    <div className="discoverpeople">


      <Discover
        propic={ananya}
        proname="Ria"
        followedby="Followed by nisharudru +......."
      />

      {' '}
      <Discover
        propic={profile}
        proname="Ananya Pande"
        followedby="Followed by nisharudru +......."
      />
      <Discover
        propic={jen}
        proname="Jennifer Lawrence"
        followedby="Followed by nisharudru +......."
      />
      <Discover
        propic={char}
        proname="Charlize Theron"
        followedby="Followed by nisharudru +......."
      />
      <Discover
        propic={dwa}
        proname="Dwaynejohn"
        followedby="Followed by nisharudru +......."
      />


    </div>
    <div className="explore">
      <p>Explore</p>
      <div className="ex">
        <Explore image={ananya} />
        <Explore image={char} />
        <Explore image={dwa} />
        <Explore image={jen} />
        <Explore image={rob} />
        <Explore image={tom} />
      </div>

    </div>
  </div>
);
export default Findpeople;
