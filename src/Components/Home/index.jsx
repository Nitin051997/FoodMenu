import React from 'react'
import './index.css';
import HomeBanner from './Banner';
import ChooseMenu from './ChooseMenu';
import PopularDishes from './Popular';
import HomeFooter from './Footer';

const HomePage = () => {

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