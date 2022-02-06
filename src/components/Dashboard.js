import React from 'react'
import './dashboard.css'
import '../icons/icon.css'

//External Component Imports
import TabMenu from './Tab';
import Tweetbtn from './dashComponents/tweetbtn'
import ProfileCard from './dashComponents/profile'

const Dashboard = () => {
    return (
        <div className='dashboard '>
            
            <div className='dash-items'>
            
                {/* Twitter Icon */}
                <div className="t-icon">
                    <div className='t-icon-container'>
                        <svg className='twitter-icon' viewBox="0 0 24 24" aria-hidden="true" >
                            <g>
                                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                {/* Tab Menu Items  */}
                {
                    TabMenu.map((tab) => {

                        if(tab.hasOwnProperty("circle")){
                            return (
                                <div class='tabItem'>
                                    <svg class='icon' viewBox={tab.viewBox} aria-hidden={tab.ariaHidden} >
                                        <g>
                                            <circle cx={tab.circle.circle1[0]} cy={tab.circle.circle1[1]} r={tab.circle.circle1[2]} ></circle>
                                            <circle cx={tab.circle.circle2[0]} cy={tab.circle.circle2[1]} r={tab.circle.circle2[2]} ></circle>
                                            <circle cx={tab.circle.circle3[0]} cy={tab.circle.circle3[1]} r={tab.circle.circle3[2]} ></circle>

                                            <path d={tab.path}>
                                            </path>
                                        </g>
                                    </svg>
                                    <p class="tabName">{tab.name}</p>
                                </div>
                            )
                        }

                        else if(tab.hasOwnProperty("paths")){
                            return (
                                <div class='tabItem'>
                                    <svg class='icon' viewBox={tab.viewBox} aria-hidden={tab.ariaHidden} >
                                        <g>
                                            <path d={tab.paths.path1}>
                                            </path>
                                            <path d={tab.paths.path2}>
                                            </path>
                                        </g>
                                    </svg>
                                    <p class="tabName">{tab.name}</p>
                                </div>
                            )
                        }

                        else {
                            return (
                                <div class='tabItem'>
                                    <svg class='icon' viewBox={tab.viewBox} aria-hidden={tab.ariaHidden} >
                                        <g>
                                            <path d={tab.path}>
                                            </path>
                                        </g>
                                    </svg>
                                    <p class="tabName">{tab.name}</p>
                                </div>
                            )
                        }
                        
                    })
                } 

                {/* Tweet Button */}
                <Tweetbtn type="Tweet" className="tweet-btn"/>
                <div className="profile-container">
                  <ProfileCard className="profile-card"/>
                </div>
            </div>     
        </div>
    )
}

export default Dashboard