import React from 'react';
import './Edit.scss';
import ananya from './ananya.png';
import Navigation from './Navigation';


const Edit = () => (
  <div className="edit">

    <div className="edit-grid">
      <div className="left">
        <img src={ananya} alt="" />
        <h5>Name</h5>
        <h5 id="one">UserName</h5>
        <h5 id="2">Website</h5>
        <h4>Bio</h4>
        <h5 id="3">Email</h5>
        <h5 id="4">Phone Number</h5>
        <h5 id="5">Gender</h5>
        <h5 id="6">
Similar Account
          <br />
          {' '}
Suggestions
        </h5>
      </div>
      <div className="right">
        <h3>Ananya Pande</h3>
        <p className="prof">Change Profile Photo</p>
        <input className="in" type="text" placeholder="Ananya" />
        <input className="in" type="text" placeholder="Ananya Pande" />
        <input className="in" type="text" placeholder="" />
        <textarea name="" id="" cols="30" rows="10" />
        <p className="p">Private Information</p>
        <input className="in" type="text" placeholder="ananya@gmail.com" />
        <input className="in" type="text" placeholder="+91 9876543210" />
        <input className="in" type="text" placeholder="Female" />
        <br />
        <input type="checkbox" checked className="checkbox" />
        <h6>
Include your account when recommending similar accounts peopple might want to follow
          <span> [?]</span>
        </h6>
        <button type="button">Submit</button>
        <p id="tem">Temporarily disable my account</p>


      </div>
    </div>
  </div>
);
export default Edit;
