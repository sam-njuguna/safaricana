import { p2, py4, py5, py6, py7 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place4: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile_lg:h-full mt-[5rem]">
      <div className="flex w-full items-baseline flex-row-reverse max-mobile_lg:hidden ">
        <div className="w-full relative h-full">
          <div className="w-full flex items-start justify-start">
            <Image src={py6} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707] via-[#070707c5]"></div>
        </div>
        <div className="w-full "></div>
      </div>
      <div className="absolute max-mobile_lg:relative w-full top-0 left-0 h-[600px] flex justify-center items-center flex-col  max-mobile_lg:h-full ">
        <div className="flex flex-col mb-8 gap-2 text-center ">
          <p className="fc">Egypt</p>
          <h3>Pyramids of Giza.</h3>
        </div>
        <div className="width flex items-center max-mobile_lg:flex-col  gap-8">
          <div className="w-full flex h-[400px] justify-center items-center flex-row-reverse max-mobile_lg:h-full gap-4">
            <Image
              src={py7}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px] max-mobile:max-h-[240px] max-mobile_lg:max-h-[350px]"
            />
            <div className="flex flex-col gap-4 w-full max-mobile:gap-2">
              <Image
                src={py4}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
              />
              <Image
                src={py5}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[170px] w-max rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex  -mt-20 max-mobile_lg:mt-0">
            <p>
              The Pyramids of Giza, a UNESCO World Heritage Site and one of the
              Seven Wonders of the Ancient World, are ancient tombs near Cairo.
              The Great Pyramid of Khufu, the largest ever built, is the most
              iconic. Visitors can explore the pyramids, admire the ancient
              engineering skills, and learn about their fascinating history and
              mythology. The nearby Sphinx, a massive statue with a lion's body
              and a pharaoh's head, is also a must-see.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place4;
