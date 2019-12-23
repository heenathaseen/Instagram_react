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
import Editprofile from './Editprofile';
import Suggested from './Suggested';


class App extends React.Component {
  render() {
    return (

      <BrowserRouter>


        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />


          <Route exact path="/insta" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/explore/" component={Findpeople} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editprofile" component={Editprofile} />
          <Route exact path="/explore/people/suggested/" component={Suggested} />


        </Switch>
      </BrowserRouter>

    );
  }
}


export default App;
