import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { Input } from 'postcss'
const Intro = () => {
  const formRef = useRef();
  


  


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden ">
            <motion.div
      variants= {slideIn('left', "tween",0.2,1)}
      className= "flex-[0.75] p-8  rounded-2xl "
      >
        <h3 className={styles.specialSectionHeadText}>
          CosmoClaim:
        </h3>
        <p className={styles.specialSectionHeadText}>
           Bidding Beyond Earth
        </p>
        <br></br>
        <p className={styles.specialSectionHeadText}>
           October 30th-31th, 2023 San Francisco
        </p>

          
      </motion.div>

      <motion.div 
            variants= {slideIn('right', "tween",0.2,1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] overflow "            >
        <EarthCanvas/>


      </motion.div>

    </div> 
  )
}

export default SectionWrapper(Intro, "Intro")