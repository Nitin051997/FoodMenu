import React, { useEffect, useMemo, useState } from 'react'
import './index.css';
import './media.css';
import locationMap from '../../Assets/contact/mumbaimap.png'
import locationIcon from '../../Assets/contact/location.png'
import AppLoader from '../Custom/AppLoader'
import HomeFooter from '../Home/Footer'

const ContactPage = () => {

  const [loading, setloading] = useState(true);

  useMemo(() => {
    setloading(true);
    setTimeout(() => {
        setloading(false);
    }, 500)
},[])

useEffect(() => {
  window.scrollTo(0,0);
},[])

  return (
    <>
    { loading ? 
    <>
      <AppLoader />
    </> : 
    <>
      <section className='conatct-container' style={{height: `${window.innerHeight > 720 ? window.innerHeight : 800}px`}}>
          <div className='conatct-details-container'>
              <div className='conatct-details-map-div'>
                  <img src={locationMap} alt='loaction map' className='conatct-details-map' />
                  <img src={locationIcon} alt='location-icon' className='conatct-details-location-icon'/>
              </div>
                <form action="https://api.web3forms.com/submit" method="POST" className='conatct-details-message'>
                  <div className='contact-details-title'>
                    <h2>Contact Us</h2>
                  </div>
                  <input type="hidden" name="access_key" value="###"></input>
                  <input type='text' name='name' placeholder='Your Name' className='contact-input' required/>
                  <input type='email' name='email' placeholder='Your Email' className='contact-input' required/>
                  <textarea name='message' placeholder='Your Message' className='contact-text-area' required/>
                  <button type='submit' className='Submit-btn'>Submit</button>
                </form>
          </div>
      </section>
      <HomeFooter />
    </>}
    </>
  )
}

export default ContactPage