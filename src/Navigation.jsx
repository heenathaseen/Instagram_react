import React from 'react';
import './Navigation.scss';

import Findpeople from './Findpeople';

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

        <Link to="/Findpeople"><Icons icon="far fa-compass" /></Link>


        <Icons icon="far fa-heart" />
        <Icons icon="far fa-user" />
      </div>
    </div>


  </div>
);
export default Navigation;
