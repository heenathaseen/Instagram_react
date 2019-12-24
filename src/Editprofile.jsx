import React from 'react';
import './Editprofile.scss';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import Navigation from './Navigation';
import Edit from './Edit';
import Footer from './Footer';
import Changepassword from './Changepassword';
import Managecontacts from './Managecontacts';
import Emailandsms from './Emailandsms';
import Privacyandsecurity from './Privacyandsecurity';


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
                {
                  setting: 'Email and SMS',
                  link: '/editprofile/settings/',
                },
                {
                  setting: 'Manage contacts',
                  link: '/editprofile/contact_history/',
                },
                {
                  setting: 'Privacy and Security',
                  link: '/editprofile/privacy_and_security/',
                },
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
                <Route exact path="/editprofile/settings/" component={Emailandsms} />
                <Route exact path="/editprofile/contact_history/" component={Managecontacts} />
                <Route exact path="/editprofile/privacy_and_security/" component={Privacyandsecurity} />
                <Route exact path="/editprofile/login_activity/" component={Editprofile} />
                <Route exact path="/editprofile/emails_sent/" component={Editprofile} />
              </Switch>


            </div>


          </div>


        </div>
        <Footer />
      </div>

    );
  }
}


export default Editprofile;
