import React, { useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import { useEffect } from 'react'
import moment from 'moment';



const Feed = ({category}) => {

const [data, setData] = useState([]);



  const fetchData = async () =>{
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxWidth=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url).then(response=>response.json().then(data=>setData(data.items)));
  }

  useEffect(()=>{
    fetchData();
  },[category])

  return (
    <div className='feed'>
      {data.map((item,index)=>{
          return (
      <Link to={`video/${item.snippet.categoryID}/${item.id}`} className='card'>
        <img  src={item.snippet?.thumbnails?.medium?.url || 'default-thumbnail.png'} // Fallback in case 'medium' is undefined
            alt={item.snippet?.title || 'Video thumbnail'} />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>
          )
})}
</div>

    
  )
}

export default Feed
