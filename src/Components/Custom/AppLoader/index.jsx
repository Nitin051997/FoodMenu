import React from 'react'
import './index.css'
import appLoaderGif from '../../../Assets/app_loader/loader.gif'

const AppLoader = () => {
  return (
    <>
    <section className='app-loader-container' style={{height: `${window.innerHeight}px`}}>
        <img src={appLoaderGif} alt='app loader' className='app-loader-container-img'/>
        <span className='app-loader-container-label'>loading...</span>
    </section>
    </>
  )
}

export default AppLoader