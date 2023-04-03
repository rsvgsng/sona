import React from 'react'
import flogo from '../assets/footer-logo.png'
import style from './Footer.module.css'
function Footer() {
  return (
    <React.Fragment>
        {/* Footer Section Begin */}
<footer className={style.footer_section}>
  <div className="container">
    <div className={style.footer_text}>
      <div className="row">
        <div className="col-lg-4">
          <div className={style.ft_about}>
            <div className={style.logo}>
              <a href="#">
                {/* <img src={flogo} alt="" />
                 */}
                 <h2>Sharadha</h2>
              </a>
            </div>
            <p>Welcome to Shradha Hotel </p>
            <div className={style.fa_social}>
              <a href="#"><i className="fa fa-facebook" /></a>

            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1">
          <div className={style.ft_contact}>
            <h6>Contact Us</h6>
            <ul style={{paddingLeft:"0px"}}>
              <li>9842657897</li>
              <li>info@shradhahotel.com</li>
              <li>Birtamode-4 Jhapa</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div className={style.copyright_option}>
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <ul>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-5">
          <div className="co-text" style={{textAlign:'end'}}><p>
              Made by Goose
              </p></div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* Footer Section End */}

        </React.Fragment>
  )
}

export default Footer