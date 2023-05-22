import { p1, p2, p4 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface FactsProps {}

const Facts: FC<FactsProps> = ({}) => {
  return (
    <div className="facts">
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

        <div className="absolute max-mobile:relative top-0 w-full left-0 max-mobile:-mt-8">
          <div className="width h-[500px] max-mobile:h-full max-mobile:flex-col gap-4 flex justify-center items-center relative">
            <div className="w-[30%] max-mobile:w-full max-mobile_lg:w-[45%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 bg-bg_btn_var z-20 p-4 rounded-br-[20px] rounded-tl-[20px] text-text_c ">
              <p className="font-medium max-mobile_lg:text-[14px]">
                Africa is the second-largest continent in the world, both in
                terms of land area and population.
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-mobile_lg:w-[45%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative top-5 max-mobile_lg:top-0 left-0 bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p className="max-mobile_lg:text-[14px]">
                Africa hosts natural wonders eg Victoria Falls, the Nile
                River,National Park, and the Sahara Desert.
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-mobile_lg:w-[45%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile_lg:top-0 absolute max-mobile:relative top-[7%] right-0 bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p className="max-mobile_lg:text-[14px]">
                Africa boasts diverse cultural heritage, including vibrant
                traditions, music, dance, art, and cuisine.
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-mobile_lg:w-[45%] max-mobile_lg:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative bottom-0 left-[10%] bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p className="max-mobile_lg:text-[14px]">
                Wildlife safaris provide opportunities to see the "Big Five" and
                other unique species.
              </p>
            </div>
            <div className="w-[30%] max-mobile:w-full max-mobile_lg:w-[45%] max-mobile:left-0 max-mobile:bottom-0 max-mobile:right-0 max-mobile:top-0 absolute max-mobile:relative bottom-[10%] max-mobile_lg:bottom-0 right-0 bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p className="max-mobile_lg:text-[14px]">
                Africa features diverse landscapes: deserts eg Sahara, alongside
                savannas, rainforests, mountains, and coastlines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
