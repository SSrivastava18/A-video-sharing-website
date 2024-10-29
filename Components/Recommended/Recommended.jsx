import React, { useState, useEffect } from 'react';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        try {
            const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
            const response = await fetch(relatedVideo_url);
            const data = await response.json();
            setApiData(data.items || []); // Default to an empty array if items are undefined
        } catch (error) {
            console.error("Error fetching data:", error);
            setApiData([]); // Set an empty array if fetch fails
        }
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className='recommended'>
            {apiData.length > 0 ? (
                apiData.map((item, index) => (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side_video-list'>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)}</p>
                        </div>
                    </Link>
                ))
            ) : (
                <p>No videos available.</p>
            )}
        </div>
    );
};

export default Recommended;
