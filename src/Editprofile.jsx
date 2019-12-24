import React from 'react';
import './Editprofile.scss';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import Navigation from './Navigation';
import Edit from './Edit';
import Changepassword from './Changepassword';


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
                  link: '/editprofile/',
                },
                {
                  setting: 'Change password',
                  link: '/editprofile/password/change/',
                },
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
              <Switch>
                <Route exact path="/editprofile/" component={Edit} />
                <Route exact path="/editprofile/password/change/" component={Changepassword} />
                <Route exact path="/editprofile/manage_access/" component={Editprofile} />
                <Route exact path="/editprofile/settings/" component={Editprofile} />
                <Route exact path="/editprofile/contact_history/" component={Editprofile} />
                <Route exact path="/editprofile/privacy_and_security/" component={Editprofile} />
                <Route exact path="/editprofile/login_activity/" component={Editprofile} />
                <Route exact path="/editprofile/emails_sent/" component={Editprofile} />
              </Switch>


            </div>


          </div>


        </div>
      </div>

    );
  }
}


export default Editprofile;
