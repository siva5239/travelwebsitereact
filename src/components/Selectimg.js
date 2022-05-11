import React from 'react'
import './Selectimg.css'


const Selectimg = ({bgImg,text}) => {
    // const {text}=props
  return (
    <div className='selects-locations'>
        <img src={bgImg} alt="/" />
        <div className='overlay'>
            <p>{text}</p>
        </div>

    </div>
  )
}

export default Selectimg