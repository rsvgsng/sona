import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function SectionFive() {
  return (
    <React.Fragment>
        {/* Testimonial Section Begin */}
<section className="testimonial-section spad" data-aos="fade-up">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <span>Testimonials</span>
          <h2>What Customers Say?</h2>
        </div>
      </div>
    </div>
    <div className="row">
 
      <div className="col-lg-8 offset-lg-2">
        <div className="testimonial-slider ">
        <Swiper
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>   <div className="ts-item">
            <p>"I recently stayed at Hotel Shradha and was blown away by the exceptional service and luxurious accommodations. The balcony view was breathtaking and the room provided all the amenities we needed for a comfortable stay. The staff was incredibly friendly and went above and beyond to make our stay unforgettable."</p>
            <div className="ti-author">
              <div className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star-half_alt" />
              </div>
              <h5> - Rabi Panday (Maharastha) </h5>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> 
          <div className="ts-item">
            <p>"My wife and I stayed in the Suite Room at Hotel Shradha for our anniversary and it was an absolutely perfect experience. The room was beautifully designed and the balcony view was breathtaking. The staff were incredibly friendly and attentive to our every need. We highly recommend this hotel to any couples looking for a romantic and luxurious stay."</p>
            <div className="ti-author">
              <div className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star-half_alt" />
              </div>
              <h5> - Raj Agrawal (Delhi)</h5>
            </div>
          </div>
     </SwiperSlide>
     <SwiperSlide> 
          <div className="ts-item">
            <p>
           "I recently stayed in the Double Deluxe Twin room at Hotel Shradha with my best friend and we were blown away by the exceptional service and amenities. The room was spacious and provided everything we needed for a comfortable stay. The balcony view was stunning and we loved having a designated eating space to enjoy our meals together. We highly recommend this hotel for anyone traveling with a friend or partner."
              </p>
            <div className="ti-author">
              <div className="rating">
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
                <i className="icon_star" />
              </div>
              <h5> - Anurag Limbu (Kathmandu)</h5>
            </div>
          </div>
     </SwiperSlide>
      </Swiper>
         
        </div>
      </div>
    </div>
  </div>
</section>
{/* Testimonial Section End */}

    </React.Fragment>
    )
}

export default SectionFive