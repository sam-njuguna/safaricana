import { fact, p1, p2, p4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface FactsProps {}

const Facts: FC<FactsProps> = ({}) => {
  return (
    <section className="facts pt-20" id="facts">
      <div className="width">
        <div className="w-full justify-center items-center text-center mb-4">
          <h2>Travel Facts </h2>
          <h2 className="text-text_c">About Africa</h2>
        </div>
      </div>
      <div className="relative h-[500px] max-mobile:h-full">
        <Image
          src={p2}
          alt="Image 1"
          className="object-contain w-full h-[500px] max-mobile:h-full"
        />
        <div className="absolute bottom-0 left-4">
          <Image
            src={p1}
            alt="Image 1"
            className="object-contain w-full h-max"
          />
        </div>
        <div className="absolute bottom-1/2 translate-y-1/2 transform right-4 max-mobile:right-0">
          <Image
            src={p4}
            alt="Image 1"
            className="object-contain w-full h-max"
          />
        </div>

        <div className="absolute max-mobile:relative top-0 w-full left-0 max-mobile:-mt-16">
          <div className="width h-[500px] max-mobile:h-full max-mobile:flex-col  flex justify-center items-center relative">
            <div className="w-[30%] max-mobile:w-full relative  max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0  z-20 ">
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[90%] h-full w-full duration-300 ease-out "
              />
              <p className="text-[14px] text-black  font-medium absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa is the second-largest continent in the world, both in
                terms of land area and population.
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative top-5 max-mobile_lg:top-0 left-0  z-10rounded-br-[20px]">
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[90%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa hosts natural wonders eg Victoria Falls, the Nile
                River,National Park, and the Sahara Desert.
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile_lg:top-0 absolute max-mobile:relative top-[7%] max-tablet:top-[3%] right-0 z-10 ">
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[90%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa boasts diverse cultural heritage, including vibrant
                traditions, music, dance, art, and cuisine.
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile_lg:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative bottom-0 left-[10%]  z-10 ">
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[90%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Wildlife safaris provide opportunities to see the "Big Five"
                (elephant, lion, leopard, buffalo, and rhinoceros) .
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-tablet:w-[40%] max-mobile_lg:w-[50%] max-tablet_lg:w-[35%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative bottom-[10%] max-mobile_lg:bottom-0 max-tablet:bottom-[3%] right-0 z-10 ">
              <Image
                src={fact}
                alt="header"
                className="object-contain brightness-[90%] h-full w-full duration-300 ease-out"
              />
              <p className="text-[14px] text-text_c absolute w-[80%] max-mobile_lg:w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Africa features diverse landscapes: deserts eg Sahara, alongside
                savannas, rainforests, mountains, and coastlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
