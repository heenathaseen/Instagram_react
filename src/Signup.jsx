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
    {text.map((m) => (<input type="text" placeholder={m.input} />))}

  </div>
);

const Signup = () => (
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
              },
              {
                input: 'Full Name',
              },
              {
                input: 'Username',
              },
              {
                input: 'Password',
              },
            ]}
            />
          </div>
          <button type="button"> Sign up</button>
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
            <span><Link to="login" style={{ textDecoration: 'none',color:'#3897f0' }}>Login</Link></span>
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
export default Signup;
