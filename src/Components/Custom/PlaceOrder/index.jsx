import React, { useState } from 'react'
import './index.css';
import './media.css';
import star_y from '../../../Assets/card/star_y.png'
import star_g from '../../../Assets/card/star_g.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'alert';
import { useDispatch, useSelector } from 'react-redux';
import Myfoodorders from '../../Redux/Action/MakeOrder';

const PlaceOrder = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    let colorStar = [];
    let disableStar = [];
    const [QCount, setQCount] = useState(1);
    const [orderPlaced, setOrderPlaced] = useState(false)
    const [makeOrder] = useState([location?.state?.orderData])

    const placedOrderList = useSelector((state) => state.MakeOrderReducer);

    const handleQuantity = (type) => {
        if(type == 'plus'){
            setQCount((old) => {
                return old + 1
            });
        }else if(type == 'minus'){
            setQCount((old) => {
                return old - 1
            });
        }else if(type == 'clear'){
            setQCount(1);
            setOrderPlaced(false)
        }
    }

    const handleNavigate = (type) => {
        if(type == 'menu'){
            navigate('/menu', {
                state: {"category": 'All'}
            });
        }
    }

    const handleMakeOrder = () => {
        toast('Your Order Palced Successfully')
        setOrderPlaced(true)
        if(Array.isArray(placedOrderList)&&placedOrderList.length > 0){
            let orderData = [...placedOrderList, {...makeOrder[0], "totalQuantity": QCount, "totalPrice": makeOrder[0].price * QCount}]
            dispatch(Myfoodorders(orderData))
            sessionStorage.setItem('storeOrderData',JSON.stringify(orderData));
        }else{
            let orderData = [{...makeOrder[0], "totalQuantity": QCount, "totalPrice": makeOrder[0].price * QCount}]
            dispatch(Myfoodorders(orderData))
            sessionStorage.setItem('storeOrderData',JSON.stringify(orderData));
        }
    }

    for(let i = 1; i <= location?.state?.orderData?.ratting; i++){
        colorStar.push(<img src={star_y} alt='ratting' className='place-order-img-ratting'/>);
      }
    
      for(let i = 1; i <= (5 - location?.state?.orderData?.ratting); i++){
        disableStar.push(<img src={star_g} alt='ratting' className='place-order-img-ratting'/>);
      }

  return (
    <>
    <Toaster theme='dark' />
    <section className='place-my-order'>
        <div className='place-order-container'>
            <div className='place-order-menu-card'>
                <img src={`${process.env.PUBLIC_URL}/assets/${location?.state?.orderData?.coverImg}.jpg`} alt='cover-order' className='place-order-img'/>
                <div className='card-container-ratting-div' style={{padding: '10px'}}>
                  {colorStar}
                  {disableStar}
                </div>
            </div>
            <div className='place-order-menu'>
                <div className='place-order-menu-title'>
                    <span className='place-order-menu-label'>{location?.state?.orderData?.label}</span>
                    <span className='place-order-menu-tagline'>{location?.state?.orderData?.tagline}</span>
                </div>
                <div className='place-order-menu-price'>
                    <div className='place-order-menu-order'>
                        <span className='place-order-menu-order-label'>Quantity</span>
                        <button className='place-order-menu-order-btn make-hand' onClick={() => handleQuantity('minus')} disabled={QCount == 1 ? true : false} style={{cursor: QCount == 1 ? 'default' : ''}}>-</button>
                        <span className='place-order-menu-order-label'>{QCount}</span>
                        <button className='place-order-menu-order-btn make-hand' onClick={() => handleQuantity('plus')} disabled={QCount == 4 ? true : false} style={{cursor: QCount == 4 ? 'default' : ''}}>+</button>
                    </div>
                    <div className='place-order-menu-pricetag'>
                        <span  className='place-order-menu-pricetag-label'>Total Rs. {location?.state?.orderData?.price * QCount}/-</span>
                    </div>
                </div>
                <div className='place-order-menu-btn'>
                    <button className='place-order-menu-btn-success make-hand' onClick={() => handleMakeOrder()} disabled={orderPlaced}>Make Order</button>
                    {orderPlaced ? <>
                        <button className='place-order-menu-btn-clear make-hand' onClick={() => handleQuantity('clear')}>Clear</button>
                    </> : <>
                    <button className='place-order-menu-btn-Back make-hand' onClick={() => handleNavigate('menu')}>Back</button>
                    </>}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default PlaceOrder