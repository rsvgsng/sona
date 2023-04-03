import React from 'react'
import about1 from '../../assets/about-1.jpg'
import about2 from '../../assets/about-2.jpg'

import { useNavigate } from 'react-router-dom'


function SectionTwo() {


  const navigate = useNavigate()
  return (
    <React.Fragment >
      <section className="aboutus-section spad" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="about-text">
                <div className="section-title">
                  <span>About Us</span>
                  <h2>Welcome to <br />Shradha Modern City Hotel</h2>
                </div>
                <p className="f-para">Welcome to Shradha Hotel, a luxurious and elegant hotel that has been catering to the needs of discerning travelers since 2023. With a commitment to impeccable service and unparalleled hospitality, we have become a preferred choice for travelers from all over the world. 



                </p>

                <p className="s-para">
                Our exceptional amenities, world-class cuisine, and comfortable accommodations have earned us a loyal following of satisfied customers, both from within the nation and internationally. We invite you to experience the Shradha Hotel difference and discover why our guests keep coming back for more.
                </p>

                <a onClick={
                  () => navigate('/Explore')
                } className="primary-btn about-btn">Read More</a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="about-pic">
                <div className="row">
                  <div className="col-sm-6">
                    <img src={about1} alt="" srcset="" />
                  </div>
                  <div className="col-sm-6">
                    <img src={about2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  )
}

export default SectionTwo