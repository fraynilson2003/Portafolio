import React from 'react';
//images
import image from "../assets/avatar.svg"
//icon
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"
//animacion tipo
import { TypeAnimation } from "react-type-animation"
//motion
import {motion} from "framer-motion"
import {fadeIn} from "../variants"




const Banner = () => {


  return(
    <section id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-between lg:gap-x-10">
        <div>
          {/*texto */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1 
            variants={fadeIn("up", 0.3)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.7}} 
            className="text-[40px] font-bold leading-[0.8] lg:text-[90px] mb-2">Fray <span>Toledo</span></motion.h1>
          </div>

          <motion.div
          variants={fadeIn("up", 0.4)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.7}} 
          className="mb-8 text-[32px] lg:text-[50px] font-secondary font-semibold uppercase text-center leading-[1] lg:text-left"> 
            <h2 className="text-white mr-2 ">Desarrollador </h2>
            <TypeAnimation sequence={[
              "front-end",
              2000,
              "back-end",
              2000,
              ".net",
              2000
            ]}
            speed={50}
            className="text-accent"
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>

          <motion.p 
          variants={fadeIn("up", 0.45)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.7}} 
          className="mb-6 max-w-lg mx-auto text-justify lg:mx-0">
          Lorem ipsum dolor, sit amet consectetur adipisicinga jogo ascao kacllq lokiac lakaso icta?
          </motion.p>

          <motion.div 
          variants={fadeIn("up", 0.5 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.7}} 

          className="flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0">
            <button className="btn btn-lg">Contactame</button>
            <a href="#" className="text-gradient btn-link">Mi portafolio</a>
          </motion.div>   

          {/*Redes sociales */}

          <motion.div 
          variants={fadeIn("up", 0.55 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.7}} 
          className="flex text-[20px] gap-x-5 max-w-max mx-auto lg:mx-0">
            <a className="cursor-pointer" href="https://www.linkedin.com/in/fray-desarrolador/" target="_blank">
              <FaLinkedin />
            </a> 
            <a href="https://github.com/fraynilson2003" target="_blank">
              <FaGithub/>
            </a>  
            <a href="#">
              <FaYoutube/>
            </a>         
          </motion.div>
        </div>

        {/*image */}
        <motion.div 
        variants={fadeIn("down", 0.5 )} 
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount:0.7}}         
        className=" hidden lg:flex flex-1 justify-center items-center mx-auto max-w-[320px] lg:max-w-[482px] ">
          <img src={image} alt="" />
        </motion.div>

      </div>
    </section>
  )
}

export default Banner;
