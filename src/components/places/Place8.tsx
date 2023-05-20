import { bwindi1, bwindi2, bwindi3, bwindi5, p3 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place8: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-baseline flex-row-reverse ">
        <div className="w-full relative h-full">
          <div className="w-full flex items-start justify-start">
            <Image src={bwindi1} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#070707] via-[#070707c5]"></div>
        </div>
        <div className="w-full "></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center  max-mobile:h-full ">
        <div className="width flex items-center  gap-8">
          <div className="w-full flex h-[400px] gap-4">
            <Image
              src={bwindi3}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px]"
            />
            <div className="flex flex-col gap-4">
              <Image
                src={bwindi2}
                alt="Image 1"
                className="object-contain h-max  w-max rounded-[10px]"
              />
              <Image
                src={bwindi5}
                alt="Image 1"
                className="object-contain h-max w-full rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 -mt-20">
            <p className="fc">Uganda</p>
            <h3>Bwindi Impenetrable Forest.</h3>
            <p>
              Bwindi Impenetrable Forest is a biodiverse rainforest located in
              southwestern Uganda. It is home to almost half of the world's
              population of endangered mountain gorillas. Visitors can embark on
              gorilla trekking expeditions, where they have the opportunity to
              observe these magnificent creatures in their natural habitat. The
              forest also offers stunning landscapes, rich birdlife, and
              cultural encounters with the local Batwa pygmy community.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place8;