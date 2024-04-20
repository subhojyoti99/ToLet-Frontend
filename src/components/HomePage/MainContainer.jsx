import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { HomeContainer } from "./HomeContainer";
import { WeProvide } from "../Our_Services/WeProvide";

export const MainContainer = () => {
  const [scrollValue, setScrollValue] = useState(0);

  const handleScrollLeft = () => {
    setScrollValue((prevValue) => prevValue - 200);
  };

  const handleScrollRight = () => {
    setScrollValue((prevValue) => prevValue + 200);
  };

  return (
    <div className="w-full h-auto flex-col items-center justify-center">
      <HomeContainer />
      <WeProvide />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between mb-4">
          <p className="text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our trending and most visited rooms
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={handleScrollLeft}
            >
              <MdChevronLeft className="text-lg text-white" />
            </div>
            <div
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={handleScrollRight}
            >
              <MdChevronRight className="text-lg text-white" />
            </div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} />
      </section>
    </div>
  );
};
