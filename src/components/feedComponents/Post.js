import React from 'react';
import Profilepic from '../dashComponents/profile'
import Icons from './icons'
import './post.css'

const Post = () => {
  return (
    <div className='post-container'>

      <div className="profile-pic-container">
        <div className="img-container">
          <img className='image' src="https://pbs.twimg.com/profile_images/1489304361629102093/_Fbmoh69_400x400.jpg" alt="" />
        </div>
      </div>

      <div className="tweet-text-container">

        {/* Whats happening Container */}
        <div>
          <textarea id='tweet-input'placeholder="What's happening?"></textarea>
        </div>

        {/* Icons Below the Whats Happening Container */}
        <div className="attach-buttons">
          <div className='attach-icons'>
            {/* Landscape Icon */}
            <div className="landscape-icon">
              <svg className='attach-icon' viewBox={Icons[0].viewBox} aria-hidden={Icons[0].ariaHidden}>
                <g>
                  <path d={Icons[0].d}></path>
                  <circle cx={Icons[0].cx} cy={Icons[0].cy} r={Icons[0].r}></circle>
                </g>
              </svg>
            </div>

            {/* Gif Icon */}
            <div className="gif-icon">        
              <svg className="attach-icon" viewBox={Icons[1].viewBox} aria-hidden={Icons[1].ariaHidden}>
                <g>
                  <path d={Icons[1].d1}></path>
                  <path d={Icons[1].d2}></path>
                </g>
              </svg>
            </div>

            {/* Poll Icon */}
            <div className="poll-icon dont-show">        
              <svg className="attach-icon" viewBox={Icons[2].viewBox} aria-hidden={Icons[2].ariaHidden}>
                <g>
                  <path d={Icons[2].d}></path></g></svg>
            </div>

            {/* Emoji Icon */}
            <div className="emoji-icon">        
              <svg className="attach-icon" viewBox={Icons[3].viewBox} aria-hidden={Icons[3].ariaHidden}>
                <g>
                  <path d={Icons[3].d1}></path>
                  <path d={Icons[3].d2}></path>
                  <circle cx={Icons[3].cx1} cy={Icons[3].cy1} r={Icons[3].r1}></circle>
                  <circle cx={Icons[3].cx2} cy={Icons[3].cy2} r={Icons[3].r2}></circle>
                </g>
              </svg>
            </div>

            {/* Schedule Icon */}
            <div className="schedule-icon dont-show">        
              <svg className="attach-icon" viewBox={Icons[4].viewBox} aria-hidden={Icons[4].ariaHidden}>
                <g>
                  <path d={Icons[4].d1}></path>
                  <path d={Icons[4].d2}></path>
                  <path d={Icons[4].d3}></path>
                  <path d={Icons[4].d4}></path>
                </g>
              </svg>
            </div>

            {/* Location Icon */}
            <div className="location-icon">        
              <svg className="attach-icon" viewBox={Icons[5].viewBox} aria-hidden={Icons[5].ariaHidden}>
                <g>
                  <path d={Icons[5].d1}></path>
                  <path d={Icons[5].d2}></path>
                </g>
              </svg>
            </div>
          </div>
          <div className='tweet-button-container'>
            <button className='tweet-button'>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
