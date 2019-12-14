import React from 'react';
import './Profile.scss';
import profile from './profile.jpg';
import ananya from './ananya.png';
import jen from './Jennifer Lawrence.jpg';
import char from './Charlize Theron.jpg';
import dwa from './dwaynejohn.jpeg';
import rob from './robertdowney.jpg';
import tom from './tomhank.jpg';
import igtv from './igtv.png';
import grid from './grid.png';
import book from './bookmark.png';
import tag from './tag.jpeg';

const Status = ({ image, text }) => (
  <div className="status-grid">
    <img src={image} alt="" />
    <h5>{text}</h5>
  </div>

);
const Icons = ({ icon, text }) => (
  <div className="icon-grid">
    <img src={icon} alt="" />
    <p>{text}</p>
  </div>

);
const Photo = ({photo}) => (
  <div className="photo-grid">
    
    <img src={photo} alt="" />

  </div>
);
const Profile = () => (
  <div className="profile">
    <div className="pro">
      <img src={ananya} alt="" />
      <div className="details">
        <ul className="one">
          <li><h4>Ananya Pande</h4></li>
          <li><button type="button">Edit Profile</button></li>
          <li><i className="fas fa-cog" /></li>

        </ul>
        <ul className="two">
          <li>
            <h5>
12
              {' '}
              <span>posts</span>
            </h5>

          </li>
          <li>
            <h5>
12
              {' '}
              <span>followers</span>
            </h5>

          </li>
          <li>
            <h5>
12
              {' '}
              <span>following</span>
            </h5>

          </li>


        </ul>
        <h3>Ananya</h3>
        <p>actor in Bollywood</p>
        <p>Love to travel, listen music</p>
      </div>
    </div>
    <div className="status">
      <Status
        image={jen}
        text="Role Model"
      />
    </div>
    <div className="gallery">
      <div className="icon">
        <Icons
icon={grid}
         text="post" 
       />
        <Icons
icon={igtv}
          text="igtv" 
        />
        <Icons
icon={book}
          text="Saved" 
        />
        <Icons
icon={tag}
          text="tagged" 
        />
      </div>
      <div className="photo">
        <Photo photo={jen}/>
        <Photo photo={tom}/>
        <Photo photo={char}/>
        <Photo photo={dwa}/>
        <Photo photo={ananya}/>
        <Photo photo={rob}/>
      </div>

    </div>

  </div>

);

export default Profile;
