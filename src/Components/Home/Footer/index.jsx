import React, { useEffect } from 'react'
import './index.css';
import './media.css';
import app_icon from '../../../Assets/app_icon/appicon.png'

const HomeFooter = () => {

  return (
    <>
    <section className='home-footer'>
        <div className='home-footer-container'>
            <div className='app-footer-title'>
                <img src={app_icon} className='app-icon' alt='app_icon'/>
                <span className='app-title'>Foodies <span className='app-sub-title'>Spot</span></span>
            </div>
            <div className='home-app-copyright'>
                <span>&#169; 2024 All Rights Reserved.</span>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeFooter