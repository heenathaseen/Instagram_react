import React from 'react';
import './Stories.scss';
import profile from './profile.jpg';
import ananya from './ananya.png';
import kar from './kareenapp.jpeg';
import sha from './shahidpp.jpeg';
import fiveminpp from './fiveminpp.jpeg';

const Storygrid = ({ storylist }) => (
  <>
    {storylist.map((s) => (
      <div className="storygrid">
        <img src={s.propic} alt="" />
        <h4>{s.proname}</h4>
        <p>{s.storytime}</p>
            </div>
    ))}

  </>
);

const Stories = () => (
  <div className="stories">
    <div className="title">
      <div className="sto"><p>stories</p></div>
      <div><h5> Watch All</h5></div>
    </div>
    <div className="scroll">
      <div>
        <Storygrid storylist={[{
          propic: ananya,
          proname: 'Ria',
          storytime: '1 hour ago',
        },
        {
          propic: profile,
          proname: 'Ananya Pande',
          storytime: '12 hour ago',
        },
        {
          propic: sha,
          proname: 'IamShahidKapoor',
          storytime: '14 hour ago',
        },
        {
          propic: kar,
          proname: 'TherealKareenaKapoor',
          storytime: '14 hour ago',
        },
        {
          propic: fiveminpp,
          proname: 'Fiveminutes_Crafts',
          storytime: '15 hour ago',
        },
        ]}
        />

      </div>
    </div>


  </div>
);
export default Stories;
