"use client";

import { p1, vic1, vic2, vic3, vic4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place2: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-[5rem]">
      <div className="flex w-full items-center flex-row-reverse max-mobile_lg:hidden ">
        <div className="w-full relative h-full">
          <div className="w-full flex items-start justify-start">
            <Image src={vic2} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707] via-[#070707c5]"></div>
        </div>
        <div className="w-full "></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] z-20 flex justify-center items-center flex-col max-mobile_lg:relative  max-mobile_lg:h-full ">
        <div className="flex flex-col text-center mb-8 gap-2 ">
          <p className="fc">Zambia/Zimbabwe</p>
          <h3>Victoria Falls</h3>
        </div>
        <div className="width flex items-center max-mobile_lg:flex-col gap-8">
          <div className="w-full flex h-[400px] justify-center flex-row-reverse items-center max-mobile_lg:h-full gap-4">
            <Image
              src={vic1}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px] max-mobile:max-h-[240px] max-mobile_lg:max-h-[350px]"
            />
            <div className="flex flex-col gap-4">
              <Image
                src={vic4}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
              />
              <Image
                src={vic3}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex  -mt-20 max-mobile_lg:mt-0">
            <p>
              Victoria Falls is a massive waterfall on the Zambia-Zimbabwe
              border. It's the largest curtain of falling water worldwide, with
              a width of 1,708 meters and a height of 108 meters. The falls'
              power and beauty captivate visitors, creating a mesmerizing
              experience. The misty spray forms rainbows and sustains a lush
              rainforest ecosystem nearby. Thrill-seekers enjoy white-water
              rafting, bungee jumping, and helicopter tours, while others
              appreciate the falls' magnificence from viewpoints and walking
              trails.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place2;
