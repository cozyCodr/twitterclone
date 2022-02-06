import React from 'react';
import './profile.css'

const profile = () => {
  return (<div className="profile-card">
    <div className="img-container">
        <img className='image' src="https://pbs.twimg.com/profile_images/1489304361629102093/_Fbmoh69_400x400.jpg" alt="" />
    </div>
    <div>
        <h4 className="username">DevBright</h4>
        <p className='userid'>@TheStoneKeeper</p>
    </div>
  </div>
  );
};

export default profile;
