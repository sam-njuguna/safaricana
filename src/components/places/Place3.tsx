import { mara1, mara2, mara3, mara4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place3: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-baseline max-mobile_lg:hidden">
        <div className="w-full relative h-full">
          <div className="w-full flex items-end justify-end">
            <Image src={mara2} alt="Image 1" className=" h-[600px] w-max" />
          </div>
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707] via-[#070707c5]"></div>
        </div>
        <div className="w-full"></div>
      </div>
      <div className="absolute w-full top-0 left-0 h-[600px] flex justify-center items-center max-mobile_lg:relative  max-mobile:h-full ">
        <div className="width flex items-center flex-row-reverse max-mobile:flex-col gap-8">
          <div className="w-full flex h-[400px] max-mobile:h-full gap-4">
            <Image
              src={mara1}
              alt="Image 1"
              className="object-contain h-[400px] w-max rounded-[10px] max-mobile:max-h-[240px] max-mobile_lg:max-h-[360px] max-tablet:max-h-[290px] max-tablet_lg:max-h-[340px]"
            />
            <div className="flex flex-col gap-4">
              <Image
                src={mara3}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[200px] w-max rounded-[10px]"
              />
              <Image
                src={mara4}
                alt="Image 1"
                className="object-contain h-max max-mobile:h-max max-mobile_lg:max-h-[200px] w-max rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 -mt-20 max-mobile_lg:mt-0">
            <p className="fc">Tanzania</p>
            <h3>Serengeti National Park.</h3>
            <p>
              Serengeti National Park is one of Africa's most famous and
              spectacular wildlife reserves. It stretches over 14,750 square
              kilometers and is home to a diverse array of wildlife, including
              lions, elephants, giraffes, zebras, and cheetahs. One of the
              park's main attractions is the annual wildebeest migration, where
              millions of wildebeests, accompanied by zebras and gazelles, move
              in search of fresh grazing land. This natural spectacle is
              considered one of the greatest wildlife shows on Earth. Visitors
              can enjoy game drives, hot air balloon safaris, and guided walks
              to observe the wildlife and immerse themselves in the breathtaking
              landscapes of the Serengeti.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place3;
