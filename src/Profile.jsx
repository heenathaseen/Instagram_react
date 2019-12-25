import React from 'react';
import './Profile.scss';
import {
  Switch, Route, Link,
} from 'react-router-dom';
import Navigation from './Navigation';

import profile from './profile.jpg';
import ananya from './ananya.png';
import jen from './Jennifer Lawrence.jpg';

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
import pp1 from './pp1.jpg';
import pp2 from './pp2.jpg';
import pp3 from './pp3.jpg';
import pp4 from './pp4.jpg';
import pp5 from './pp5.jpg';


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
      <Link to={i.link} style={{ textDecoration: 'none', color: 'black' }}>
        <div className="icon-grid">
          <img src={i.icon} alt="" />
          <p>{i.text}</p>
        </div>
      </Link>
    ))}

  </>


);

const Post = ({ photolist }) => (
  <>
    {photolist.map((p) => (

      <div className="photo-grid">

        <img src={p.photo} alt="" />

      </div>
    ))}

  </>

);
const Posts = () => (
  <div className="photo">
    <Post photolist={[{ photo: ananya },
      { photo: aa1 },
      { photo: aa2 },
      { photo: aa3 },
      { photo: aa4 },
      { photo: aa5 }]}
    />

  </div>
);

const Igtv = () => (
  <div className="igtv">
    <div className="igtv-grid">
      <img src={igtv} alt="" />
      <h1>Photos of you</h1>
      <p>When people tag you in photos, they'll appear here.</p>
    </div>


  </div>
);
const Save = ({ images }) => (
  <div className="exploregrid">
    {images.map((m) => (
      <div className="grid">
        <img src={m.image} alt="" />
        <div className="hide">
          <ul>
            <li>
              {' '}
              <i className="far fa-heart" />
            </li>
            <li>
              {' '}
              <h4>{m.nolikes}</h4>
            </li>

          </ul>


          <ul>
            <li>
              {' '}
              <i className="far fa-comment" />
            </li>
            <li>
              {' '}
              <h4>{m.nocomments}</h4>
            </li>

          </ul>


        </div>
      </div>
    ))}
  </div>
);
const Saved = () => (
  <div className="explore">

    <div className="ex">
      <Save images={[
        {
          image: pp4,
          nolikes: '1024k',
          nocomments: '500',
        },
        {
          image: pp1,
          nolikes: '1024k',
          nocomments: '500',
        },
        {
          image: pp2,
          nolikes: '1024k',
          nocomments: '500',
        },
        {
          image: pp3,
          nolikes: '1024k',
          nocomments: '500',
        },

        {
          image: pp5,
          nolikes: '1024k',
          nocomments: '500',
        },
        {
          image: kare,
          nolikes: '1024k',
          nocomments: '500',
        },

      ]}
      />

    </div>
  </div>
);
const Tagged = () => (
  <div className="igtv">
    <div className="igtv-grid">
      <img src={tag} alt="" />
      <h1>Upload a Video</h1>
      <p>Videos must be between 1 and 60 minutes long</p>
      <button type="button">Upload</button>
    </div>


  </div>
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
            link: '/profile',
            icon: grid,
            text: 'post',
          },
          {
            link: '/profile/igtv/',

            icon: igtv,
            text: 'igtv',
          },
          {
            link: '/profile/saved/',

            icon: book,
            text: 'Saved',
          },
          {
            link: '/profile/tagged/',

            icon: tag,
            text: 'tagged',
          }]}

          />

        </div>


        <Switch>
          <Route exact path="/profile" component={Posts} />
          <Route exact path="/profile/igtv" component={Igtv} />
          <Route exact path="/profile/saved" component={Saved} />
          <Route exact path="/profile/tagged/" component={Tagged} />
        </Switch>


      </div>
      <Footer />
    </div>


  </div>


);

export default Profile;
