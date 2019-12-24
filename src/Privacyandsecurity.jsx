import React from 'react';
import './Privacyandsecurity.scss';

const List = ({ list }) => (
  <div className="list">
    {list.map((e) => (
      <>
        <h2>{e.heading}</h2>
        <input type="checkbox" checked className="checkbox" />
        <h5>{e.title}</h5>
        <p>{e.content}</p>
        <span>{e.text}</span>
        <h6 />

      </>

    ))}
  </div>
);
const Seclist = ({ seclist }) => (
  <div className="list">
    {seclist.map((s) => (
      <>
        <h2>{s.heading}</h2>

        <span>{s.content}</span>

        <h6 />

      </>

    ))}
  </div>
);


const Privacyandsecurity = () => (
  <div className="privacyandsecurity">
    <h2>Subscribe to:</h2>
    <List
      list={[
        {
          heading: 'Account Privacy',
          title: 'Private Account',
          content: 'When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers wont be affected.',
        },
        {
          heading: 'Activity Status',
          title: 'Show Activity Status',
          content: 'Allow accounts you follow and anyone you message to see when you were last active on Instagram apps. When this is turned off, you wont be able to see the activity status of other accounts.',
        },
        {
          heading: 'Story Sharing',
          title: 'Allow Sharing',
          content: 'Let people share your story as messages',
        },


      ]}
    />
    <Seclist
      seclist={[
        {
          heading: 'Account Privacy',

          content: 'Edit Comment Settings',
        }]}
    />
    <h2>Photos of you</h2>
    <input type="radio" name="" id="" />
    <h5>Add Automatically</h5>
    <input type="radio" name="" id="" checked />
    <h5>Add Manually</h5>
    <p>
Choose how you want photos of you added to your profile.
      <span>Learn more</span>
      {' '}
about Photos of You.
    </p>
    <h6 />
    <Seclist
      seclist={[
        {
          heading: 'Account Data',

          content: 'View Account Data',
        },
        {
          heading: 'Two-Factor Authentication',

          content: 'Edit Two-Factor Authentication Setting',
        },
        {
          heading: 'Data Download',

          content: 'Request Download',
        },
        {
          heading: 'Privacy and Security Help',

          content: 'Support',
        },
      ]}
    />


  </div>
);
export default Privacyandsecurity;
