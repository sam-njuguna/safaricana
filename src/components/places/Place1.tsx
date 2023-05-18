"use client";
import { mara1, mara2, mara3, mara4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place1: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-baseline">
        <div className="w-full relative h-full">
          <Image src={mara2} alt="Image 1" className=" h-full w-full" />
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707] via-[#070707e2] to-[#07070778]"></div>
        </div>
        <div className="w-full"></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center  max-mobile:h-full ">
        <div className="width flex items-center flex-row-reverse gap-8">
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
            <p className="fc">Kenya</p>
            <h3>Masai Mara National Reserve.</h3>
            <p>
              Masai Mara National Reserve is a wildlife haven located in
              southwestern Kenya. It is renowned for its abundant wildlife and
              its role in hosting the Great Migration, where millions of
              wildebeests, zebras, and gazelles move between the Serengeti and
              Masai Mara in search of grazing land. Visitors can witness
              dramatic river crossings, predator-prey interactions, and an array
              of wildlife, including lions, elephants, cheetahs, and hippos. The
              reserve offers excellent game viewing opportunities through game
              drives, hot air balloon safaris, and guided walks. It is also home
              to the Maasai people, known for their vibrant culture and
              traditional way of life.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place1;
