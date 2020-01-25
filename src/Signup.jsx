import React from 'react';
import './Signup.scss';
import {
  Link,
} from 'react-router-dom';
import { NONAME } from 'dns';
import insta from './insta.png';
import phone from './phone.png';
import screen from './screen.jpg';
import gplay from './gplay.png';
import appstore from './appstore.png';


const Input = ({ text }) => (
  <div className="input">
    {text.map((m) => (<input 
    type="text" 
    placeholder={m.input} 
     name={m.name}
          value={m.value}
           onChange={m.onChange} />))}

  </div>
);
class Signup extends React.Component {
  state = {
    emailornum: '',
    fullname: '',
    username:'',
    password: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
      
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const{emailornum,fullname,username,password}=this.setState;
    return (
      <div className="signup-page">
        <div className="signup">
          <div className="signup-image">
            <img className="phone" src={phone} alt="" />
            <img className="screen" src={screen} alt="" />
          </div>
          <div>
            <div className="signup-block">
              <img src={insta} alt="" />
              <h4>Sign up to see photos and videos from your friends.</h4>
              <button type="button">
                <i className="fab fa-facebook-square" />
    Log in with Facebook
              </button>
              <div className="or">
                <div className="line" />
                <div className="orr">Or</div>
                <div className="line" />
              </div>
              <div>
                <Input text={[
                  {
                    input: 'Mobile Number or Email',
                    name:emailornum,
                    value:emailornum,
                    onChange:(this.handleChange),
                  },
                  {
                    input: 'Full Name',
                    name:fullname,
                    value:fullname,
                    onChange:(this.handleChange),

                  },
                  {
                    input: 'Username',
                    name:username,
                    value:username,
                    onChange:(this.handleChange),
                  },
                  {
                    input: 'Password',
                    name:password,
                    value:password,
                    onChange:(this.handleChange),
                  },
                ]}
                />
                <button type="button" onClick={this.handleSubmit}> Sign up</button>
              </div>
              
              <p>
    By signing up you agree to our
                {' '}
                <span>Terms</span>
    ,
                <span> Data Policy </span>
    and
                {' '}
                <span> Cookies Policy</span>
              </p>

            </div>
            <div className="login">
              <p>
    Have an account?
                {' '}
                <span><Link to="login" style={{ textDecoration: 'none', color: '#3897f0' }}>Login</Link></span>
              </p>
            </div>
            <p>Get the app.</p>
            <div className="getapp">

              <div><img src={gplay} alt="" /></div>
              <div><img src={appstore} alt="" /></div>
            </div>


          </div>

        </div>
      </div>

    );
  }
}

export default Signup;
