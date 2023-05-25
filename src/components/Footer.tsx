"use client";
import { slideIn, staggerContainer } from "@/animations";
import { p1, p3, p4 } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="footer pt-20"
      id="end"
    >
      <div className="width h-[600px] relative  flex-col flex justify-center items-center text-center">
        <motion.div className="flex flex-col justify-center items-center ">
          <motion.p variants={slideIn("up", "tween", 0.6, 0.6)}>
            You've arrived at the end of this,{" "}
          </motion.p>
          <motion.h2 variants={slideIn("up", "tween", 0.7, 0.7)}>
            Enthralling Exploration
          </motion.h2>
          <motion.p
            variants={slideIn("up", "tween", 0.8, 0.8)}
            className="w-[50%] max-mobile:w-full"
          >
            Goodbye👋 and thank you for joining me on this journey to discover
            Africa. If you're interested in staying connected, feel free to
            connect with me via
            <a
              href="https://www.linkedin.com/in/samson-njuguna-896a02243"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_c font-bold px-1 duration-300 ease-out hover:underline hover:text-text_t"
            >
              LinkedIn,
            </a>
            <a
              href="https://github.com/sam-njuguna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_c font-bold px-1 duration-300 ease-out hover:underline hover:text-text_t"
            >
              GitHub
            </a>
            or
            <a
              href="https://discord.com/users/1038333075433721926"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_c font-bold px-1 duration-300 ease-out hover:underline hover:text-text_t"
            >
              Discord
            </a>
            .
          </motion.p>
        </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.9, 0.9)}
          className="absolute top-0 left-0 "
        >
          <Image
            src={p4}
            alt="header"
            className="object-fit h-[80px]  w-max duration-300 "
          />
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 1, 1)}
          className="absolute bottom-0 right-0 "
        >
          <Image
            src={p1}
            alt="header"
            className="object-fit h-[100px] max-mobile:h-[40px]  w-max"
          />
        </motion.div>
      </div>

      <Image
        src={p3}
        alt="header"
        className="object-fit h-full max-mobile:h-[80px] w-full duration-300 ease-out"
      />
    </motion.section>
  );
};

export default Footer;
