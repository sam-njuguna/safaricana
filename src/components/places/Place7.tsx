"use client";

import { p4, soss1, soss2, soss3, soss4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place7: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-[5rem]">
      <div className="flex w-full items-baseline max-mobile_lg:hidden">
        <div className="w-full relative h-full">
          <div className="w-full flex items-end justify-end">
            <Image src={soss3} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707] via-[#070707c5]"></div>
        </div>

        <div className="w-full"></div>
      </div>
      <div className="absolute max-mobile_lg:relative w-full top-0 left-0 h-[600px] flex justify-center items-center flex-col  max-mobile_lg:h-full ">
        <div className="flex flex-col text-center mb-8 gap-2 ">
          <p className="fc">Namibia</p>
          <h3>Sossusvlei.</h3>
        </div>
        <div className="width flex items-center flex-row-reverse max-mobile_lg:flex-col gap-8">
          <div className="w-full flex h-[400px] justify-center items-center max-mobile_lg:h-full  gap-4 max-mobile:gap-2">
            <Image
              src={soss2}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px] max-mobile:max-h-[250px] max-mobile_lg:max-h-[350px]"
            />
            <div className="flex flex-col gap-4 max-mobile:gap-2">
              <Image
                src={soss1}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
              />
              <Image
                src={soss4}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex  -mt-20 max-mobile_lg:mt-0">
            <p>
              Sossusvlei in Namibia's Namib-Naukluft National Park is a surreal
              desert with towering red sand dunes, some of the world's highest.
              The fiery orange dunes, blue sky, and white clay pans create a
              stunning spectacle. Visitors can climb dunes for panoramic views,
              explore Deadvlei's iconic dead camel thorn trees, and enjoy
              sandboarding and hot air balloon rides. Sossusvlei is a
              photographer's paradise, offering a unique and otherworldly desert
              experience.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place7;
