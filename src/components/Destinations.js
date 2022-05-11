import React from 'react'
import './Destinations.css'
import BoraBora from '../assets/borabora.jpeg'
import BoraBora2 from '../assets/borabora2.jpeg'
import maldives from '../assets/maldives.jpeg'
import maldives2 from '../assets/maldives2.jpeg'
import Keywest from '../assets/keywest.jpeg'
const Destinations = () => {
  return (
    <div name='destinations' className='destinations'>
        <div className='container'>
          <h1>All-inclusive Resorts</h1>
          <p>On The Caribbean's Best Beaches</p>
          <div className='img-container'>
              <img  className="span-3 image-grid-row-2"  src={BoraBora} alt="/" />
              <img src={BoraBora2} alt="/" />
              <img src={maldives} alt="/" />
              <img src={maldives2} alt="/" />
              <img src={Keywest} alt="/" />
          </div>
        </div>
    </div>
  )
}

export default Destinations