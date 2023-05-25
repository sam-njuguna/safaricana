"use client";
import { fadeIn, slideIn, staggerContainer } from "@/animations";
import { fact, p1, p2, p4, btn } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface FactsProps {}

const Facts: FC<FactsProps> = ({}) => {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="facts pt-20 overflow-hidden"
      id="facts"
    >
      <div className="width">
        <div className="w-full justify-center items-center text-center mb-4">
          <motion.h2 variants={slideIn("up", "tween", 0.6, 0.6)}>
            Travel Facts
          </motion.h2>
          <motion.h2
            variants={fadeIn("up", "tween", 0.7, 0.7)}
            className="text-text_c"
          >
            About Africa
          </motion.h2>
        </div>
      </div>
      <div className="relative h-[500px] max-mobile:h-full overflow-hidden">
        <motion.div
          className="relative"
          variants={fadeIn("up", "tween", 0.8, 0.8)}
        >
          <Image
            src={p2}
            alt="Image 1"
            className="object-contain w-full h-[500px] max-mobile:h-full"
          />

          <div className="absolute max-mobile:hidden bottom-0 left-0 h-[100px] w-full bg-gradient-to-t from-[#070707]  via-[#070707c5] max-tablet_lg:to-[#070707c5]"></div>
        </motion.div>

        <motion.div
          variants={slideIn("left", "tween", 0.85, 0.85)}
          className="absolute bottom-0 left-4"
        >
          <Image
            src={p1}
            alt="Image 1"
            className="object-contain w-full h-max max-mobile:h-[60px] "
          />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.9, 0.9)}
          className="absolute bottom-1/2 translate-y-1/2 transform right-4 max-mobile:right-0"
        >
          <Image
            src={p4}
            alt="Image 1"
            className="object-contain w-full h-max"
          />
        </motion.div>

        <div className="absolute max-mobile:relative top-0 w-full left-0 max-mobile:-mt-16">
          <div className="width h-[500px] max-mobile:h-full max-mobile:flex-col  flex justify-center items-center relative">
            <motion.div
              variants={fadeIn("up", "tween", 1, 1)}
              className="w-[30%] max-mobile:w-full relative  max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0  z-20 "
            >
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[85%] h-full w-full duration-300 ease-out "
              />
              <p className="text-[14px] text-black  font-medium absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa is the second-largest continent in the world, both in
                terms of land area and population.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("left", "tween", 1.1, 1.1)}
              className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative top-5 max-mobile_lg:top-0 left-0  z-10rounded-br-[20px]"
            >
              <Image
                src={btn}
                alt="header"
                className="object-contain brightness-[85%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa hosts natural wonders eg Victoria Falls, the Nile
                River,National Park, and the Sahara Desert.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("right", "tween", 1.2, 1.2)}
              className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile_lg:top-0 absolute max-mobile:relative top-[7%] max-tablet:top-[3%] right-0 z-10 "
            >
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[85%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa boasts diverse cultural heritage, including vibrant
                traditions, music, dance, art, and cuisine.
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("left", "tween", 1.3, 1.3)}
              className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile_lg:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative bottom-0 left-[10%]  z-10 "
            >
              <Image
                src={btn}
                alt="header"
                className="object-contain brightness-[85%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Wildlife safaris provide opportunities to see the "Big Five"
                (elephant, lion, leopard, buffalo, and rhinoceros) .
              </p>
            </motion.div>
            <motion.div
              variants={slideIn("right", "tween", 1.4, 1.4)}
              className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative bottom-[10%] max-mobile_lg:bottom-0 max-tablet:bottom-[3%] right-0 z-10 "
            >
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[85%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa features diverse landscapes: deserts eg Sahara, alongside
                savannas, rainforests, mountains, and coastlines.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Facts;
