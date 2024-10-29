import React, { useState, useEffect } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { value_converter } from '../../data';
import { API_KEY } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        try {
            const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
            const response = await fetch(videodetails_url);
            const data = await response.json();
            setApiData(data.items ? data.items[0] : null);
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    const fetchOtherData = async () => {
        if (!apiData) return; // Exit if apiData is not yet loaded

        try {
            const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
            const channelResponse = await fetch(channelData_url);
            const channelDataJson = await channelResponse.json();
            setChannelData(channelDataJson.items ? channelDataJson.items[0] : null);

            const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
            const commentResponse = await fetch(comment_url);
            const commentDataJson = await commentResponse.json();
            setCommentData(commentDataJson.items || []);
        } catch (error) {
            console.error('Error fetching other data:', error);
        }
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apiData) {
            fetchOtherData();
        }
    }, [apiData]);

    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16k"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 12}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : ""} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description"}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 102}</h4>
                {commentData.map((item, index) => (
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                                <span>20</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayVideo;
