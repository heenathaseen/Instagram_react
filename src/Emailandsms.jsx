import React from 'react';
import './Emailandsms.scss';

const Emaillist = ({ emaillist }) => (
  <div>
    {emaillist.map((e) => (
      <>
        <input type="checkbox" checked className="checkbox" />
        <h5>{e.title}</h5>
        <p>{e.content}</p>

      </>
    ))}
  </div>
);

const Emailandsms = () => (
  <div className="emailandsms">
    <h2>Subscribe to:</h2>
    <Emaillist
      emaillist={[
        {
          title: 'Feedback Emails',
          content: 'Give feedback on Instagram.',
        },
        {
          title: 'Reminder emails',
          content: 'Get notifications you may have missed.',
        },
        {
          title: 'Product emails',
          content: 'Get tips about Instagrams tools.',
        },
        {
          title: 'News emails',
          content: 'Learn about new Instagram features.',
        },
        {
          title: 'Text (SMS) Messages',
          content: 'Get notifications by text message.',
        },
      ]}
    />
  </div>
);
export default Emailandsms;
