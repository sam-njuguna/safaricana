"use client";

import { fadeIn, slideIn, staggerContainer } from "@/animations";
import { vic1, vic2, vic3, vic4 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place2: FC<Place1Props> = ({}) => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-[5rem]"
    >
      <div className="flex w-full items-center flex-row-reverse max-mobile_lg:hidden ">
        <motion.div
          variants={fadeIn("left", "tween", 0.6, 0.6)}
          className="w-full relative h-full"
        >
          <div className="w-full flex items-start justify-start">
            <Image src={vic2} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707]  via-[#070707c5] max-tablet_lg:to-[#070707c5]"></div>
        </motion.div>
        <div className="w-full max-tablet:w-[20%] max-tablet_lg:w-[40%]"></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] z-20 flex justify-center items-center flex-col max-mobile_lg:relative  max-mobile_lg:h-full ">
        <motion.div
          variants={slideIn("up", "tween", 0.7, 0.7)}
          className="flex flex-col text-center mb-8 gap-2 "
        >
          <p className="fc">Zambia/Zimbabwe</p>
          <h3>Victoria Falls</h3>
        </motion.div>
        <div className="width flex items-center max-mobile_lg:flex-col gap-8">
          <div className="w-full flex h-[400px] justify-center flex-row-reverse items-center max-mobile_lg:h-full gap-4 max-mobile:gap-2">
            <motion.div
              variants={fadeIn("right", "tween", 0.8, 0.8)}
              className="w-full"
            >
              <Image
                src={vic1}
                alt="Image 1"
                className="object-contain h-[380px] w-max rounded-[10px] max-mobile:max-h-[230px] max-x_mobile:max-h-[170px] max-mobile_lg:max-h-[360px] max-tablet:max-h-[260px] max-tablet_lg:max-h-[340px]"
              />
            </motion.div>
            <div className="w-full flex flex-col gap-4 max-mobile:gap-2">
              <motion.div
                variants={fadeIn("right", "tween", 0.9, 0.9)}
                className="w-full"
              >
                <Image
                  src={vic4}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", "tween", 1, 1)}
                className="w-full"
              >
                <Image
                  src={vic3}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full flex   max-mobile_lg:mt-0">
            <motion.p variants={fadeIn("up", "tween", 1.1, 1.1)}>
              Victoria Falls is a massive waterfall on the Zambia-Zimbabwe
              border. Its the largest curtain of falling water worldwide, with a
              width of 1708 meters and a height of 108 meters. The falls power
              and beauty captivate visitors, creating a mesmerizing experience.
              The misty spray forms rainbows and sustains a lush rainforest
              ecosystem nearby. Thrill-seekers enjoy white-water rafting, bungee
              jumping, and helicopter tours, while others appreciate the falls
              magnificence from viewpoints and walking trails.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Place2;
