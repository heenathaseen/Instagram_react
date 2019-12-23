import React from 'react';
import './Suggestion.scss';
import profile from './profile.jpg';
import ananya from './ananya.png';
import {
  Link,
} from 'react-router-dom';

const Footers = () => (
  <div className="footers">
    <ul>
      <li>About us</li>
      <li>Support</li>
      <li>Press</li>
      <li>API</li>
      <li>Jobs</li>
      <li>Privacy</li>
      <li>Terms</li>
    </ul>
    <ul>
      <li>Directory</li>
      <li>profiles</li>
      <li>Hashtags</li>
      <li>LANGUAGE</li>
    </ul>
    <span>© 2019 INSTAGRAM</span>
  </div>
);

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
  <div>
    <div className="suggestion">

      <p>Suggestions For You</p>

      <Link to = "/explore/people/suggested/" style={{ textDecoration: 'none', color: 'black' }}><h6 className="see">See All</h6>
      </Link>
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
    <Footers />
  </div>

);
export default Suggestion;
