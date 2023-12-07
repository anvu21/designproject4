import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { slideIn } from '../utils/motion'

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import {icon} from '../assets'




const About = () => {
  return (
    
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-5 overflow-hidden ">
          

      <motion.div 
            variants= {slideIn('left', "tween",0.2,1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] overflow "            >
        <img src={icon} alt="logo" className="w-full h-full object-cover overflow"/>


      </motion.div>


      <motion.div
      variants= {slideIn('right', "tween",0.2,1)}
      className= "flex-[0.75] p-8  rounded-2xl "
      >
        <h3 className={styles.specialSectionHeadText}>
        How it works:
                </h3>
        <br></br>
        <p className={styles.sectionSubText}>
        CosmoClaim: Bidding Beyond Earth <br></br>
        Join a thrilling space auction to name a distant planet. Honor yourself or others and leave a lasting legacy among the stars.       </p>
        <br></br>
        <br></br>
        <p className={styles.sectionSubText}>
        1. Discover: Explore a selection of mysterious planets presented by top astronomers.       </p>
        <br></br>
        <p className={styles.sectionSubText}>
        2. Bid: Participate in the excitement, where each bid takes you closer to cosmic glory.        </p>
        <br></br>
        <p className={styles.sectionSubText}>
        3. Claim: Win and bestow your chosen name, immortalized in the virtual heavens.
        </p>

          
      </motion.div>
    </div> 
  )
}

export default SectionWrapper(About, "about")