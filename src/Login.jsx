import React from 'react';
import './Login.scss';
import {
  Link,
} from 'react-router-dom';
import insta from './insta.png';
import gplay from './gplay.png';
import appstore from './appstore.png';


const Input = ({ text }) => (
  <div className="input">
    {text.map((m) => (<input type="text" placeholder={m.input} />))}

  </div>
);

const Login = () => (
  <div className="login">
    <div className="login-block">
      <div className="login-form">
        <img src={insta} alt="" />
        <Input text={[
          {
            input: 'Mobile Number or Email',
          },

          {
            input: 'Password',
          },
        ]}
        />
        <Link to="insta" style={{ textDecoration: 'none' }}><button type="button"> Log In</button></Link>
        <div className="or">
          <div className="line" />
          <div className="orr">Or</div>
          <div className="line" />
        </div>
        <h5>
          {' '}
          <i className="fab fa-facebook-square" />
Log In with Facebook
        </h5>
        <p>Forgot password?</p>

      </div>
      <div className="login">
        <h6>
Don't have an account?
          {' '}
          <span><Link to="signup" style={{ textDecoration: 'none', color: '#3897f0' }}>Signup</Link></span>
        </h6>
        <p>Get the app.</p>
        <div className="getapp">

          <div><img src={gplay} alt="" /></div>
          <div><img src={appstore} alt="" /></div>
        </div>
      </div>
    </div>


  </div>
);
export default Login;
