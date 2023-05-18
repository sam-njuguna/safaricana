"use client";
import { h1, h2, h3, p1 } from "@/assets";
import Image from "next/image";
import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <section className="home pt-[10rem]">
      <div className="width h-[500px] max-mobile:h-full max-mobile:overflow-hidden ">
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
            <button className="btn mt-8 w-max">Explore</button>
          </div>
          <div className="w-full max-mobile:mt-8">
            <div className="flex gap-4 max-mobile:flex-col">
              <Image
                src={h2}
                alt="Image 1"
                className="  object-cover w-[300px] h-auto max-mobile:hidden  rounded-[10px]"
              />
              <div className="flex flex-col gap-4">
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
                    className="w-full h-auto  rounded-[10px] max-mobile:w-[300px]  max-mobile:h-[150px]"
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
