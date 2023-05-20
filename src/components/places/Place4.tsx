import { p2, py4, py5, py6, py7 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place4: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-baseline flex-row-reverse ">
        <div className="w-full relative h-full">
          <div className="w-full flex items-start justify-start">
            <Image src={py6} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707] via-[#070707c5]"></div>
        </div>
        <div className="w-full "></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center  max-mobile:h-full ">
        <div className="width flex items-center  gap-8">
          <div className="w-full flex h-[400px] gap-4">
            <Image
              src={py7}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px]"
            />
            <div className="flex flex-col gap-4 w-full">
              <Image
                src={py4}
                alt="Image 1"
                className="object-contain h-max  w-max rounded-[10px]"
              />
              <Image
                src={py5}
                alt="Image 1"
                className="object-contain h-max w-full rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 -mt-20">
            <p className="fc">Egypt</p>
            <h3>Pyramids of Giza.</h3>
            <p>
              The Pyramids of Giza are a UNESCO World Heritage Site and one of
              the Seven Wonders of the Ancient World. Located just outside
              Cairo, these ancient structures were built as tombs for pharaohs
              during the Old Kingdom of Egypt. The most iconic among them is the
              Great Pyramid of Khufu, the largest pyramid ever built. Visitors
              can explore the pyramids' interiors, marvel at the engineering
              skills of the ancient Egyptians, and learn about the fascinating
              history and mythology surrounding these colossal structures. The
              nearby Sphinx, a massive statue with the body of a lion and the
              head of a pharaoh, is also a must-see attraction.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place4;
