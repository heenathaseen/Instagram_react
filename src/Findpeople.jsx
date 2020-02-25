import React from 'react';
import './Findpeople.scss';
import {
  Link,
} from 'react-router-dom';


import profile from './profile.jpg';
import ananya from './ananya.png';

import pp1 from './pp1.jpg';
import pp2 from './pp2.jpg';
import pp3 from './pp3.jpg';
import pp4 from './pp4.jpg';
import pp5 from './pp5.jpg';
import kare from './kareenapop.jpg';
import kar from './kareenapp.jpeg';
import sha from './shahidpp.jpeg';
import fiveminpp from './fiveminpp.jpeg';

import Navigation from './Navigation';

import Footer from './Footer';

const Discover = ({ details }) => (
  <>
    {details.map((d) => (
      <div className="discover">
        <img src={d.propic} alt="" />
        <h6>{d.proname}</h6>
        <p>{d.followedby}</p>
        <button type="button">Follow</button>
      </div>
    ))}

  </>
);

const Explore = ({ images }) => (
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

const Findpeople = () => (
  <div>
    <Navigation />
    <div className="findpeople">
      <h5>Discover People</h5>
      <Link to = "/explore/people/suggested/" style={{ textDecoration: 'none', color: 'black' }}><p className="see">See All</p></Link> 
      <div className="discoverpeople">


        <Discover details={[
          {
            propic: ananya,
            proname: 'Ria',
            followedby: 'Followed by nisharudru +.......',
          },
          {
            propic: profile,
            proname: 'Ananya Pande',
            followedby: 'Followed by nisharudru +.......',
          },
          {
            propic: fiveminpp,
            proname: 'Five_min_crafts',
            followedby: 'Followed by nisharudru +.......',
          },
          {
            propic: kar,
            proname: 'TherealKareena',
            followedby: 'Followed by nisharudru +.......',
          },
          {
            propic: sha,
            proname: 'Dwaynejohn',
            followedby: 'Followed by nisharudru +.......',
          },
        ]}


        />


      </div>
      <div className="explore">
        <p>Explore</p>
        <div className="ex">
          <Explore images={[
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
        <Footer />
      </div>
    </div>
  </div>

);
export default Findpeople;
