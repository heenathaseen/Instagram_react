import React from 'react';
import './Managecontacts.scss';

const Managecontacts = () => (
  <div className="managecontacts">
    <h3>Manage Contacts</h3>
    <p>
The people listed here are contacts you've uploaded to Instagram. To remove
      {' '}
      <br />
        your synced contacts, tap Delete All. If you delete your contacts from this page,
      <br />
         new contacts you add to your phone will be uploaded. If you want to stop
      {' '}
      <br />
         syncing, go to your device settings and turn off access to contacts.

    </p>
    <p>
    Only you can see your contacts, but Instagram uses the info you've uploaded
      {' '}
      <br />
    about your contacts to make friend suggestions for you and others and to
      {' '}
      <br />
     provide a better experience for everyone.

    </p>
    <h4>
0 Synced Contacts
      {' '}
      <span>Delete All</span>
    </h4>
    <h6 />
    <p>
When you upload your contacts to Instagram, you'll see them here.

    </p>
    <h6 />
    <button type="button">Delete All</button>

  </div>
);
export default Managecontacts;
