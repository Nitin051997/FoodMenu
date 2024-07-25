import React, { useMemo, useState } from 'react'
import './index.css';
import './media.css';
import MenuList from '../Data/MenuList.json'
import CustomCard from '../Custom/Card'
import HomeFooter from '../Home/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import AppLoader from '../Custom/AppLoader'

const FoodMenu = () => {

    let menuListData = MenuList;
    let location = useLocation();
    const navigate = useNavigate();

    const [loading, setloading] = useState(true);

    const handleGoHome = (type) => {
        if(type == 'home'){
            navigate('/')
        }
    }

    useMemo(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 1000)
    },[])

  return (
    <>
    {loading ? 
    <>
        <AppLoader />
    </> : 
    <>
        <section className='menu-banner'>
            <div className='menu-banner-container'>
                <span className='menu-banner-title'>
                    {
                        location?.state?.category == 'starter' ? 'Starters Menu.' : 
                        location?.state?.category == 'food' ? 'Main Dish Menu.' : 
                        location?.state?.category == 'drink' ? 'Drinks Menu' : 
                        location?.state?.category == 'dessert' ? 'Desserts Menu' : 
                        'Foodie Spot Menu.'
                    }
                </span>
                <div className='menu-banner-btn'>
                    <span className='menu-banner-home make-hand' onClick={() => {handleGoHome('home')}}>Home</span>
                    <span>&nbsp;/&nbsp;</span>
                    <span className='menu-banner-menu make-hand'>
                        {
                            location?.state?.category == 'starter' ? 'Starter' : 
                            location?.state?.category == 'food' ? 'Main Dish' : 
                            location?.state?.category == 'drink' ? 'Drink' : 
                            location?.state?.category == 'dessert' ? 'Dessert' : 
                            'Menu'
                        }
                    </span>
                </div>
            </div>
        </section>
        {window.innerWidth > '481' ? (<br/>) : null}
        <section className='menu-type-food'>
            {location?.state?.category == 'starter' || location?.state?.category == 'All' ? (<div className='menu-container'>
                <div className='menu-food-title-container'>
                    <span className='menu-food-title'>Starters</span>
                </div>
                <div className='menu-list-container'>
                    {menuListData.filter((fil) => {
                        if(fil.type == 'starter'){
                            return fil
                        }
                    }).map((cardDetails) => {
                        return (<CustomCard cardData={cardDetails}/>)
                    })}
                </div>
            </div>) : null}
            {window.innerWidth > '481' ? (<br/>) : null}
            {location?.state?.category == 'food' || location?.state?.category == 'All' ? (<div className='menu-container'>
                <div className='menu-food-title-container'>
                    <span className='menu-food-title'>Main dishes</span>
                </div>
                <div className='menu-list-container'>
                    {menuListData.filter((fil) => {
                        if(fil.type == 'food'){
                            return fil
                        }
                    }).map((cardDetails) => {
                        return (<CustomCard cardData={cardDetails}/>)
                    })}
                </div>
            </div>) : null}
            {window.innerWidth > '481' ? (<br/>) : null}
            {location?.state?.category == 'drink' || location?.state?.category == 'All' ? (<div className='menu-container'>
                <div className='menu-food-title-container'>
                    <span className='menu-food-title'>Drinks</span>
                </div>
                <div className='menu-list-container'>
                    {menuListData.filter((fil) => {
                        if(fil.type == 'drink'){
                            return fil
                        }
                    }).map((cardDetails) => {
                        return (<CustomCard cardData={cardDetails}/>)
                    })}
                </div>
            </div>) : null}
            {window.innerWidth > '481' ? (<br/>) : null}
            {location?.state?.category == 'dessert' || location?.state?.category == 'All' ? (<div className='menu-container'>
                <div className='menu-food-title-container'>
                    <span className='menu-food-title'>Desserts</span>
                </div>
                <div className='menu-list-container'>
                    {menuListData.filter((fil) => {
                        if(fil.type == 'dessert'){
                            return fil
                        }
                    }).map((cardDetails) => {
                        return (<CustomCard cardData={cardDetails}/>)
                    })}
                </div>
                </div>) : null}
        </section>
        <HomeFooter />
    </>}
    </>
  )
}

export default FoodMenu