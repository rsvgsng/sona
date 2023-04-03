import React from 'react'
import a from '../../assets/room-4.jpg'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { getAll } from '../../Contentful'
import Loading from '../Loader/Loader'
function Rooms() {
  const [data,setData] = React.useState([])
  const [loading,setLoading] = React.useState(true)
  React.useEffect(() => {

    (async () => {
      if (sessionStorage.getItem('homeRoomsTypes')) {
        setLoading(false)
        return setData(JSON.parse(sessionStorage.getItem('homeRoomsTypes')))
      }else{
        const a = await getAll('roomTypes')
        setData(a)
        setLoading(false)
      }

 
    })()
    
    window.scrollTo(0, 0)

  }, [])
if(loading) return <Loading/>
  return (
    <motion.div  
    exit={{ opacity:0 }}
    initial={{ opacity:0 }}
    animate={{ opacity:1, transition: { duration: 0.5 } }}
      >
   
        {/* Breadcrumb Section Begin */}
<div className="breadcrumb-section" data-aos="fade-right">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="breadcrumb-text">
          <h2>Our Rooms</h2>
          <div className="avaliable__room__text">
          <p>
            Check out our rooms and choose the one that suits you the best. We have a wide range of rooms to choose from.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<section className="rooms-section spad "data-aos="fade-right">
  <div className="container">
    <div className="row">
      {
        data?.map((e) => {
          return(
            <div className="col-lg-4 col-md-6">
            <div className="room-item">
              <div className="image__">
              <img src={e?.fields?.images[0]?.fields?.file?.url} alt="" />
              </div>
              <div className="ri-text">
                <h4>{e?.fields?.roomName}</h4>
                <h3>Rs.{e?.fields?.pricePerNight}<span> /Pernight</span></h3>
                <table>
                  <tbody>
                    <tr>
                      <td className="r-o">Size:</td>
                      <td>{e?.fields?.roomSize}</td>
                    </tr>
               
                    <tr>
                      <td className="r-o">Bed Count:</td>
                      <td>{e?.fields?.bedCount}</td>
                    </tr>
                    <tr>
                      <td className="r-o">Services:</td>
                      <td>{e.fields?.services
                        .map((e) => {
                          return(
                            <span>{e+', '}</span>
                          )
                        })
                      }</td>
                    </tr>
                  </tbody>
                </table>
                <Link to={"/Room/"+e.fields?.slug} >
                <div className="room__more__btn">
                More Details
                </div>
                </Link>

              </div>
            </div>
          </div>
          )
        })
      }
 
 
 
    </div>
  </div>
</section>
{/* Rooms Section End */}

    </motion.div>
  )
}

export default Rooms