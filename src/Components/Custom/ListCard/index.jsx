import React from 'react'
import './index.css';
import './media.css';

const ListCard = (props) => {
  return (
    <>
        <div className='order-list-card'>
            <div className='order-list-card-cover'>
                <img src={`${process.env.PUBLIC_URL}/assets/${props.cardlist.coverImg}.jpg`} alt='cover-order' className='order-list-card-cover-img' />
            </div>
            <div className='order-list-card-details'>
                <span className='order-list-card-label'>{props.cardlist.label}</span>
                <div className='order-list-card-price'>
                    <span className='order-list-card-price-label'>Quantity: <span className='order-list-card-price-label-value'>{props.cardlist.totalQuantity}</span></span>
                    <span className='order-list-card-price-label'>Total Price: <span className='order-list-card-price-label-value'>{props.cardlist.totalPrice}</span> Rs.</span>
                    <button className='order-list-card-price-btn make-hand' onClick={() => props.handleCancleOrder(props.orderNum)}>Cancle</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ListCard