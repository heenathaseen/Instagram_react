import React from 'react';
import './Main.scss';
import Post from './Post';
import profile from './profile.jpg';
import ananya from './ananya.png';
import Rightside from './Rightside';
import Stories from './Stories';
import Suggestion from './Suggestion';
import Navigation from './Navigation';
import kare from './kareenapop.jpg';
import kar from './kareenapp.jpeg';



const Main = () => (
  <div>
    <Navigation />
    <div className="main">
      <div className="submain">
        <div>

          <Post postlist={[{
            propic: profile,
            username: 'Ananya pande',
            image: ananya,
            statusline: 'Be a reason for Smile',
            no: '40',
            cuser: 'yash_kothari23',
            ccomment:'you are my favourite',
            time:'1 hour ago',
          },
          {
            propic:kar ,
            username: 'RealKareena',
            image: kare,
            statusline: 'Be Ecsatic and spread the love because its Tim tim Birthday 🥰🥰🥰',
            no: '40',
            cuser: 'be_kothari23',
            ccomment:'Happiest birthday Taimur🎊🎉🎁',
            time:'1 hour ago',
          }]}

          />
        </div>
        <div>
          <Rightside
            userpic={profile}
            username="Ananya pande"
            name="anu"
          />
          <Stories />
          <Suggestion />
        </div>
      </div>

    </div>
  </div>


);
export default Main;
