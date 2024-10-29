import React, { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        try {
            const response = await fetch(videoList_url);
            const result = await response.json();
            setData(result.items || []); // Default to an empty array if items are undefined
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]); // Set an empty array to avoid component breaking
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className='feed'>
            {data.length > 0 ? (
                data.map((item) => (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={item.id}>
                        <img
                            src={item.snippet?.thumbnails?.medium?.url || 'default-thumbnail.png'}
                            alt={item.snippet?.title || 'Video thumbnail'}
                        />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>
                            {value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
                        </p>
                    </Link>
                ))
            ) : (
                <p>No videos available.</p>
            )}
        </div>
    );
};

export default Feed;
