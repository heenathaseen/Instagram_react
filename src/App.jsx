import React from 'react';
import './App.scss';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';

import Main from './Main';
import Findpeople from './Findpeople';
import './Navigation.scss';
import Profile from './Profile';
import Signup from './Signup';
import Login from './Login';
import insta from './insta.png';


const Icons = ({ icon }) => (

  <i className={icon} />


);
const Navigation = () => (
  <div className="navigation">
    <div className="header">
      <div className="logo">
        <Link className="link" to="/home">
          {' '}
          <ul>
            <li>
              {' '}
              <i className="fab fa-instagram" />
            </li>
            <li>|</li>
            <li><img src={insta} alt="" /></li>
          </ul>
        </Link>


      </div>
      <div className="search">
        <input type="text" className="fas" placeholder="&#xf002; Search" />
      </div>
      <div className="icons">

        <Link className="link" to="/find"><Icons icon="far fa-compass" /></Link>


        <Icons icon="far fa-heart" />
        <Link className="link" to="profile">
          {' '}
          <Icons icon="far fa-user" />
        </Link>
      </div>
    </div>


  </div>
);
class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        {/* <Navigation /> */}

        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <Navigation />
          <Switch>
            <Route exact path="/home" component={Main} />
            <Route exact path="/find" component={Findpeople} />
            <Route exact path="/profile" component={Profile} />
          </Switch>


        </Switch>
      </BrowserRouter>

    );
  }
}


export default App;
