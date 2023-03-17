import React from "react";
//icon
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

//services
const services = [
  {
    name: "Back-end Developer",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam cumque, illo eos pariatur necessitatibus sequi inventore est, vitae reprehenderit, adipisci quia nostrum modi minus quibusdam asperiores voluptatibus iste expedita.",
    link: "ver mas"
  },
  {
    name: "Front-end Developer",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam cumque, illo eos pariatur necessitatibus sequi inventore est, vitae reprehenderit, adipisci quia nostrum modi minus quibusdam asperiores voluptatibus iste expedita.",
    link: "ver mas"
  },
  {
    name: ".NET",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quisquam cumque, illo eos pariatur necessitatibus sequi inventore est, vitae reprehenderit, adipisci quia nostrum modi minus quibusdam asperiores voluptatibus iste expedita.",
    link: "ver mas"
  },
]

const Services = () => {



  return (
    <div id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">

          {/**texto */}
          <motion.div 
            variants={fadeIn("right", 0.1)} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.2}}            
            className="flex-1 lg:bg-services lg:bg-botttom bg-no-repeat bg mix-blend-lighten bg-center mb-10 lg:mb-0"
          >
            <h2 className="h2 to-accent mb-6 ">¿Que necesitas?</h2>
            <h3 className="h3 max-w-[400px] mb-13">Soy un programador que le gusta los desafios. <br /> Tambien trabajar en equipo</h3>

            <button className="btn btn-sm">Mira mi trabajo</button>
          </motion.div>

          {/**services */}
          <motion.div
            variants={fadeIn("left", 0.15 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.2}}
          >
            {/**list services */}
            <div>

              {services?.length && services.map((se, ind)=>
                <div className="border-b border-white/20 h-[146px] h-auto mb-[34px] flex" key={ind}>

                  <div className="flex flex-col flex-1 max-w-max mx-[5px] lg:max-w-[455px] ">

                    <div className="flex flex-row justify-between">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{se.name}</h4>

                      <a href="#" className="btn w-8 h-8 mb-[5px] flex items-center justify-center">
                        <BsArrowUpRight/>
                      </a>

                    </div>

                    <p className="font-secondary leading-tight text-justify">{se.description}</p>
                  </div>

                </div>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Services;
