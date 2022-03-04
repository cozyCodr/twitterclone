import React from 'react';
import Profilepic from '../dashComponents/profile'
import './post.css'

const Post = () => {
  return (
    <div>
      <div className="profile-pic-container">
        <Profilepic id='profile-pic'/>
      </div>
      <div className="tweetText">
        <div>
          <input type="text" placeholder="What's happening?"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
