import React from 'react';
import './Profile.scss';
import {
  Link,
} from 'react-router-dom';
import Navigation from './Navigation';

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
import aa1 from './aa1.jpeg';
import aa2 from './aa2.jpeg';
import aa3 from './aa3.jpeg';
import aa4 from './aa4.jpg';
import aa5 from './aa5.jpeg';
import kare from './kareenapop.jpg';
import kar from './kareenapp.jpeg';
import sha from './shahidpp.jpeg';
import fiveminpp from './fiveminpp.jpeg';



import Footer from './Footer';


const Status = ({ statuslist }) => (
  <>
    {statuslist.map((s) => (
      <div className="status-grid">
        <img src={s.image} alt="" />
        <h5>{s.text}</h5>
      </div>
    ))}

  </>


);
const Icons = ({ iconslist }) => (
  <>
    {iconslist.map((i) => (
      <div className="icon-grid">
        <img src={i.icon} alt="" />
        <p>{i.text}</p>
      </div>
    ))}

  </>


);
const Photo = ({ photolist }) => (
  <>
    {photolist.map((p) => (
      <div className="photo-grid">

        <img src={p.photo} alt="" />

      </div>
    ))}

  </>

);
const Profile = () => (
  <div>
    <Navigation />
    <div className="profile">
      <div className="pro">
        <img src={ananya} alt="" />
        <div className="details">
          <ul className="one">
            <li><h4>Ananya Pande</h4></li>
            <li><Link to="editprofile"><button type="button">Edit Profile</button></Link></li>
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
        <Status statuslist={[{
          image: jen,
          text: 'Role Model',
        },
        ]}

        />
      </div>
      <div className="gallery">
        <div className="icon">
          <Icons iconslist={[{
            icon: grid,
            text: 'post',
          },
          {
            icon: igtv,
            text: 'igtv',
          },
          {
            icon: book,
            text: 'Saved',
          },
          {
            icon: tag,
            text: 'tagged',
          }]}

          />

        </div>
        <div className="photo">
          <Photo photolist={[{ photo: ananya },
            { photo: aa1 },
            { photo: aa2 },
            { photo: aa3 },
            { photo: aa4 },
            { photo: aa5 }]}
          />

        </div>

      </div>

    </div>
  </div>


);

export default Profile;
