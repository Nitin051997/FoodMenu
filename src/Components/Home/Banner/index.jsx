import React, { useEffect, useRef, useState } from 'react'
import './index.css';
import './media.css';
// import next from '../../../Assets/Banner/next.png';
// import previous from '../../../Assets/Banner/previous.png';
import banner_1 from '../../../Assets/Banner/Banner_1.jpg';
import banner_2 from '../../../Assets/Banner/Banner_2.jpg';
import banner_3 from '../../../Assets/Banner/Banner_3.jpg';
import banner_4 from '../../../Assets/Banner/Banner_4.jpg';
import banner_5 from '../../../Assets/Banner/Banner_5.jpg';
import banner_6 from '../../../Assets/Banner/Banner_6.jpg';
import banner_7 from '../../../Assets/Banner/Banner_7.jpg';
import banner_8 from '../../../Assets/Banner/Banner_8.jpg';
import banner_9 from '../../../Assets/Banner/Banner_9.jpg';
import banner_10 from '../../../Assets/Banner/Banner_10.jpg';

const HomeBanner = () => {

    let bannerList = [banner_1,banner_2,banner_3,banner_4,banner_5,banner_6,banner_7,banner_8,banner_9,banner_10];

    const [banNum, setBanNum] = useState(0);
    const banNumRef = useRef(banNum);

    // const handleNext = () => {
    //     if(banNum !== 12){
    //         setBanNum((old) => {return old + 1});
    //     }else{
    //         setBanNum(0);
    //     }
    // }

    // const handlePrevious = () => {
    //     if(banNum !== 0){
    //         setBanNum((old) => {return old - 1});
    //     }else{
    //         setBanNum(12);
    //     }
    // }

    useEffect(() => {
        banNumRef.current = banNum;
      }, [banNum]);

      useEffect(() => {
        // Set up the interval to update `banNum` every 3 seconds
        const intervalId = setInterval(() => {
          if (banNumRef.current !== 9) {
            setBanNum(prevBanNum => prevBanNum + 1);
          } else {
            setBanNum(0);
          }
        }, 4000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

  return (
    <>
    { 
        bannerList.map((data, index) => {
            if(JSON.stringify(index) === JSON.stringify(banNum)){
                return (<>
                <section key={index} className='app-home-banner-section' style={{backgroundImage: `url(${data})`}}>
                    {/* <div className='app-home-banner-btn'>
                        <div className='banner-btn-previous make-hand' onClick={() => handlePrevious()}>
                            <img src={previous} alt='previous' style={{opacity: '80%'}}/>
                        </div>
                        <div className='banner-btn-next make-hand' onClick={() => handleNext()}>
                            <img src={next} alt='next' style={{opacity: '80%'}}/>
                        </div>
                    </div> */}
                </section>
                </>)
            }
        })
    }
    </>
  )
}

export default HomeBanner;