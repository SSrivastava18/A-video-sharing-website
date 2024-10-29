import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobliles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import bb from '../../assets/bb.jpg'
import pj from '../../assets/pj.jpg'
import sa from '../../assets/8118.jpg'
import vk from '../../assets/vk.jpg'
import zk from '../../assets/zakir.jpg'







const Sidebar = ({sidebar, category, setCategory}) => {

  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="no" /><p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="no" /><p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={automobliles} alt="no" /><p>Automobilesl</p>
        </div> 
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="no" /><p>Sports</p>
        </div> 
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="no" /><p>Entertainment</p>
        </div> 
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="no" /><p>Technology</p>
        </div> 
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="no" /><p>Music</p>
        </div> 
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="no" /><p>Blogs</p>
        </div> 
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="no" /><p>News</p>
        </div> 
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={bb} alt="" /><p>Bhuvan Bam</p>
        </div>
        <div className="side-link">
          <img src={pj} alt="" /><p>PJ-Explained</p>
        </div>
        <div className="side-link">
          <img src={sa} alt="" /><p>Saurabh Srivastva</p>
        </div>
        <div className="side-link">
          <img src={zk} alt="" /><p>Zakir Khan</p>
        </div>
        <div className="side-link">
          <img src={vk} alt="" /><p>Virat Kohli</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
