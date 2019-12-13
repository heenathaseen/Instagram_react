import React from 'react';
import './Main.scss';
import Post from './Post';
import profile from './profile.jpg';
import ananya from './ananya.png';
import Rightside from './Rightside';
import Stories from './Stories';
import Suggestion from './Suggestion';

const Main = () => (
  <div className="main">
    <div className="submain">
      <div>

        <Post
          propic={profile}
          username="Ananya pande"
          image={ananya}
          statusline="Be a reason for Smile"
        />
      </div>
      <div>
        <Rightside
          userpic={profile}
          username="Ananya pande"
          name="anu"
        />
        <Stories />
        <Suggestion />
      </div>
    </div>

  </div>


);
export default Main;
