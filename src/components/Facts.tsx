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
      <div className="relative h-[500px]">
        <Image
          src={p2}
          alt="Image 1"
          className="object-contain w-full h-[500px]"
        />
        <div className="absolute bottom-0 left-4">
          <Image
            src={p1}
            alt="Image 1"
            className="object-contain w-full h-max"
          />
        </div>
        <div className="absolute bottom-1/2 translate-y-1/2 transform right-4">
          <Image
            src={p4}
            alt="Image 1"
            className="object-contain w-full h-max"
          />
        </div>

        <div className="absolute top-0 w-full left-0">
          <div className="width h-[500px]  flex justify-center items-center relative">
            <div className="w-[30%] bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px] text-text_c ">
              <p className="font-medium">
                Africa is the second-largest continent in the world, covering
                approximately 30.37 million square kilometers (11.7 million
                square miles).
              </p>
            </div>
            <div className="w-[30%] absolute top-5 left-0 bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p>
                Africa is home to various natural wonders, such as Victoria
                Falls (Zambia and Zimbabwe), the Nile River (the world's longest
                river), the Serengeti National Park (Tanzania), and the Sahara
                Desert.
              </p>
            </div>
            <div className="w-[30%] absolute top-[7%] right-0 bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p>
                Africa has a diverse cultural heritage, with vibrant traditions,
                music, dance, art, and cuisine. Each country has its own unique
                cultural practices, customs, and festivals.
              </p>
            </div>
            <div className="w-[30%] absolute bottom-0 left-[10%] bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p>
                Africa is renowned for its rich wildlife. It is home to the "Big
                Five" game animals: lions, elephants, buffalos, leopards, and
                rhinoceroses.
              </p>
            </div>
            <div className="w-[30%] absolute bottom-[10%] right-0 bg-bg_btn_var z-10 p-4 rounded-br-[20px] rounded-tl-[20px]">
              <p>
                Africa boasts diverse landscapes, including vast deserts like
                the Sahara, the world's largest hot desert, as well as savannas,
                rainforests, mountains and coastal areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
