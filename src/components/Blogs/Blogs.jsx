import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { getAll} from '../../Contentful'
import moment from 'moment'
import Loader from '../Loader/Loader'
function Blogs() {
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
    <motion.div  
      exit={{ opacity:0 }}
      initial={{ opacity:0 }}
      animate={{ opacity:1 , transition: { duration: 0.7 }}} >
  <div className="breadcrumb-section" data-aos="fade-right">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-text">
            <h2>Blogs</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="blog-section blog-page spad" data-aos="fade-right">
    <div className="container">
      <div className="row">
        {
            data?.map((e,key)=>{return(
              <div className="col-lg-4 col-md-6" key={key}>
              <div className="blog-item set-bg" style={{backgroundImage:`url(${e?.fields?.blogCover?.fields.file?.url})`}}>
      <div className="over__"></div>

                <div className="bi-text">
                  <h4>
                    <Link to ={`/Blog/${e?.fields?.slug}`}>
                    {e?.fields?.title}
                    </Link>
                    </h4>
                  <div className="b-time"><i className="icon_clock_alt" /> {
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
</motion.div>

  )
}

export default Blogs