import React from 'react';
import './Edit.scss';
import ananya from './ananya.png';
import Navigation from './Navigation';

class Edit extends React.Component {
  state = {
    name: '',
    username: '',
    website:'',
    bio:'',
    email:'',
    phoneno: '',
    gender:'',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
      
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const {name,username,website,bio,email,phoneno,gender}=this.setState;
    return (
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
            <input 
            className="in"
            type="text"
            placeholder="Ananya" 
            name="name"
            value={name}
            onChange={this.handleChange}/>
            <input className="in" type="text" placeholder="Ananya Pande" 
             name="username"
             value={username}
             onChange={this.handleChange}/>
            <input className="in" type="text" placeholder="" 
             name="website"
             value={website}
             onChange={this.handleChange}/>
            <textarea name="" id="" cols="30" rows="10" />
            <p className="p">Private Information</p>
            <input className="in" type="text" placeholder="ananya@gmail.com" 
             name="email"
             value={email}
             onChange={this.handleChange}/>
            <input className="in" type="text" placeholder="+91 9876543210" 
             name="phoneno"
             value={phoneno}
             onChange={this.handleChange}/>
            <input className="in" type="text" placeholder="Female" 
             name="gender"
             value={gender}
             onChange={this.handleChange}/>
            <br />
            <input type="checkbox" checked className="checkbox" />
            <h6>
    Include your account when recommending similar accounts peopple might want to follow
              <span> [?]</span>
            </h6>
            <button type="button" onClick={this.handleSubmit}>Submit</button>
            <p id="tem">Temporarily disable my account</p>


          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
