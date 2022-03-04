import React from 'react'
import './feed.css'
import Post from './feedComponents/Post'

const Feed = () => {
    return (
        <div className='feed'>
            <div className="homeNav">
                <p>Home</p>
            </div>
            <section className="scrollable-section">
                <section className='whatsHappening'>
                    <Post />
                </section>
               <div className="tweetsContainer"></div>
            </section>
        </div>
    )
}

export default Feed