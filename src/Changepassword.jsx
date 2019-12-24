import React from 'react';
import './Changepassword.scss';
import ananya from './ananya.png';

const Changepassword = () => (
  <div className="edit">

    <div className="edit-grid">
      <div className="left">
        <img src={ananya} alt="" />
        <h5>Old Password</h5>
        <h5 id="one">New Password</h5>
        <h5 id="2">
Confirm New
          {' '}
          <br />
          {' '}
Password
        </h5>


      </div>
      <div className="right">
        <h3>Ananya Pande</h3>

        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
        <input type="text" placeholder="" />
         <br></br>
        <button type="button">Change Password</button>
        <br></br>
        <p>Forgot Password?</p>


      </div>
    </div>
  </div>
);
export default Changepassword;
