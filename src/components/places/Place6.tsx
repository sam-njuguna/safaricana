import { marr1, marr2, marr3, marr4, p1, p4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place6: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-center flex-row-reverse ">
        <div className="w-full relative h-full">
          <div className="w-full flex items-start justify-start">
            <Image src={marr1} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707] via-[#070707c5]"></div>
        </div>
        <div className="w-full "></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center  max-mobile:h-full ">
        <div className="width flex items-center  gap-8">
          <div className="w-full flex h-[400px] gap-4">
            <Image
              src={marr3}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px]"
            />
            <div className="flex flex-col gap-4">
              <Image
                src={marr2}
                alt="Image 1"
                className="object-contain h-max  w-max rounded-[10px]"
              />
              <Image
                src={marr4}
                alt="Image 1"
                className="object-contain h-max w-full rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 -mt-20">
            <p className="fc">Morocco</p>
            <h3>Marrakech.</h3>
            <p>
              Marrakech is a vibrant city that offers a unique blend of
              old-world charm and modern attractions. The heart of the city is
              the medina, a UNESCO World Heritage Site, where narrow winding
              streets are filled with bustling souks (markets) selling spices,
              textiles, ceramics, and traditional Moroccan handicrafts. The city
              is famous for its ornate palaces, such as Bahia Palace and El Badi
              Palace, showcasing exquisite Islamic architecture and beautiful
              gardens. The Jemaa el-Fnaa square is a lively hub with street
              performers, food stalls, and snake charmers, creating a bustling
              atmosphere day and night. Visitors can also explore the tranquil
              Majorelle Garden, visit the Koutoubia Mosque, and indulge in
              Moroccan cuisine and traditional hammam experiences.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place6;
