import { fadeIn, slideIn, staggerContainer } from "@/animations";
import { marr1, marr2, marr3, marr4, p1, p4 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place6: FC<Place1Props> = ({}) => {
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
            <Image src={marr1} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707]  via-[#070707c5] max-tablet_lg:to-[#070707c5]"></div>
        </motion.div>
        <div className="w-full max-tablet:w-[20%] max-tablet_lg:w-[40%]"></div>
      </div>
      <div className="absolute max-mobile_lg:relative w-full top-0 left-0 h-[600px] flex justify-center items-center flex-col  max-mobile_lg:h-full ">
        <motion.div
          variants={slideIn("up", "tween", 0.7, 0.7)}
          className="flex flex-col text-center mb-8 gap-2 "
        >
          <p className="fc">Morocco</p>
          <h3>Marrakech.</h3>
        </motion.div>
        <div className="width flex items-center max-mobile_lg:flex-col  gap-8">
          <div className="w-full flex h-[400px] justify-center items-center max-mobile_lg:h-full flex-row-reverse gap-4 max-mobile:gap-2">
            <motion.div
              variants={fadeIn("right", "tween", 0.8, 0.8)}
              className="w-full"
            >
              <Image
                src={marr3}
                alt="Image 1"
                className="object-contain h-[380px] w-max rounded-[10px] max-mobile:max-h-[230px] max-x_mobile:max-h-[170px] max-mobile_lg:max-h-[360px] max-tablet:max-h-[260px] max-tablet_lg:max-h-[340px]"
              />
            </motion.div>
            <div className="flex w-full flex-col gap-4 max-mobile:gap-2">
              <motion.div
                variants={fadeIn("right", "tween", 0.9, 0.9)}
                className="w-full"
              >
                <Image
                  src={marr2}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", "tween", 1.1, 1.1)}
                className="w-full"
              >
                <Image
                  src={marr4}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full gap-4 -mt-20 max-mobile_lg:mt-0">
            <motion.p variants={fadeIn("up", "tween", 1.1, 1.1)}>
              Marrakech is a vibrant city with old-world charm and modern
              attractions. Its medina, a UNESCO World Heritage Site, features
              bustling souks selling spices, textiles, and handicrafts. Ornate
              palaces like Bahia Palace and El Badi Palace showcase stunning
              Islamic architecture and gardens. Jemaa el-Fnaa square is a lively
              hub with performers, food stalls, and snake charmers. Majorelle
              Garden offers tranquility, the Koutoubia Mosque is worth a visit,
              and you can enjoy Moroccan cuisine and hammam experiences.
            </motion.p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Place6;
