import React from 'react'
import './Footer.css'
import {FaFacebook,FaInstagram,FaYoutube,FaPinterest,FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
          <div className='top'>
              <h3>Beaches.</h3>
              <div className='social'>
              <FaFacebook className="icon"/>
              <FaInstagram className="icon"/>
              <FaTwitter className="icon"/>
              <FaPinterest className="icon"/>
              <FaYoutube className="icon"/>

              </div>

          </div>
          <div className='bottom'>
              <div className='left'>
                  <ul>
                      <li>About</li>
                      <li>partnerships</li>
                      <li>Careers</li>
                      <li>Advertisement</li>
                  </ul>
              </div>
              <div className='right'>
                  <ul>
                      <li>Contacts</li>
                      <li>Terms</li>
                      <li>Policy</li>
                      <li>Privacy</li>
                      <li>Address</li>
                      

                  </ul>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Footer