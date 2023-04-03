import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Rooms from './components/Rooms/Rooms'
import About from './components/About/About'
import RoomPage from './components/Rooms/RoomPage'
import Contact from './components/Contact/Contact'
import Blogs from './components/Blogs/Blogs'
import Blogpage from './components/Blogs/Blogpage'
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <React.Fragment>
        <Nav />
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/Rooms' element ={<Rooms />}/>
        <Route path='/Room/:id' element ={<RoomPage />}/>
        <Route path='/Explore' element ={<About />}/>
        <Route path='/Contact' element ={<Contact />}/>
        <Route path='/Blogs' element ={<Blogs />}/>
        <Route path='/Blog/:id' element ={<Blogpage />}/>
        <Route path='*' element ={<Home/>}/>
      </Routes>
        <Footer />
    </React.Fragment>
  )
}

export default App