"use client";
import { p1, p3, p4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <section className="footer pt-20" id="end">
      <div className="width h-[600px] relative  flex-col flex justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center ">
          <p>You've arrived at the end of this, </p>
          <h2>Enthralling Exploration</h2>
          <p className="w-[50%] max-mobile:w-full">
            Goodbye and thank you for joining us on this journey to discover
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
              href="https://discord.com/channels/@samnj#1756"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text_c font-bold px-1 duration-300 ease-out hover:underline hover:text-text_t"
            >
              Discord
            </a>
            .
          </p>
        </div>
        <Image
          src={p4}
          alt="header"
          className="object-fit absolute top-0 left-0 h-[80px]  w-max duration-300 ease-out"
        />
        <Image
          src={p1}
          alt="header"
          className="object-fit absolute bottom-0 right-0 h-[100px] max-mobile:h-[40px]  w-max duration-300 ease-out"
        />
      </div>

      <Image
        src={p3}
        alt="header"
        className="object-fit  h-full w-full duration-300 ease-out"
      />
    </section>
  );
};

export default Footer;
