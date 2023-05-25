"use client";
import { FC } from "react";
import {
  Place1,
  Place2,
  Place3,
  Place4,
  Place5,
  Place6,
  Place7,
  Place8,
} from "./places";
import { motion } from "framer-motion";
import { staggerContainer } from "@/animations";

interface PlacesProps {}

const Places: FC<PlacesProps> = ({}) => {
  return (
    <motion.section
      className="places pt-[5rem] pb-[5rem] all-width  "
      id="places"
      variants={staggerContainer(0.2, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="width flex flex-col items-center text-center">
        <motion.p
          whileInView={{
            y: [100, 0],
            opacity: [0, 1],
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          className="uppercase font-bold tracking-[1px] text-[12px]"
        >
          Famous
        </motion.p>
        <motion.h2
          whileInView={{
            y: [100, 0],
            opacity: [0, 1],
            transition: {
              duration: 0.6,
              delay: 0.6,
            },
          }}
        >
          Destinations
        </motion.h2>
        <motion.p
          whileInView={{
            y: [100, 0],
            opacity: [0, 1],
            transition: {
              duration: 0.7,
              delay: 0.7,
            },
          }}
          className="mt-4"
        >
          Get a sneak peek at Africa's famous tourist attractions.
        </motion.p>
      </div>
      <Place1 />
      <Place2 />
      <Place3 />
      <Place4 />
      <Place5 />
      <Place6 />
      <Place7 />
      <Place8 />
    </motion.section>
  );
};

export default Places;
