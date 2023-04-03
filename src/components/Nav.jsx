import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import styles from './Nav.module.css'
function Nav() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
    return (
        <React.Fragment>
              <div className={styles.mobile__menu__full} style={{
        transform: open ? 'translateX(0)' : 'translateX(-105%)'
      }}>
      <div className={styles.mobile__menu__wrapper} >
        <div className={styles.close} onClick={
          handleOpen
        }>
         {/* <AiOutlineCloseSquare/> */}
        </div>
        <ul>
          <Link to='/' onClick={()=>
          setOpen(false)
          }>
          <li >
            Home
            </li>
          </Link>
          <Link to='/Rooms' onClick={()=>
          setOpen(false)
          }>
          <li>
            Our Rooms
            </li>
          </Link>
          <Link to='/Contact'onClick={()=>
          setOpen(false)
          } >
          <li>
            Contact
            </li>
          </Link>
          <Link to='/Blogs' onClick={()=>
          setOpen(false)
          }>
          <li>
            Blogs
            </li>
          </Link>
          <Link to='/Explore' onClick={()=>
          setOpen(false)
          }>
          <li>
            Explore Us
            </li>
          </Link>

        </ul>
      </div>
      </div>
  <div className="offcanvas-menu-overlay" />
  <div className="canvas-open" onClick={()=>{
    handleOpen ()
  }} >
    <i className="icon_menu" />
  </div>
  <div className="offcanvas-menu-wrapper">
    <div className="canvas-close">
      <i className="icon_close" />
    </div>



    <div className="top-social">
      <a href="#"><i className="fa fa-facebook" /></a>
      <a href="#"><i className="fa fa-instagram" /></a>
    </div>
    <ul className="top-widget">
      <li><i className="fa fa-phone" /> 9816909300</li>
      <li><i className="fa fa-envelope" /> info.colorlib@gmail.com</li>
    </ul>
  </div>


  {/* Header Section Begin */}
<header className="header-section">
  <div className="top-nav">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <ul className="tn-left">
            <li><i className="fa fa-phone" /> 9842657897</li>
            <li><i className="fa fa-envelope" /> info@saradhahotel.com</li>
          </ul>
        </div>
        <div className="col-lg-6">
          <div className="tn-right">
            <div className="top-social">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="menu-item">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="logo">
            <a href="./index.html">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-10">
          <div className="nav-menu">
            <nav className="mainmenu">
              <ul>
                <li className={location.pathname=='/'?"active":""}>
                  <Link to='/'>
                  Home
                  </Link>
                  </li>
                <li className={location.pathname=='/Rooms'?"active":""}>
                  <Link to='/Rooms'>
                    Rooms
                  </Link>
                </li>
                <li className={location.pathname=='/Explore'?"active":""}>
                <Link to='/Explore'>
                  
                  Explore
                  </Link>
                  </li>
       
                <li className={location.pathname=='/Blogs'?"active":""}>
                 <Link to ={'/Blogs'}>
                  Blogs
                  </Link>
                  
                  </li> 
                <li className={location.pathname=='/Contact'?"active":""}>
                  <Link to ={'/Contact'}>
                  Contact
                  </Link>
                  </li>
              </ul>
            </nav>
        
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
{/* Header End */}



        </React.Fragment>

    )
}

export default Nav