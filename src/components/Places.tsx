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

interface PlacesProps {}

const Places: FC<PlacesProps> = ({}) => {
  return (
    <section className="places py-[10rem] all-width ">
      <div className="width flex flex-col items-center">
        <p className="uppercase font-bold tracking-[1px]">Famous</p>
        <h2>Destinations</h2>
      </div>
      <Place1 />
      <Place2 />
      <Place3 />
      <Place4 />
      <Place5 />
      <Place6 />
      <Place7 />
      <Place8 />
    </section>
  );
};

export default Places;
