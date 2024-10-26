import React from 'react'
import { useState } from 'react';
import './PlayVideo.css'
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg'
import { useEffect } from 'react';
import { value_converter } from '../../data';
import { API_KEY } from '../../data';


const PlayVideo = ({videoId}) => {

    const [apiData, setApiData] = useState(null);

    const fetchVideoData = async () =>{
        const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} HTTP/1.1`;
        await fetch(videodetails_url).then(res=>res.json()).then(data => setApiData(data.items[0]));
    }

    useEffect(() => {
     fetchVideoData();
    }, [])
    
    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData?value_converter(apiData.statistics.viewCount):"16k"} &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />300</span>
                    <span><img src={dislike} alt="" />10</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>GreatStack</p>
                    <span>1M Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe GreatStack to watch More tutorials on web development</p>
                <hr />
                <h4>130 comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Saurabh Srivastava <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum deserunt beatae autem quam quidem fugiat deleniti repellendus! Voluptatem magnam illo molestias, eius ipsam harum, unde quam aliquam facere ratione animi?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>200</span>
                            <img src={dislike} alt="" />
                            <span>20</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Saurabh Srivastava <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum deserunt beatae autem quam quidem fugiat deleniti repellendus! Voluptatem magnam illo molestias, eius ipsam harum, unde quam aliquam facere ratione animi?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>200</span>
                            <img src={dislike} alt="" />
                            <span>20</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Saurabh Srivastava <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum deserunt beatae autem quam quidem fugiat deleniti repellendus! Voluptatem magnam illo molestias, eius ipsam harum, unde quam aliquam facere ratione animi?</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>200</span>
                            <img src={dislike} alt="" />
                            <span>20</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlayVideo
