import React from 'react';
import './Editprofile.scss';
import Navigation from './Navigation';

const Title = ({ titles }) => (
  <>
    {titles.map((m) => (
      <h4>
        {m.title}
      </h4>
    ))}

  </>
);

const Edit = () => (
  <div>
      <Navigation/>
    <div>
      <div className="left">
        <img src="" alt="" />
        <h5>Name</h5>
        <h5 id="h51">UserName</h5>
        <h5 id="h52">Website</h5>
        <h6>Bio</h6>
        <h5 id="h53">Email</h5>
        <h5 id="h54">Phone Number</h5>
        <h5 id="h55">Gender</h5>
        <h5 id="h56">Similar Account Suggestions</h5>
      </div>
      <div className="right">
          <h3>Ananya Pande</h3>
          <p>Change Profile Photo</p>

      </div>
    </div>
  </div>
);
export default Edit;
