import { mara1, mara2, mara3, mara4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place3: FC<Place1Props> = ({}) => {
  return (
    <div className="flex relative w-full h-[600px] max-mobile:h-full mt-[5rem]">
      <div className="flex w-full items-baseline">
        <div className="w-full relative h-full">
          <Image src={mara2} alt="Image 1" className=" h-full w-full" />
          <div className="absolute top-0 bottom-0 right-0 h-full w-full bg-gradient-to-l from-[#070707] via-[#070707c7]"></div>
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
