"use client";
import { slideIn } from "@/animations";
import { fadeIn, staggerContainer } from "@/animations";
import { btn, h1, h2, h3, p4 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <motion.section
      className="home pt-[10rem]"
      id=""
      variants={staggerContainer(0.2, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="width h-[500px]  max-mobile_lg:h-full max-tablet_lg:overflow-hidden ">
        <div className="flex items-center max-mobile_l:flex-col">
          <div className=" flex flex-col w-[80%] max-mobile_l:w-full gap-y-4">
            <div className="">
              <motion.h1 variants={slideIn("left", "tween", 0.7, 0.7)}>
                Discover
              </motion.h1>
              <motion.h1 variants={slideIn("left", "tween", 0.8, 0.8)}>
                Africa🌍
              </motion.h1>
            </div>
            <motion.p variants={slideIn("left", "tween", 1, 0.7)}>
              Unlock the captivating allure of Africa and embark on a journey of
              breathtaking landscapes, vibrant cultures, and untamed adventures.
            </motion.p>

            <motion.a
              variants={slideIn("left", "tween", 0.9, 0.9)}
              className="border-[2px] border-transparent hover:border-[#985A27]  relative h-[50px] flex items-center justify-center  w-[180px] group duration-300 ease-out mt-8"
              href="#places"
            >
              <span className=" absolute z-20 -top-[2px] left-2 block bg-bg  h-[2px] duration-500 ease-out w-[20%] "></span>
              <span className=" absolute z-20 -bottom-[2px] right-2 block bg-bg  h-[2px] duration-500 ease-out w-[20%] "></span>
              <Image
                src={btn}
                alt="Image 1"
                className="object-cover w-full duration-500 ease-out group-hover:pl-[200px]  "
              />
              <span className="flex items-center gap-1  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="block h-[4px] w-6 bg-bg_btn_var duration-1000 ease-out group-hover:bg-white group-hover:w-4"></span>
                <span className="uppercase text-black font-bold text-[12px] tracking-[2px] group-hover:text-text_c">
                  Explore
                </span>
              </span>
            </motion.a>
          </div>
          <div className="w-full max-mobile_l:mt-8">
            <div className="flex gap-4 max-mobile:flex-col w-full">
              <motion.div
                variants={fadeIn("right", "tween", 1, 1)}
                className="w-full max-h-[400px] rounded-[10px] overflow-hidden  max-mobile_l:hidden"
              >
                <Image
                  src={h2}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex flex-col gap-4 w-full">
                <motion.div
                  variants={fadeIn("right", "tween", 1.1, 1.1)}
                  className=" w-full max-h-[200px] max-mobile:max-h-[200px] max-mobile_l:max-h-[250px] rounded-[10px] overflow-hidden"
                >
                  <Image
                    src={h1}
                    alt="Image 2"
                    className="w-full h-full  object-cover"
                  />
                </motion.div>

                <div className="flex gap-4">
                  <motion.div
                    variants={fadeIn("right", "tween", 1.2, 1.2)}
                    className=" max-w-[100px]"
                  >
                    <Image src={p4} alt="Image 2" className="h-auto w-full" />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", "tween", 1.3, 1.3)}
                    className=" w-full max-h-[200px] max-mobile:max-h-[200px]  max-mobile_l:max-h-[250px]  rounded-[10px] overflow-hidden"
                  >
                    <Image
                      src={h3}
                      alt="Image 3"
                      className="w-full h-full  object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
