import React, { useEffect, useMemo, useState } from 'react'
import './index.css';
import './media.css';
import HomeFooter from '../Home/Footer/index'
import ListCard from '../Custom/ListCard';
import { useDispatch, useSelector } from 'react-redux';
import Myfoodorders from '../Redux/Action/MakeOrder';
import NoOrder from '../../Assets/order/noorder.png'
import AppLoader from '../Custom/AppLoader';

const MyOrderLists = () => {

    const placedOrderList = useSelector((state) => state.MakeOrderReducer);
    const dispatch = useDispatch();

    const [loading, setloading] = useState(true);

    const handleCancleOrder = (orderNum) => {
        let filterData = [...placedOrderList].reverse().filter((filData, index) => {return index !== orderNum});
        if(Array.isArray(placedOrderList)&&placedOrderList.length > 0){
            let finalFilterData = [...filterData.reverse()]
            dispatch(Myfoodorders(finalFilterData))
            sessionStorage.setItem('storeOrderData',JSON.stringify(finalFilterData));
        }
    }

    useMemo(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 1000)
    },[placedOrderList])

    useEffect(() => {
        window.scrollTo(0,0);
    },[])
    console.log("NitinConsole", window.innerWidth > 490);
  return (
    <>
    {loading ? 
    <>
        <AppLoader />
    </> : 
    <>
        { Array.isArray(placedOrderList)&&[...placedOrderList].length != 0 ? 
        <>
            <section className='order-list-container' style={{height: Array.isArray(placedOrderList)&&[...placedOrderList].length > (window.innerWidth > 490 ? 3 : 5) ? 'auto' : `${window.innerHeight}px`}}>
                {[...placedOrderList].reverse().map((cardlist, index) => {
                    return <ListCard cardlist={cardlist} orderNum={index} handleCancleOrder={handleCancleOrder}/>
                })}
            </section>
        </> : 
        <>
        <section className='order-list-nodata' style={{height: `${window.innerHeight}px`}}>
            <img src={NoOrder} alt='No Data' className='order-list-nodata-img'/>
            <span className='order-list-nodata-label'>No Order Found!</span>
        </section>
        </> }
        <HomeFooter />
    </>}
    </>
  )
}

export default MyOrderLists