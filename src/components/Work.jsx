import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
//img
import img1 from "../assets/portfolio-img1.png"
import img2 from "../assets/portfolio-img2.png"
import img3 from "../assets/portfolio-img3.png"




const Work = () => {
  

  return (

    <section id="work" className="section">
      <div className="container mx-auto my-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div 
            variants={fadeIn("right", 0.1 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.2}}            
            className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/**Text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit doloremque ipsum eaque minima delenitir!</p>

              <button className="btn btn-sm ">View all projects</button>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 :">

              </div>
              <img src={img1} alt="img1" className="group-hover:scale-125 transition-all duration-400" />
              {/* pretittle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">
                  UI/UX Design
                </span>
              </div>

              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
               <span span className="text-3xl text-white">
                  Project Tittle
                </span>
              </div>

            </div>

          </motion.div>

          <motion.div 
            variants={fadeIn("left", 0.07 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.18}}   
           className="flex-1 flex flex-col gap-y-8 justify-between"
           >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 :">

              </div>
              <img src={img2} alt="img2" className="group-hover:scale-125 transition-all duration-400" />
              {/* pretittle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">
                  UI/UX Design
                </span>
              </div>

              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
               <span span className="text-3xl text-white">
                  Project Tittle
                </span>
              </div>

            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 :">

              </div>
              <img src={img3} alt="img2" className="group-hover:scale-125 transition-all duration-400" />
              {/* pretittle  */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
                <span className="text-gradient">
                  UI/UX Design
                </span>
              </div>

              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
               <span span className="text-3xl text-white">
                  Project Tittle
                </span>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Work;
