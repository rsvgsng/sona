import React from 'react'
import 'swiper/css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import heroKT from '../../assets/heroKT.png'
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
<section className="hero-section">
  <div className="container">
    <div className="row" style={{alignItems:'center'}}>
      <div className="col-lg-6">
        <div className="hero-text">
          <h1>Shradha Modern City Hotel</h1>
          <p>
            Welcome to Shradha Hotel, where comfort meets luxury! Our hotel is located in the heart of Birtamode, Jhapa, providing easy access to all the city's major attractions. Whether you're in town for business or pleasure, our hotel offers exceptional amenities to make your stay unforgettable. With modern and tastefully designed rooms, we offer the perfect setting for a peaceful and comfortable night's sleep. Our friendly and professional staff are always on hand to assist you, ensuring that you have a hassle-free stay. At Shradha Hotel, we take pride in providing our guests with an exceptional experience, so book your stay with us today and let us take care of the rest!
          </p>
          <a onClick={
            () => navigate('/Explore')
          } className="primary-btn">Discover Now</a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="right__hero__image">
        {/* <img src={heroKT} alt="" /> */}

        </div>
      </div>
    </div>
    
  </div>
  <div className="blurrr"></div>
    <video className='swiper__wrapper' src="https://files.catbox.moe/aaknx4.mp4" loop autoPlay muted/>

</section>

</React.Fragment>

  )
}

export default Hero