"use client";
import { mara1, mara2, mara3, mara4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place2: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-baseline flex-row-reverse ">
        <div className="w-full relative h-full">
          <Image src={mara2} alt="Image 1" className=" h-full w-full" />
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707] via-[#070707c7]"></div>
        </div>
        <div className="w-full"></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center  max-mobile:h-full ">
        <div className="width flex items-center  gap-8">
          <div className="w-full flex h-[400px] gap-4">
            <Image
              src={mara1}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px]"
            />
            <div className="flex flex-col gap-4">
              <Image
                src={mara3}
                alt="Image 1"
                className="object-contain h-[200px]  w-max rounded-[10px]"
              />
              <Image
                src={mara4}
                alt="Image 1"
                className="object-contain h-[180px] w-full rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 -mt-20">
            <p className="fc">Zambia/Zimbabwe</p>
            <h3>Victoria Falls</h3>
            <p>
              Victoria Falls is a massive waterfall located on the border
              between Zambia and Zimbabwe. It is known as the largest curtain of
              falling water in the world, with a width of 1,708 meters and a
              height of 108 meters. The sheer power and beauty of the falls
              create a mesmerizing experience for visitors. The misty spray from
              the falls can be seen from miles away, giving rise to rainbows and
              a lush rainforest ecosystem in the surrounding area. Adrenaline
              junkies can enjoy thrilling activities such as white-water
              rafting, bungee jumping, and helicopter tours, while others can
              appreciate the falls' magnificence from various viewpoints and
              take leisurely walks along the trails.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place2;
