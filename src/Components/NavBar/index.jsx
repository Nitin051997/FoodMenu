import React, { useEffect, useMemo, useState } from 'react'
import './index.css';
import './media.css';
import cart_img from '../../Assets/cart/cart.png'
import cart_gif from '../../Assets/cart/cart.gif'
import mobMenuicon from '../../Assets/cart/mob_menu.png'
import app_icon from '../../Assets/app_icon/appicon.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Myfoodorders } from '../Redux/Action/MakeOrder'
/*11th July 2024*/

const AppNavBar = () => {

    const [cartAdded, setCartAdded] = useState(true);
    const [mobMenu, setMobMenu] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const placedOrderList = useSelector((state) => state.MakeOrderReducer);

    const handleGoHome = (type) => {
        if(type == 'home'){
            navigate('/');
            setMobMenu(false);
        }else if(type == 'menu'){
            navigate('/menu', {
                state: {"category": 'All'}
            });
            setMobMenu(false);
        }else if(type == 'contact'){
            navigate('/contact');
            setMobMenu(false);
        }else if(type == 'orderlist'){
            navigate('/orderlist')
            setMobMenu(false);
        }
    }

    const handleToggle = () => {
        setMobMenu(!mobMenu);
    }

    useMemo(() => {
        if(Array.isArray(placedOrderList)&&placedOrderList.length > 0){
            setCartAdded(false)
            setTimeout(() => {
                setCartAdded(true)
            },2000)
        }
    },[placedOrderList])

    useEffect(() => {
      if(!placedOrderList){
          let storeOrderData = sessionStorage.getItem('storeOrderData');
          dispatch(Myfoodorders(JSON.parse(storeOrderData)))
      }
    },[])

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = 'Are your want to Reload the Pages, Any unsaved work might get lost.';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

  return (
    <>
    <nav id='navBar'>
        <div className='app-nav-title make-hand' onClick={() => handleGoHome('home')}>
            <img src={app_icon} className='app-icon' alt='app_icon'/>
            <span className='app-title'>Foodies <span className='app-sub-title'>Spot</span></span>
        </div>
        <div className='app-nav-pages'>
            <ul className='app-nav-list'>
                <li className='nav-to-path make-hand' onClick={() => handleGoHome('home')}>Home</li>
                <li className='nav-to-path make-hand' onClick={() => handleGoHome('menu')}>Menu</li>
                <li className='nav-to-path make-hand' onClick={() => handleGoHome('contact')}>Contact</li>
            </ul>
        </div>
        <div className='mob-desktop-icon-container'>
            <div className='app-nav-bag make-hand' onClick={() => handleGoHome('orderlist')}>
                <img src={cartAdded ? cart_img : cart_gif} className='app-cart-icon' alt='cart'/>
                <div className='app-cart-badge'>{Array.isArray(placedOrderList)&&placedOrderList.length > 0 ? placedOrderList.length : 0}</div>
            </div>
            <div className='mob-app-menu'>
                <img src={mobMenuicon} alt='mob-menu' className='mob-app-menu-icon make-hand' onClick={() => {handleToggle()}}/>
                <div class="mob-menu-launcher" style={{display: mobMenu ? 'inline-block' : 'none', marginTop: '15px'}}>
                    <li className='nav-to-path make-hand' onClick={() => handleGoHome('home')}>Home</li>
                    <li className='nav-to-path make-hand' onClick={() => handleGoHome('menu')}>Menu</li>
                    <li className='nav-to-path make-hand' onClick={() => handleGoHome('contact')}>Contact</li>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default AppNavBar