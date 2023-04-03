import React from 'react'
import b from '../../assets/room-b1.jpg'
import { getAll } from '../../Contentful'
import Loader from '../Loader/Loader'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
function SectionSix() {
  const navigate = useNavigate()
  const [data,setData]=React.useState([])
  const [loading,setLoading]=React.useState(true)

  React.useEffect(()=>{
    (async ()=>{
    const data =  await getAll('blogPost')
     setData(data)
     setLoading(false)
    })()
    window.scrollTo(0, 0)
  },[])

  if(loading) return <Loader/>
  return (
    <React.Fragment>
        {/* Blog Section Begin */}
<section className="blog-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <span>Hotel News</span>
          <h2>Our Blog &amp; Event</h2>
        </div>
      </div>
    </div>
    <div className="row">
{
  data?.map((e,key)=>{return( 
    <div className="col-lg-4">
    <div className="blog-item set-bg" style={{backgroundImage:`url(${b})`}}>
      <div className="over__"></div>
      <div className="bi-text">
          
        <h4>
        <Link to ={`/Blog/${e?.fields?.slug}`}>
          {e?.fields?.title}
            </Link>
          </h4>
        <div className="b-time"><i className="icon_clock_alt" /> 
        {
                    moment(e?.fields?.date).format('MMMM Do YYYY')
                  }</div>
      </div>
    </div>
  </div>
    )})
}
    </div>
  </div>
</section>
{/* Blog Section End */}

        </React.Fragment>
  )
}

export default SectionSix