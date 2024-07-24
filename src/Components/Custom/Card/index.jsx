import React from 'react'
import './index.css';
import './media.css';
import star_y from '../../../Assets/card/star_y.png'
import star_g from '../../../Assets/card/star_g.png'
import { useNavigate } from 'react-router-dom'

const CustomCard = (props) => {

  let colorStar = [];
  let disableStar = [];
  const navigate = useNavigate();

  const handleNavigate = (type) => {
    if(type == 'placeorder'){
      let orderData = props.cardData
        navigate('/placeorder', {
          state: {orderData}
        })
    }
}

  for(let i = 1; i <= props.cardData.ratting; i++){
    colorStar.push(<img src={star_y} alt='ratting' className='card-container-ratting'/>);
  }

  for(let i = 1; i <= (5 - props.cardData.ratting); i++){
    disableStar.push(<img src={star_g} alt='ratting' className='card-container-ratting'/>);
  }

  return (
    <>
        <div className='card-container make-hand' onClick={() => handleNavigate('placeorder')}>
            <img src={`${process.env.PUBLIC_URL}/assets/${props.cardData.coverImg}.jpg`} alt='popular-list' className='card-container-cover'/>
            <div className='card-container-title'>
                <div className='card-container-label'>{props.cardData.label}</div>
                <div className='card-container-price'>Rs. {props.cardData.price}</div>
            </div>
            <div className='card-container-discription'>{props.cardData.tagline}</div>
            <div className='card-container-ratting-div'>
              {colorStar}
              {disableStar}
            </div>
        </div>
    </>
  )
}

export default CustomCard