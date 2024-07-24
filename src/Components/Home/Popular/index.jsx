import React, { useState } from 'react'
import './index.css';
import './media.css';
import MenuList from '../../Data/MenuList.json'
import next from '../../../Assets/popular/next.png'
import previous from '../../../Assets/popular/previous.png'
import dish from '../../../Assets/popular/dish.png'
import CustomCard from '../../Custom/Card'
import { useNavigate } from 'react-router-dom'

const PopularDishes = () => {

    let menuListData = MenuList.filter((fil) => {
        if(fil.ratting == 5){
            return fil
        }
    });

    const [sliceNext, setNext] = useState(window.innerWidth > '481' ? 4 : 2);
    const [slicePrev, setPrev] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if(sliceNext < menuListData.length){
            setNext((old) => old + 1);
            setPrev((old) => old + 1);
        }
    }

    const handlePrev = () => {
        if(slicePrev != 0){
            setNext((old) => old - 1);
            setPrev((old) => old - 1);
        }
    }

    const handleGoMenu = (type) => {
        if(type == 'menu'){
            navigate('/menu', {
                state: {"category": 'All'}
            });

        }
    }

  return (
    <>
    <section className='app-home-popular'>
        <div className='popular-menu'>
            <div>
                <span className='app-home-popular-menu-title'>Most popular dishes</span>
                <div className='app-home-popular-menu-container'>
                    <span className='app-home-popular-sub-title'>Your belly knows best.</span>
                    <div className='menu-handler-container'>
                        <img src={previous} alt='previous' className={`menu-handler-btn ${slicePrev == 0 ? 'menu-handler-btn-disable' : '' } make-hand`} onClick={() => {if(slicePrev != 0){handlePrev()}}}/>
                        <img src={next} alt='next' className={`menu-handler-btn ${sliceNext >= menuListData.length ? 'menu-handler-btn-disable' : '' } make-hand`} onClick={() => {if(sliceNext < menuListData.length){handleNext()}}}/>
                        <div className='app-home-popular-full-menu-btn make-hand' onClick={() => {handleGoMenu('menu')}}>
                            <img src={dish} alt='dish' className='full-menu-btn-icon'/>
                            <span className='full-menu-btn-label'>Full menu</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='popular-menu-list-container'>
                {menuListData.slice(slicePrev,sliceNext).map((cardDetails) => {
                    return (<CustomCard cardData={cardDetails}/>)
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default PopularDishes