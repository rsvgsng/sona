import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useParams } from 'react-router-dom';
import { getSingle } from '../../Contentful';
import Loader from '../Loader/Loader';
function RoomPage() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [room, setRoom] = useState();
  const [loading, setLoading] = useState(true);
  const {id }= useParams()
  React.useEffect(() => {
      (async () => {
        const a = await getSingle(id,'roomTypes')
        if(a.length<1) return window.location.href = '/'

        setRoom(a[0].fields)
        setLoading(false)

      })();

      window.scrollTo(0, 0)
  },[])
if(loading) return <Loader/>
  return (
    <motion.div  
    exit={{ opacity:0 }}
    initial={{ opacity:0 }}
    animate={{ opacity:1, transition: { duration: 0.5 } }}
      >
   <div>
  <div className="breadcrumb-section" data-aos="fade-right">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>{room?.roomName}</h2>
          
          </div>
       <div className="swiper__container">
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >

          {
            room?.images.map(e=>{
              return(
                <SwiperSlide>
                <img src={e?.fields.file.url} alt="" srcset="" />
              </SwiperSlide>
              )
            })
          }
      

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>

        </Swiper>
       </div>

     

        </div>
      </div>
    </div>
  </div>

  <section className="room-details-section spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="room-details-item">
            <img src="" alt="" />
            <div className="rd-text">
              <div className="rd-title">
          
              </div>
              <h2>Rs. {room?.pricePerNight } <span>  /Pernight</span></h2>
              <table>
                <tbody>
                  <tr>
                    <td className="r-o">Size:</td>
                    <td>{room?.roomSize}</td>
                  </tr>
                
                  <tr>
                    <td className="r-o">Bed Count:</td>
                    <td>{room?.bedCount}</td>
                  </tr>
                  <tr>
                    <td className="r-o">Services:</td>
                    <td>
                      {room?.services.map(e=>{
                        return(
                          e+', '
                        )
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="f-para">
              
               {(room?.description?.content.map(e=>{
             return   e.content[0].value+' '
               }))}
              </p>
            </div>
          </div>
       
        </div>
 
      </div>
    </div>
  </section>
</div>
    </motion.div>
  )
}

export default RoomPage