import React from 'react'
import './index.css';
import './media.css';
import MenuTypeData from '../../Data/MenuType.json'
import { useNavigate } from 'react-router-dom';

const ChooseMenu = () => {

    let menuListData = MenuTypeData;
    const navigate = useNavigate();

    const handleGoMenu = (type) => {
        navigate('/menu', {
            state: {"category": type}
        });

    }

  return (
    <>
    <section className='app-home-choose-menu'>
        <div className='choose-menu'>
            <span className='app-home-choose-menu-title'>What do you like today?</span>
            <div className='choose-menu-list-container'>
                { menuListData.map((details) => {
                    return (<>
                    <div className='choose-menu-list-card make-hand' onClick={() => {handleGoMenu(details.typeMenu)}}>
                        <div className='card-part-one'>
                            <img src={`${process.env.PUBLIC_URL}/assets/${details.label}.png`} alt='starters' className='menu-card-icons'/>
                            <span className='choose-menu-list-circle'>
                                &nbsp;
                            </span>
                        </div>
                        <div className='card-part-two'>
                            <span className='choose-menu-list-title'>{details.menutitle}</span>
                            <br />
                            <span className='choose-menu-list-tag'>{details.menutagline}</span>
                        </div>
                    </div>
                    </>)
                }) }
            </div>
        </div>
    </section>
    </>
  )
}

export default ChooseMenu