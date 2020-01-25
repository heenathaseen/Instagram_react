import React from 'react';
import './Changepassword.scss';
import ananya from './ananya.png';

class Changepassword extends React.Component {
  state = {
    oldpassword: '',
    newpassword: '',
    confirmpassword: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
      
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const {oldpassword,newpassword,confirmpassword}=this.setState;
    return (
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

            <input type="text" placeholder=""
             name="oldpassword"
             
             value={oldpassword}
             onChange={this.handleChange} 
             />
            <input type="text" placeholder="" 
             name="newpassword"
             value={newpassword}
             onChange={this.handleChange}
            />
            <input type="text" placeholder="" 
             name="confirmpassword"
             value={confirmpassword}
             onChange={this.handleChange}/>
            <br />
            <button type="button" onClick={this.handleSubmit}>Change Password</button>
            <br />
            <p>Forgot Password?</p>


          </div>
        </div>
      </div>
    );
  }
}
export default Changepassword;
