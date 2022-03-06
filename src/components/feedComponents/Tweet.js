import './tweet.css'
import Icons from './icons'

const Tweet = (props) => {
    const {name, id, tweet} = props;
    return (
        <div className="tweet-container">
            <div className="user-img">
                <img className ="t-user-photo" src="https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg" alt="elon musk pp" />
            </div>
            <div className="tweet-content">
                <div className='userplusoptions'> 
                    <span className="user-id">
                        <p className='t-user-name'>{name}</p>
                        <p className='t-user-id'>@{id}</p>
                    </span>
                    <div className="options-container">
                        <svg className="three-dots" viewBox="0 0 24 24" aria-hidden="true" >
                            <g>
                                <circle cx={Icons[10].cx1} cy={Icons[10].cy} r={Icons[10].r}></circle>
                                <circle cx={Icons[10].cx2} cy={Icons[10].cy} r={Icons[10].r}></circle>
                                <circle cx={Icons[10].cx3} cy={Icons[10].cy} r={Icons[10].r}></circle>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="user-tweet">
                    <p>{tweet}</p>
                    <div>
                        <div className='t-icon-text'>
                            
                            {/* Comments */}
                            <div className="all-under-icons comments-icon">
                                <svg className='under-t-icon' viewBox={Icons[6].viewBox} aria-hidden={Icons[6].ariaHidden} >
                                    <g>
                                        <path d={Icons[6].d}></path>
                                    </g>
                                </svg>
                                <div className='under-t-text'>
                                    <p>10.7K</p>
                                </div>
                            </div>

                            {/* Retweets */}
                            <div className="all-under-icons retweets-icon">
                                <svg className='under-t-icon' viewBox={Icons[7].viewBox} aria-hidden={Icons[7].ariaHidden} >
                                    <g>
                                        <path d={Icons[7].d}></path>
                                    </g>
                                </svg>
                                <div className='under-t-text'>
                                    <p>10.7K</p>
                                </div>
                            </div>
                            
                            {/* Likes */}
                            <div className="all-under-icons heart-icon">
                                <div className="icon-square">
                                <svg className='under-t-icon' viewBox={Icons[8].viewBox} aria-hidden={Icons[8].ariaHidden} >
                                    <g>
                                        <path d={Icons[8].d}></path>
                                    </g>
                                </svg>
                                </div>
                                <div className='under-t-text'>
                                    <p>10.7K</p>
                                </div>
                            </div>
                            {/* Share */}
                            <div className="share-icon all-under-icons">
                                <svg className='under-t-icon' viewBox={Icons[9].viewBox} aria-hidden={Icons[9].ariaHidden} >
                                    <g>
                                        <path d={Icons[9].d1}></path>
                                        <path d={Icons[9].d2}></path>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet