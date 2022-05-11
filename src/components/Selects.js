import React from 'react'
import './Selects.css'
import BoraBora from '../assets/borabora.jpeg'
import BoraBora2 from '../assets/borabora2.jpeg'
import maldives from '../assets/maldives.jpeg'
import maldives2 from '../assets/maldives2.jpeg'
import maldives3 from '../assets/maldives3.jpeg'
import Keywest from '../assets/keywest.jpeg'
import Selectimg from './Selectimg'

const Selects = () => {
  return (
    <div name="views" className='selects'>
      <div className='container'>
      <Selectimg bgImg={BoraBora}  text='BoraBora' />
      <Selectimg bgImg={BoraBora2}  text='Emerald Bay' />
      <Selectimg bgImg={maldives}  text='Maldives' />
      <Selectimg bgImg={maldives2}  text='Grenda' />
      <Selectimg bgImg={maldives3}  text='Barbados' />
      <Selectimg bgImg={Keywest}  text='Key West' />
      </div>
      
    </div>
  )
}

export default Selects