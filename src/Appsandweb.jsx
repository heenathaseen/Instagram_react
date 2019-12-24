import React from 'react';
import './Appsandweb.scss';
import {
  Switch, Route, Link,
} from 'react-router-dom';

// const Appgrid = (list) => (
//   <div>
//     {list.map((l) => (
//       <>
//         <h5>{l.title}</h5>
//         <p>{l.content}</p>
//         <span>{l.subcontent}</span>
//       </>
//     ))}
//   </div>
// );

const Active = () => (
  <div>
    <p>These are apps and websites you've used Instagram to log into and have recently used. They can request info you chose to share with them.</p>
    <span>You have not authorized any applications to access your Instagram account.</span>

  </div>
);
const Expired = () => (
  <div>
    <p>These are apps and websites you've used Instagram to log into and may not have used in a while. They may still have access to info you previously shared, but their ability to make additional requests for private info has expired.</p>
    <span>You have no expired applications that had access to your Instagram account.</span>
  </div>
);

const Appsandweb = () => (
  <div className="appsandweb">
    <h2>Apps and Websites</h2>

    <div className="grid">
      <Link className="li" to="/editprofile/manage_access/" style={{ textDecoration: 'none', color: 'black' }}>
        <h5>Active</h5>
      </Link>
      <Link className="li" to="/editprofile/manage_access/expired/" style={{ textDecoration: 'none', color: 'black' }}>
        {' '}
        <h5>Expired</h5>
      </Link>

    </div>

    <Switch>
      <Route exact path="/editprofile/manage_access/" component={Active} />
      <Route exact path="/editprofile/manage_access/expired/" component={Expired} />
    </Switch>
  </div>
);
export default Appsandweb;
