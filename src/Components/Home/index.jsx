import React, { useEffect } from 'react'
import './index.css';
import HomeBanner from './Banner';
import ChooseMenu from './ChooseMenu';
import PopularDishes from './Popular';
import HomeFooter from './Footer';

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  return (
    <>
    <HomeBanner/>
    <ChooseMenu />
    <PopularDishes />
    <HomeFooter/>
    </>
  )
}

export default HomePage;