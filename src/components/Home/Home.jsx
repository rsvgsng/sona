import React from 'react'
import Hero from './Hero'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import { motion } from "framer-motion"
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import { getAll } from '../../Contentful'
function Home() {
    React.useEffect(() => {
      (async () => {
        const a = await getAll('roomTypes')
        setData(a)
        setLoading(false)
      })()
      }, [])
  return (
      <motion.div  
        exit={{ opacity:0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 , transition: { duration: 0.7 }}} >
                <Hero/>
                <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <SectionFive/>
          <SectionSix/>
        </motion.div>
  )
}

export default Home