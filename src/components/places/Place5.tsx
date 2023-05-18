"use client";
import { mara1, mara2, mara3, mara4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface Place1Props {}

const Place5: FC<Place1Props> = ({}) => {
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
            <p className="fc">South Africa</p>
            <h3>Kruger National Park.</h3>
            <p>
              Kruger National Park is South Africa's premier safari destination,
              covering an area of approximately 20,000 square kilometers. It is
              renowned for its incredible biodiversity and the opportunity to
              spot Africa's "Big Five" (lion, elephant, buffalo, leopard, and
              rhinoceros) in their natural habitat. The park offers a range of
              accommodation options, from luxury lodges to self-catering
              campsites, and visitors can embark on thrilling game drives or
              guided walking safaris led by experienced rangers. In addition to
              the Big Five, Kruger is home to a wide variety of other animals,
              including zebras, giraffes, hippos, and numerous bird species.
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place5;
