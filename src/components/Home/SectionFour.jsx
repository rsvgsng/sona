import React from 'react'
import a from '../../assets/room-b3.jpg'
import { getAll } from '../../Contentful'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'
function SectionFour() {

  const [room, setRoom] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const navigate = useNavigate()

  React.useEffect(() => {
    (async () => {
      if (sessionStorage.getItem('homeRoomsTypes')) {
        setLoading(false)
        return setRoom(JSON.parse(sessionStorage.getItem('homeRoomsTypes')))
      }
      const a = await getAll('roomTypes')
      setLoading(false)
      setRoom(a)
      sessionStorage.setItem('homeRoomsTypes', JSON.stringify(a))
    })()
  }, [])
  if (loading) return <Loader />
  return (
    < React.Fragment>
      {/* Home Room Section Begin */}
      <section className="goose-room-section">
        <div className="container-fluid">
          <div className="hp-room-items">
            <div className="row">
              {
                room.slice(0,4).map((e) => {
                  return (
                    <div className="col-lg-3 col-md-6" data-aos="fade-up">
                      <div className="hp-room-item set-bg" style={{ backgroundImage: `url(${e?.fields?.images[0]?.fields?.file?.url})` }} data-setbg={a}>
                        <div className="back__wrapper"></div>
                        <div className="hr-text">
                          <h3>{e?.fields?.roomName}</h3>
                          <h2>Rs.{e?.fields?.pricePerNight}<span>/Pernight</span></h2>
                          <table>
                            <tbody>
                              <tr>
                                <td className="r-o">Bed Count:</td>
                                <td>{e?.fields?.bedCount}</td>
                              </tr>
                            </tbody>
                          </table>

                          <a  onClick={
                            () => {
                              navigate(`/room/${e?.fields?.slug}`)
                            }
                          } className="primary-btn">More Details</a>
                        </div>
                      </div>
                    </div>
                  )
                })
              }





            </div>
          </div>
        </div>
      </section>
      {/* Home Room Section End */}

    </React.Fragment>
  )
}

export default SectionFour