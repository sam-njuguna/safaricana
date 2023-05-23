"use client";
import { mara1, mara2, mara3, mara4, p3 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place1: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-[5rem]">
      <div className="flex w-full items-center  max-mobile_lg:hidden">
        <div className="w-full relative h-full">
          <div className="w-full flex items-end justify-end">
            <Image src={mara2} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707]  via-[#070707c5] max-tablet_lg:to-[#070707c5]"></div>
        </div>
        <div className="w-full max-tablet:w-[20%]"></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center flex-col max-mobile_lg:relative  max-mobile:h-full ">
        <div className="flex flex-col text-center mb-8 gap-2 ">
          <p className="fc">Kenya</p>
          <h3>Masai Mara National Reserve.</h3>
        </div>
        <div className="width flex items-center flex-row-reverse max-mobile_lg:flex-col gap-8 ">
          <div className="w-full flex justify-center items-center h-[400px] max-mobile_lg:h-full gap-4 max-mobile:gap-2">
            <Image
              src={mara1}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px] max-mobile:max-h-[240px] max-mobile_lg:max-h-[360px] max-tablet:max-h-[290px] max-tablet_lg:max-h-[340px]"
            />
            <div className="flex flex-col gap-4 max-mobile:gap-2">
              <Image
                src={mara3}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] max-tablet_lg:max-h-[200px] w-max rounded-[10px]"
              />
              <Image
                src={mara4}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] max-tablet_lg:max-h-[200px]  w-max rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex -mt-20 max-mobile_lg:mt-0">
            <p>
              Masai Mara National Reserve in Kenya is a wildlife haven famous
              for its abundant wildlife and hosting the Great Migration.
              Visitors can witness river crossings, predator-prey interactions,
              and diverse wildlife, including lions, elephants, cheetahs, and
              hippos. The reserve offers game drives, hot air balloon safaris,
              and guided walks for excellent viewing. It is also home to the
              Maasai people, known for their vibrant culture and traditional way
              of life.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place1;
