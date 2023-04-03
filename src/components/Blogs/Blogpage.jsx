import React from 'react'
import { getAll,getSingle } from '../../Contentful'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import Loader from '../Loader/Loader'
function Blogpage() {
const {id}=useParams()
const [data,setData]=React.useState([])
const [loading,setLoading]=React.useState(true)
React.useEffect(()=>{
  (async()=>{
   const a=  await getSingle(id,'blogPost')
   if(a.length<1) return window.location.href="/"
    setLoading(false)
    setData(a)
  })()
  window.scrollTo(0, 0)

},[])
if(loading) return <Loader/>
return (
   <React.Fragment>
    <div>
  {/* Blog Details Hero Section Begin */}
  <section className="blog-details-hero set-bg" style={{backgroundImage:`url(${data[0]?.fields?.blogCover?.fields?.file?.url})`}} >

    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">

          <div className="bd-hero-text">
            <h2>{(data[0]?.fields?.title)}</h2>
            <ul>
              <li className="b-time"><i className="icon_clock_alt" /> {
                moment(data[0]?.fields?.date).format("MMMM Do YYYY")
              }</li>
              <li><i className="icon_profile" /> Admin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Hero End */}
  {/* Blog Details Section Begin */}
  <section className="blog-details-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="blog-details-text">
         
            <div className="bd-more-text">
              <div className="bm-item">
                <p>{(data[0]?.fields?.description?.content.map(e=>{
                  return e.content[0].value+" " 
                }))}</p>
              </div>
           
            </div>
  
     
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Section End */}
</div>

    </React.Fragment>
  )
}

export default Blogpage