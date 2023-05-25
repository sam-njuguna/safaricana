"use client";
import { fadeIn, slideIn, staggerContainer } from "@/animations";
import { mara1, mara2, mara3, mara4 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place1: FC<Place1Props> = ({}) => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-20 max-mobile:mt-8"
    >
      <div className="flex w-full items-center  max-mobile_lg:hidden">
        <motion.div
          variants={fadeIn("right", "tween", 0.6, 0.6)}
          className="w-full relative h-full"
        >
          <div className="w-full flex items-end justify-end">
            <Image src={mara2} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707]  via-[#070707c5] max-tablet_lg:to-[#070707c5]"></div>
        </motion.div>
        <div className="w-full max-tablet:w-[20%]"></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center flex-col max-mobile_lg:relative  max-mobile:h-full ">
        <motion.div
          variants={slideIn("up", "tween", 0.7, 0.7)}
          className="flex flex-col text-center mb-8 gap-2 "
        >
          <p className="fc">Kenya</p>
          <h3>Masai Mara National Reserve.</h3>
        </motion.div>
        <div className="width flex items-center flex-row-reverse max-mobile_lg:flex-col gap-8 ">
          <div className="w-full flex justify-center items-center h-[400px] max-mobile_lg:h-full gap-4 max-mobile:gap-2">
            <motion.div
              className="w-full"
              variants={fadeIn("left", "tween", 0.8, 0.8)}
            >
              <Image
                src={mara1}
                alt="Image 1"
                className="object-contain h-[400px] w-max rounded-[10px] max-mobile:max-h-[230px] max-x_mobile:max-h-[170px] max-mobile_lg:max-h-[360px] max-tablet:max-h-[260px] max-tablet_lg:max-h-[340px]"
              />
            </motion.div>
            <div className=" w-full flex flex-col gap-4 max-mobile:gap-2">
              <motion.div
                className="w-full"
                variants={fadeIn("left", "tween", 0.9, 0.9)}
              >
                <Image
                  src={mara3}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] max-tablet_lg:max-h-[200px] w-max rounded-[10px]"
                />
              </motion.div>
              <motion.div
                className="w-full"
                variants={fadeIn("left", "tween", 1, 1)}
              >
                <Image
                  src={mara4}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] max-tablet_lg:max-h-[200px]  w-max rounded-[10px]"
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full flex  max-mobile_lg:mt-0 overflow:hidden">
            <motion.p variants={fadeIn("up", "tween", 1.1, 1.1)}>
              Masai Mara National Reserve in Kenya is a wildlife haven famous
              for its abundant wildlife and hosting the Great Migration.
              Visitors can witness river crossings, predator-prey interactions,
              and diverse wildlife, including lions, elephants, cheetahs, and
              hippos. The reserve offers game drives, hot air balloon safaris,
              and guided walks for excellent viewing. It is also home to the
              Maasai people, known for their vibrant culture and traditional way
              of life.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Place1;
