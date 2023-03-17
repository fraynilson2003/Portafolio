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
    <section id="home" className="section mt-0 pt-0 px-0 min-h-[85vh] lg:min-h-[78vh]justify-center items-center">
      <div className="container mx-auto">
        <div className="container mx-auto px-0 flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-between lg:gap-x-10">
          <motion.div
            variants={fadeIn("up", 0.25)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.4}}          
          >
            {/*texto */}
            <div className="flex-1 text-center font-secondary lg:text-left ">
              <h1 className="text-[40px] font-bold leading-[0.8] lg:text-[90px] mb-2">Fray <span>Toledo</span></h1>
            </div>

            <div
            className="mb-5 text-[32px] lg:text-[50px] font-secondary font-semibold uppercase text-center leading-[1] lg:text-left"> 
              <h2 className="text-white mr-2 ">Desarrollador </h2>
              <TypeAnimation sequence={[
                "back-end",
                2000,
                "front-end",
                2000,
                ".net",
                2000
              ]}
              speed={50}
              className="text-accent"
              wrapper='div'
              repeat={Infinity}
              />
            </div>

            <p className="mb-4 max-w-lg mx-auto text-justify lg:mx-0">
              Soy un programador a quien la fascina crear soluciones innovadoras y eficientes, ademas siempre estoy dispuesto a aprender y a compartir conocimientos con mis colegas para mejorar nuestro trabajo en equipo.
            </p>

            <div className="flex max-w-max gap-x-6 items-center mb-4 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contactame</button>
              <a href="#" className="text-gradient btn-link">Mi portafolio</a>
            </div>   

            {/*Redes sociales */}

            <div className="flex text-[20px] gap-x-5 max-w-max mx-auto lg:mx-0">
              <a className="cursor-pointer" href="https://www.linkedin.com/in/fray-desarrolador/" >
                <FaLinkedin />
              </a> 
              <a href="https://github.com/fraynilson2003">
                <FaGithub/>
              </a>  
              <a href="#">
                <FaYoutube/>
              </a>         
            </div>
          </motion.div>

          {/*image */}
          <motion.div 
          variants={fadeIn("down", 0.25 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.4}}         
          className=" hidden lg:flex flex-1 justify-center items-center mx-auto max-w-[320px] lg:max-w-[482px] ">
            <img src={image} alt="" />
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default Banner;
