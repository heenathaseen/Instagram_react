import React from 'react';
import './Loginactivity.scss';
import {
  Switch, Route, Link,
} from 'react-router-dom';

const Map = () => (

  <div className="mapouter">
    <div className="gmap_canvas">
      <iframe
        width="568"
        height="246"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      />
    </div>
  </div>
);
const Mapgrid = () => (
  <div className="mapgrid">


    <Map />
    <div className="map">
      <h5>This Was Me</h5>
      <h5>This Wasnt Me</h5>

    </div>

  </div>
);
const Logged = () => (
  <div className="logged">
    <i className="fas fa-map-marker-alt" />
    <p> Vellore</p>
    <p className="active">
Active now
      <span> This linux</span>
    </p>
    <Link to="/editprofile/login_activity/"><i className="fas fa-angle-down" /></Link>
    <h6 />
  </div>
);
const Loginactivity = () => (
  <div className="loginactivity">
    <h2>Login Activity</h2>
    <h4>Was This You?</h4>
    <Mapgrid />

    <h3>Where you're Logged in</h3>
    <Logged />
    {/* <Switch>
      <Route exact path="/editprofile/login_activity/" component={Mapgrid} />
    </Switch> */}

  </div>
);

export default Loginactivity;
