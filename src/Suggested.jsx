import React from 'react';
import './Suggested.scss';
import profile from './profile.jpg';
import ananya from './ananya.png';
import kar from './kareenapp.jpeg';
import sha from './shahidpp.jpeg';
import fiveminpp from './fiveminpp.jpeg';
import Navigation from './Navigation';

const Suggestions = ({ suggestionlist }) => (
  <div className="suggestions">
    {suggestionlist.map(s=>(
      <>
    <div>
      {' '}
      <img src={s.propic} alt="" />
      <h4>{s.proname}</h4>
      <h5>{s.name}</h5>
      <p>{s.followedby}</p>

    </div>
     <div>
     <button type="button">Follow</button>
   </div>
   </>
   ))}
    
   

  </div>
);

const Suggested = () => (
  <>
  <Navigation />
  <div className="suggest">
    
   
    <div className="suggests" >
    <p>Suggested</p>
   
    <div className="suggested" >
   
    <div>
        <Suggestions suggestionlist={[
          {propic:ananya,
            proname:"Ria",
            name:"Ria Sharma",
            followedby:"Followed by nisharudru +.......",},
            { propic:profile,
              proname:"Ananya Pande",
              name:'Anu',
              followedby:"Followed by nisharudru +......."},
              { propic:sha,
                proname:"ShahidKapoor",
                name:'Shahid',
                followedby:"Followed by heena +......."},
                { propic:kar,
                  proname:"TherealKareenaKapoor",
                  name:'Kareena',
                  followedby:"Followed by thaseen +......."},
                  { propic:fiveminpp,
                    proname:"Five_Minutes_crafts",
                    name:'Learn Crafts',
                    followedby:"Followed by nisharudru +......."},
        ]}
          
        />
      

      </div>
    </div>
      
     
    </div>

  </div>
  </>

);
export default Suggested;
