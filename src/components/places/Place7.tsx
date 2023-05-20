"use client";

import { p4, soss1, soss2, soss3, soss4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place7: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-baseline">
        <div className="w-full relative h-full">
          <div className="w-full flex items-end justify-end">
            <Image src={soss3} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707] via-[#070707c5]"></div>
        </div>

        <div className="w-full"></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center  max-mobile:h-full ">
        <div className="width flex items-center flex-row-reverse gap-8">
          <div className="w-full flex h-[400px] flex-row-reverse gap-4">
            <Image
              src={soss2}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px]"
            />
            <div className="flex flex-col gap-4">
              <Image
                src={soss1}
                alt="Image 1"
                className="object-contain h-max  w-max rounded-[10px]"
              />
              <Image
                src={soss4}
                alt="Image 1"
                className="object-contain h-max w-full rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 -mt-20">
            <p className="fc">Namibia</p>
            <h3>Sossusvlei.</h3>
            <p>
              Sossusvlei is a surreal desert landscape located within the
              Namib-Naukluft National Park in Namibia. It is characterized by
              towering red sand dunes, some of which are among the highest in
              the world. The contrast between the fiery orange dunes, the deep
              blue sky, and the stark white clay pans creates a stunning visual
              spectacle. Visitors can climb the dunes to enjoy panoramic views,
              explore the Deadvlei, a dried-up clay pan with iconic dead camel
              thorn trees, and take part in thrilling activities such as
              sandboarding and hot air balloon rides. Sossusvlei is a
              photographer's paradise and offers a unique and otherworldly
              experience in the heart of the desert.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place7;
