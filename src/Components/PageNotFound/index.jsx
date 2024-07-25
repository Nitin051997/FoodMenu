import React, { useMemo, useState } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import AppLoader from '../Custom/AppLoader';

const PageNotFound = () => {

  const navigate = useNavigate();

  const [loading, setloading] = useState(true);

  const handleGoHome = () => {
    navigate('/');
  }

  useMemo(() => {
    setloading(true);
    setTimeout(() => {
        setloading(false);
    }, 2000)
},[])

  return (
    <>
    { loading ? 
    <>
      <AppLoader />
    </> : 
    <>
      <section className='page-not-found'>
          <span className='page-not-found-msg'>Sorry! 404 Page Not Found.</span>
          <span className='page-not-found-btn make-hand' onClick={() => {handleGoHome()}}>Back to Home</span>
      </section>
    </> }
    </>
  )
}

export default PageNotFound