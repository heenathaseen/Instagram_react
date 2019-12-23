import React from 'react';
import './Editprofile.scss';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import Navigation from './Navigation';
import Edit from './Edit';


const Leftside = ({ settings }) => (
  <div>

    {settings.map((m) => (
      <Link to={m.link} style={{ textDecoration: 'none', color: 'black' }}>
        {' '}
        <ul>
          <li>
            {m.setting}
          </li>
        </ul>

      </Link>
    ))}


  </div>
);

class Editprofile extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="editprofile">

          <div className="editprofile-grid">
            <div className="leftside">
              <Leftside settings={[
                {
                  setting: 'Edit Profile',
                  link: '/edit/profile',
                },
                { setting: 'Change password' },
                { setting: 'Apps and Websites' },
                { setting: 'Email and SMS' },
                { setting: 'Manage contacts' },
                { setting: 'Privacy and Security' },
                { setting: 'Login Activity' },
                { setting: 'Emails from Instagram' },
              ]}
              />
            </div>
            <div className="rightside">
              <BrowserRouter>
                <Switch>
                  
                  <Route exact path="/edit/profile" component={Edit} />
                </Switch>
              </BrowserRouter>

            </div>


          </div>


        </div>
      </div>

    );
  }
}


export default Editprofile;
