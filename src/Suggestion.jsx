import React from 'react';
import './Suggestion.scss';
import profile from './profile.jpg';
import ananya from './ananya.png';

const Suggestions = ({ propic, proname, followedby }) => (
  <div className="suggestions">
    <div>
      {' '}
      <img src={propic} alt="" />
      <h4>{proname}</h4>
      <p>{followedby}</p>

    </div>
    <div>
      <h6>Follow</h6>
    </div>

  </div>
);

const Suggestion = () => (
  <div className="suggestion">

    <p>Suggestions For You</p>

    <h6 className="see">See All</h6>
    <div>
      <Suggestions
        propic={ananya}
        proname="Ria"
        followedby="Followed by nisharudru +......."
      />
      <Suggestions
        propic={profile}
        proname="Ananya Pande"
        followedby="Followed by nisharudru +......."
      />

    </div>
  </div>
);
export default Suggestion;
