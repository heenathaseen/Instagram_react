import React from 'react';
import './Navigation.scss';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import insta from './insta.png';

const Icons = ({ icon }) => (

  <i className={icon} />


);
const Navigation = () => (
  <div className="navigation">
    <div className="header">
      <div className="logo">
        <Link className="link" to="/home">
          {' '}
          <ul>
            <li>
              {' '}
              <i className="fab fa-instagram" />
            </li>
            <li>|</li>
            <li><img src={insta} alt="" /></li>
          </ul>
        </Link>


      </div>
      <div className="search">
        <input type="text" className="fas" placeholder="&#xf002; Search" />
      </div>
      <div className="icons">

        <Link className="link" to="/explore/"><Icons icon="far fa-compass" /></Link>


        <Icons icon="far fa-heart" />
        <Link className="link" to="/profile">
          {' '}
          <Icons icon="far fa-user" />
        </Link>
      </div>
    </div>


  </div>
);
export default Navigation;
