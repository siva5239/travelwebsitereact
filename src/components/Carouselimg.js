import React from 'react'
import './Carouselimg.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";  // requires a loader
import { Carousel } from 'react-responsive-carousel';
import maldives from '../assets/maldives.jpeg'
import maldives2 from '../assets/maldives2.jpeg'
import maldives3 from '../assets/maldives3.jpeg'
// import Keywest from '../assets/keywest.jpeg'
const Carouselimg = () => {
  return (
    <div name='carousel' className='container'>
    <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
    <div>
        <img src={maldives} alt="/" />
        {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
        <img src={maldives2} alt="/"/>
        {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
        <img src={maldives3} alt="/" />
        {/* <p className="legend">Legend 3</p> */}
    </div>
</Carousel>
</div>
  )
}

export default Carouselimg