import React from 'react';
import './Emailsfrominsta.scss';
import {
  Switch, Route, Link,
} from 'react-router-dom';

const Securitygrid = ({list}) => (
  <div className="list">
    {list.map((l) => (
      <div>
        <h5>{l.title}</h5>
        <p>{l.content}</p>
        <span>{l.subcontent}</span>
        <h6 />
      </div>
    ))}
  </div>
);

const Security = () => (
  <div>
    <p>
 This is a list of emails Instagram has sent you about security and login in the last 14 days. You can use it to verify which emails are real and which are fake.
      {' '}
      <span>Learn more.</span>
    </p>
    <h6 />
    <Securitygrid list={[
      {
        title: 'Username Changed on Instagram',
        content: 'Dec 22, 2019 8:44 PM',
        subcontent: 'Sent to: heenathaseen98@gmail.com · Sent from: security@mail.instagram.com',
      },
      {
        title: 'New login to Instagram from Chrome on Linux',
        content: 'Dec 20, 2019 10:47 AM',
        subcontent: 'Sent to: heenathaseen98@gmail.com · Sent from: security@mail.instagram.com',
      },

    ]}
    />

  </div>
);
const Other = () => (
  <div>
    <p>
This is a list of the emails Instagram has sent you in the last 14 days that aren't about security or login. You can use it to verify which emails are real and which are fake.
      {' '}
      <span>Learn more.</span>
    </p>
  </div>
);

const Emailsfrominsta = () => (
  <div className="appsandweb">
    <h2>Emails From Instagram</h2>

    <div className="grid">
      <Link className="li" to="/editprofile/emails_sent/" style={{ textDecoration: 'none', color: 'black' }}>
        <h4>Security</h4>
      </Link>
      <Link className="li" to="/editprofile/emails_sent/other/" style={{ textDecoration: 'none', color: 'black' }}>
        {' '}
        <h4>Other</h4>
      </Link>

    </div>

    <Switch>
      <Route exact path="/editprofile/emails_sent/" component={Security} />
      <Route exact path="/editprofile/emails_sent/other/" component={Other} />
    </Switch>
  </div>
);
export default Emailsfrominsta;
