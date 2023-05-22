"use client";
import { h1, h2, h3, p1 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <section className="home pt-[10rem]" id="">
      <div className="width h-[500px]  max-mobile_lg:h-full max-mobile_lg:overflow-hidden ">
        <div className="flex items-center  max-mobile:flex-col ">
          <div className=" flex flex-col w-[80%] max-mobile:w-full gap-y-4">
            <div className="">
              <h1>Discover</h1>
              <h1>Africa</h1>
            </div>
            <p>
              Unlock the captivating allure of Africa and embark on a journey of
              breathtaking landscapes, vibrant cultures, and untamed adventures.
            </p>
            {/* <button className="btn mt-8 w-max">Explore</button> */}
            <a
              className="border-[2px] border-[#985A27] relative py-3 px-10 w-max group duration-500 ease-out hover:bg-bg_btn_var mt-8"
              href="#"
            >
              <span className=" absolute z-10 -top-[2px] left-2 block bg-bg  h-[2px] duration-500 ease-out w-[20%] group-hover:w-[0%]"></span>
              <span className="flex items-center gap-1">
                <span className="block h-[2px] w-6 bg-bg_btn_var duration-500 ease-out group-hover:bg-white group-hover:w-3"></span>
                <span className="uppercase text-text_c font-semibold text-[12px] tracking-[2px]">
                  Explore
                </span>
              </span>
              <span className=" absolute z-10 -bottom-[2px] right-2 block bg-bg  h-[2px] duration-500 ease-out w-[20%] group-hover:w-[0%]"></span>
            </a>
          </div>
          <div className="w-full max-mobile:mt-8">
            <div className="flex gap-4 max-mobile:flex-col">
              <Image
                src={h2}
                alt="Image 1"
                className="  object-cover w-[300px] max-mobile_lg:w-[200px] h-auto max-mobile_lg:hidden  rounded-[10px]"
              />
              <div className="flex flex-col gap-4 ">
                <Image
                  src={h1}
                  alt="Image 2"
                  className=" object-cover h-full w-full rounded-[10px]  max-mobile:h-[200px]"
                />
                <div className="flex gap-4">
                  <Image
                    src={p1}
                    alt="Image 2"
                    className="w-full h-auto max-mobile:w-[50px]  max-mobile:h-[50px]"
                  />
                  <Image
                    src={h3}
                    alt="Image 3"
                    className="w-full h-max  rounded-[10px] max-mobile:w-[300px]  max-mobile:h-[150px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
