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
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'



const Sidebar = ({sidebar}) => {

  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className="side-links">
          <img src={home} alt="no" /><p>Home</p>
        </div>
        <div className="side-links">
          <img src={game_icon} alt="no" /><p>Gaming</p>
        </div>
        <div className="side-links">
          <img src={automobliles} alt="no" /><p>Automobilesl</p>
        </div> 
        <div className="side-links">
          <img src={sports} alt="no" /><p>Sports</p>
        </div> 
        <div className="side-links">
          <img src={entertainment} alt="no" /><p>Entertainment</p>
        </div> 
        <div className="side-links">
          <img src={tech} alt="no" /><p>Technology</p>
        </div> 
        <div className="side-links">
          <img src={music} alt="no" /><p>Music</p>
        </div> 
        <div className="side-links">
          <img src={blogs} alt="no" /><p>Blogs</p>
        </div> 
        <div className="side-links">
          <img src={news} alt="no" /><p>News</p>
        </div> 
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" /><p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" /><p>Mr Beast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" /><p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" /><p>5-Minutes Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
