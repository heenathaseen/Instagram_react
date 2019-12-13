import React from 'react';
import './App.scss';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';

import Main from './Main';
import Findpeople from './Findpeople';
import './Navigation.scss';


// const App = () => (
//   <div className="app">
//     <Navigation />
//     <Main />
//   </div>
// );

const Icons = ({ icon }) => (

  <i className={icon} />


);
const Navigation = () => (
  <div className="navigation">
    <div className="header">
      <div className="logo">
        <Link to="/home">
          {' '}
          <ul>
            <li>
              {' '}
              <i className="fab fa-instagram" />
            </li>
            <li>|</li>
            <li>instagram</li>
          </ul>
        </Link>


      </div>
      <div className="search">
        <input type="text" className="fas" placeholder="&#xf002; Search" />
      </div>
      <div className="icons">

        <Link to="/find"><Icons icon="far fa-compass" /></Link>


        <Icons icon="far fa-heart" />
        <Icons icon="far fa-user" />
      </div>
    </div>


  </div>
);
class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
        <Navigation />
      
        <Switch>
          <Route exact path="/home" component={Main} />
          <Route exact path="/find" component={Findpeople} />

        </Switch>
      </BrowserRouter>

    );
  }
}


export default App;
