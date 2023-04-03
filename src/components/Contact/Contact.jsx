import React from 'react'
import { motion } from 'framer-motion'

function Contact() {

    React.useEffect(()=>{
      window.scrollTo(0, 0)
    },[])

    return (
        <motion.div  
        exit={{ opacity:0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1, transition: { duration: 0.5 } }}
          >
        {/* Contact Section Begin */}
<section className="contact-section spad" data-aos="fade-right">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="contact-text">
          <h2>Contact Info</h2>
          <p>Feel free to contact us.</p>
          <table>
            <tbody>
              <tr>
                <td className="c-o">Address:</td>
                <td>Birtamode-4 , Bhadrapur Road</td>
              </tr>
              <tr>
                <td className="c-o">Phone:</td>
                <td>9842657897</td>
              </tr>
              <tr>
                <td className="c-o">Email:</td>
                <td>info@saradhahotel.com</td>
              </tr>
           
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-lg-7 offset-lg-1">
        <form action="https://formsubmit.co/ghisingrishav@gmail.com" method='POST' className="contact-form">
          <div className="row">
            <div className="col-lg-6">
              <input type="text" name="name" required  placeholder="Your Name" />
            </div>
            <div className="col-lg-6">
              <input type="text" name="email" required placeholder="Your Email" />
            </div>
            <div className="col-lg-12">
              <textarea placeholder="Your Message" name="message" defaultValue={""} />
              <button type="submit">Submit Now</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.3623137060383!2d87.99086980363377!3d26.64066723874871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb09dbb1b023%3A0x7cdb0c22be7e7da1!2sKelme!5e1!3m2!1sen!2snp!4v1680326229033!5m2!1sen!2snp" height={470} style={{border: 0}} allowFullScreen />
    </div>
  </div>
</section>
        </motion.div>
  )
}

export default Contact