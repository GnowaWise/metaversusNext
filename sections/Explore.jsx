"use client";

import { useState } from "react";
import { motion } from "framer-motion"
import { TypingText, ExploreCard, TitleText } from "../components";

import style from "../styles"
import { staggerContainer } from "../utils/motion"
import { exploreWorlds } from "../constants"

const Explore = () => {
  const [active,setActive] = useState("world-2");
  return(
    <section className={`${style.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once:false, amount:0.5 }}
        className={`${style.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The Worlds" textStyles="text-center"/>
        <TitleText title={<>Choose the world you want to explore<br className="md:block hidden"/></>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world,index) => 
            <ExploreCard 
              key={world.id} 
              {...world} 
              index={index}
              active={active}
              handleClick={setActive}
            /> )}
        </div>
      </motion.div>
    </section>
  )
  
}

export default Explore;
