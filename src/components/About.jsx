import React from 'react';
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
//motion
import { motion } from "framer-motion"
import { fadeIn } from '../variants';
//


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })


  return (
    <div id="about" className="section " ref={ref}>
      <div className="container mx-auto">

        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">

          {/*image */}
          <motion.div
            variants={fadeIn("right", 0.1 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.3}}  
            className="flex-1 bg-about bg-contain bg-no-repeat max-h-[280px] h-[200px] mix-blend-lighten bg-top lg:h-[500px] lg:max-h-[500px]">
          </motion.div>
          
          {/*text */}
          <motion.div
            variants={fadeIn("left", 0.15 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.3}}  
            className="flex-1"
          >
            <h2 className="h2 text-accent">Mas sobre.</h2>
            <h3 className="h3 mb-4">Un desarrollador Back-end, Front-end y .Net</h3>
            <p className="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur architecto atque neque distinctio quam eius officiis. Odio laudantium dolorem provident ab, iste culpa quaerat tempora quibusdam architecto perspiciatis aut.</p>

            {/**Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-4">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView?
                    <CountUp start={0} end={8} duration={2} delay={0.2}/> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Proyectos completados
                </div>

              </div>
            </div>

            <div className="flex gap-x-8 justify-center lg:justify-start">
              <button className="btn btn-lg  ">Contactame</button>
              <a href="#" className="flex text-gradient btn-link items-center">
                Mi portafolio
              </a>
              </div>        

          </motion.div>
        </div>
      </div>

    </div>
)}

export default About;
