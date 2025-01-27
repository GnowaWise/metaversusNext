"use client";

import { motion } from "framer-motion"
import { NewFeatures, TypingText, TitleText } from "../components";

import style from "../styles"
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion"
import { newFeatures } from "../constants"

const WhatsNew = () => (
  <section className={`${style.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
      className={`${style.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right","tween", 0.2,1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| What's new?" />
          <TitleText title={<>What"s new about Metaversus?</>} />

          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>

        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 ${style.flexCenter} `}
        >
          <img src="/whats-new.png" alt="what-new" className="w-[90%] h-[90%] object-contain" />
        </motion.div>
      </motion.div>
  </section>
);

export default WhatsNew;
