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

import { useInView } from "react-intersection-observer";

interface PlacesProps {}

const Places: FC<PlacesProps> = ({}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <motion.section
      className="places pt-[5rem] pb-[5rem] all-width "
      id="places"
    >
      <div className="width flex flex-col items-center text-center">
        <motion.p className="uppercase font-bold tracking-[1px] text-[12px]">
          Famous
        </motion.p>
        <motion.h2>Destinations</motion.h2>
        <motion.p className="mt-4">
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
