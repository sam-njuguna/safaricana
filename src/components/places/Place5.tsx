"use client";
import { fadeIn, slideIn, staggerContainer } from "@/animations";
import { kg1, kg2, kg3, kg4, p4 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place5: FC<Place1Props> = ({}) => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-[5rem]"
    >
      <div className="flex w-full items-baseline max-mobile_lg:hidden">
        <motion.div
          variants={fadeIn("right", "tween", 0.6, 0.6)}
          className="w-full relative h-full"
        >
          <div className="w-full flex items-end justify-end">
            <Image src={kg3} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707]  via-[#070707c5] max-tablet_lg:to-[#070707c5]"></div>
        </motion.div>
        <div className="w-full max-tablet:w-[20%] max-tablet_lg:w-[40%]"></div>
      </div>
      <div className="absolute max-mobile_lg:relative w-full top-0 left-0 h-[600px] flex justify-center items-center flex-col  max-mobile_lg:h-full ">
        <motion.div
          variants={slideIn("up", "tween", 0.7, 0.7)}
          className="flex flex-col text-center mb-8 gap-2 "
        >
          <p className="fc">South Africa</p>
          <h3>Kruger National Park.</h3>
        </motion.div>
        <div className="width flex items-center flex-row-reverse max-mobile_lg:flex-col gap-8">
          <div className="w-full flex justify-center items-center  gap-4 max-mobile:gap-2">
            <motion.div
              variants={fadeIn("left", "tween", 0.8, 0.8)}
              className="w-full max-h-[400px] rounded-[10px] overflow-hidden"
            >
              <Image src={kg1} alt="Image 1" className="w-full h-full" />
            </motion.div>
            <div className="flex w-full flex-col gap-4 max-mobile:gap-2">
              <motion.div
                variants={fadeIn("left", "tween", 0.9, 0.9)}
                className="w-full max-h-[200px] rounded-[10px] overflow-hidden"
              >
                <Image src={kg2} alt="Image 1" className="w-full h-full" />
              </motion.div>
              <motion.div
                variants={fadeIn("left", "tween", 1, 1)}
                className="w-full max-h-[200px] rounded-[10px] overflow-hidden"
              >
                <Image src={kg4} alt="Image 1" className="w-full h-full" />
              </motion.div>
            </div>
          </div>
          <div className="w-full flex -mt-20 max-mobile_lg:mt-0">
            <motion.p variants={fadeIn("up", "tween", 1.1, 1.1)}>
              Kruger National Park in South Africa is a top safari destination,
              spanning 20,000 square kilometers. It's known for rich
              biodiversity and the chance to see Africa's "Big Five" (lion,
              elephant, buffalo, leopard, and rhinoceros) in their natural
              habitat. Accommodation options range from luxury lodges to
              self-catering campsites, and visitors can enjoy exciting game
              drives and guided walking safaris with experienced rangers. The
              park also boasts diverse wildlife like zebras, giraffes, hippos,
              and many bird species.
            </motion.p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Place5;
