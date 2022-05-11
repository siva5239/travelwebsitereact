import React from 'react'
import './BackGround.css'
import {AiOutlineSearch} from 'react-icons/ai'

import video from '../assets/maldivesVideo.mp4'

const BackGround = () => {
    return (
        <div className='background'>
            <video autoPlay loop id="video" muted>
                <source src={video} type='video/mp4' />
            </video>
            <div className='overlay'>

            </div>
            <div className='content'>
                <h1>FirstClass Travel</h1>
                <h2>Top 1% locations worldwide</h2>
                <form className='form'>
                    <div>
                        <input type="text" placeholder="Search Destinations" />
                    </div>
                    <div>
                        <button><AiOutlineSearch className="icon"/></button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default BackGround