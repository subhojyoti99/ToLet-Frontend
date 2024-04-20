import React from "react";
import { motion } from "framer-motion";
import gateBg from "../../img/gate1.png";
import HomeLock from "../../img/lock.png";
import { heroData } from "../../utils/data.js";
import RowContainer from "./RowContainer.jsx";
import { Rooms } from "../Room/Rooms.jsx";

export const HomeContainer = () => {
  return (
    <>
      <section
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      >
        <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
          <p className="text-[2rem] lg:text-[3.8rem] font-bold tracking-wide">
            Rooms & Paying Guest
            <br />
            <span className="text-slate-900 text-[2.5rem] lg:text-[4.5rem]">
              in Your City
            </span>
          </p>
          <p className="text-xl md:text-left md:w-[80%]">
            *Stays on someone else's property
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-32 md:w-40 md:h-8 bg-gradient-to-br from-slate-300 to-slate-900 rounded-full hover:shadow-lg"
            type="button"
          >
            Explore Now
          </motion.button>
        </div>
        <div className="py-3 flex-1 flex items-center relative">
          <img
            src={HomeLock}
            alt="hero-bg"
            className="ml-auto h-420 w-full lg:w-auto lg:h-600"
          />

          {/* <div className="w-full h-full absolute top-[8%] md:top-[55%] lg:top-8 left-0 md:left-[20%] lg:left-[20%] flex items-center justify-center py-4 gap-3 lg:gap-6 flex-wrap lg:px-40">

                    {heroData && heroData.map(n => (
                        <div key={n.id} className="lg:w-190 p-2 bg-cardOverlay backdrop-blur-md drop-shadow-xl rounded-xl flex items-center justify-center flex-col">
                            <img src={n.imageSrc} alt="I1" className="w-40 -mt-20" />
                            <p className="text-base font-medium text-white mt-3">
                                {n.room_type}</p>
                            <p className="text-sm text-slate-200 my-2">
                                {n.room_description}
                            </p>
                            <p className="text-slate-900 text-medium"><span className="text-sm text-stone-800">Rs</span> {n.room_cost}</p>
                        </div>
                    ))}
                </div> */}
          {/* <div className="lg:w-1/2 absolute left-[50%]">
                    <img src={HomeLock} alt="shipping-box" className="w-3/4" />
                </div> */}
        </div>
        {/* <RowContainer
                scrollValue={scrollValue}
                flag={true}
                data={foodItems?.filter((n) => n.category === "fruits")}
            /> */}
        {/* <RowContainer /> */}
        {/* <Rooms /> */}
      </section>
    </>
  );
};
