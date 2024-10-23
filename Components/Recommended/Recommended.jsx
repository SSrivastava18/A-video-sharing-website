import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'


const Recommended = () => {
  return (
    <div className='recommended'>
     <div className="side-video-list">
        <img src={thumbnail1}   alt="" />
        <div className='vid-info'>
            <h4>Know about Yourself.</h4>
            <p>Saurabh Srivastava</p>
            <p>200k Views</p>
        </div>
     </div>
     <div className="side-video-list">
        <img src={thumbnail2}   alt="" />
        <div className='vid-info'>
            <h4>Know about Yourself.</h4>
            <p>Saurabh Srivastava</p>
            <p>200k Views</p>
        </div>
     </div>
     <div className="side-video-list">
        <img src={thumbnail3}   alt="" />
        <div className='vid-info'>
            <h4>Know about Yourself.</h4>
            <p>Saurabh Srivastava</p>
            <p>200k Views</p>
        </div>
     </div>
     <div className="side-video-list">
        <img src={thumbnail2}   alt="" />
        <div className='vid-info'>
            <h4>Know about Yourself.</h4>
            <p>Saurabh Srivastava</p>
            <p>200k Views</p>
        </div>
     </div>
     <div className="side-video-list">
        <img src={thumbnail1}   alt="" />
        <div className='vid-info'>
            <h4>Know about Yourself.</h4>
            <p>Saurabh Srivastava</p>
            <p>200k Views</p>
        </div>
     </div>
     <div className="side-video-list">
        <img src={thumbnail3}   alt="" />
        <div className='vid-info'>
            <h4>Know about Yourself.</h4>
            <p>Saurabh Srivastava</p>
            <p>200k Views</p>
        </div>
     </div>
    </div>
  )
}

export default Recommended
