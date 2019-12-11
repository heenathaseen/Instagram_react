import React from 'react';
import './Navigation.scss';

const Icons = ({ icon }) => (

  <i className={icon} />


);
const Navigation = () => (
  <div className="navigation">
    <div className="header">
      <div className="logo">
        <ul>
          <li>
            {' '}
            <i className="fab fa-instagram" />
          </li>
          <li>|</li>
          <li>instagram</li>
        </ul>


      </div>
      <div className="search">
        <input type="text" className="fas" placeholder="&#xf002; Search" />
      </div>
      <div className="icons">
        <Icons icon="far fa-compass" />
        <Icons icon="far fa-heart" />
        <Icons icon="far fa-user" />
      </div>
    </div>


  </div>
);
export default Navigation;
