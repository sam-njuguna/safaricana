import { fadeIn, slideIn, staggerContainer } from "@/animations";
import { p2, py4, py5, py6, py7 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place4: FC<Place1Props> = ({}) => {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-[5rem]"
    >
      <div className="flex w-full items-baseline flex-row-reverse max-mobile_lg:hidden ">
        <motion.div
          variants={fadeIn("left", "tween", 0.6, 0.6)}
          className="w-full relative h-full"
        >
          <div className="w-full flex items-start justify-start">
            <Image src={py6} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707]  via-[#070707c5] max-tablet_lg:to-[#070707c5]"></div>
        </motion.div>
        <div className="w-full max-tablet:w-[20%] max-tablet_lg:w-[40%]"></div>
      </div>
      <div className="absolute max-mobile_lg:relative w-full top-0 left-0 h-[600px] flex justify-center items-center flex-col  max-mobile_lg:h-full ">
        <motion.div
          variants={slideIn("up", "tween", 0.7, 0.7)}
          className="flex flex-col mb-8 gap-2 text-center "
        >
          <p className="fc">Egypt</p>
          <h3>Pyramids of Giza.</h3>
        </motion.div>
        <div className="width flex items-center max-mobile_lg:flex-col  gap-8">
          <div className="w-full flex h-[400px] justify-center items-center flex-row-reverse max-mobile_lg:h-full gap-4 max-mobile:gap-2">
            <motion.div
              variants={fadeIn("right", "tween", 0.8, 0.8)}
              className="w-full"
            >
              <Image
                src={py7}
                alt="Image 1"
                className="object-contain h-[340px] w-max rounded-[10px] max-mobile:max-h-[200px] max-x_mobile:max-h-[160px] max-mobile_lg:max-h-[340px] max-tablet:max-h-[250px] max-tablet_lg:max-h-[340px]"
              />
            </motion.div>
            <div className=" flex flex-col gap-4 w-full max-mobile:gap-2">
              <motion.div
                variants={fadeIn("right", "tween", 0.9, 0.9)}
                className="w-full"
              >
                <Image
                  src={py4}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", "tween", 1, 1)}
                className="w-full"
              >
                <Image
                  src={py5}
                  alt="Image 1"
                  className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
                />
              </motion.div>
            </div>
          </div>
          <div className="w-full flex  -mt-20 max-mobile_lg:mt-0">
            <motion.p variants={fadeIn("up", "tween", 1.1, 1.1)}>
              The Pyramids of Giza, a UNESCO World Heritage Site and one of the
              Seven Wonders of the Ancient World, are ancient tombs near Cairo.
              The Great Pyramid of Khufu, the largest ever built, is the most
              iconic. Visitors can explore the pyramids, admire the ancient
              engineering skills, and learn about their fascinating history and
              mythology. The nearby Sphinx, a massive statue with a lion's body
              and a pharaoh's head, is also a must-see.
            </motion.p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Place4;
