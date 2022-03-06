import React from 'react'
import './feed.css'
import Post from './feedComponents/Post'
import Tweet from './feedComponents/Tweet'

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
                <div className="tweetsContainer">
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                    <Tweet name="Elon Musk" id="elonmusk" tweet="Defeating traffic is the ultimate boss battle. Even the most powerful humans in the world cannot defeat traffic."/>
                </div>
            </section>
        </div>
    )
}

export default Feed