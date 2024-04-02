import React, { useEffect, useRef, useState } from "react";
import axios from "../utils/axios";
import HomeImg from "../img/rent1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RowContainer = ({ scrollValue }) => {
  const rowContainer = useRef();

  useEffect(() => {
    if (rowContainer.current) {
      rowContainer.current.scrollLeft = scrollValue;
    }
  }, [scrollValue]);

  const handleWheelScroll = (e) => {
    rowContainer.current.scrollLeft += e.deltaY;
  };

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/rooms");
        setRooms(response?.data?.Rooms);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div
      ref={rowContainer}
      className="w-screen h-[375px] flex items-center gap-6 scroll-smooth  overflow-x-auto justify-start"
      onWheel={handleWheelScroll}
    >
      {rooms &&
        rooms.map((item) => (
          <Link to={`/room/${item.ID}`}>
            <div
              key={item?.ID}
              className="w-275 h-[205px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between">
                <div className="w-40 h-40 -mt-10 drop-shadow-2xl">
                  <motion.div
                    className="w-40 h-40 -mt-10 drop-shadow-2xl"
                    whileHover={{ scale: 1.2 }}
                  >
                    <img
                      src={HomeImg}
                      alt="home"
                      className="w-full h-full -mt-3 object-contain"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="w-full flex flex-col items-end justify-end -mt-16">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.room_type} for {item?.gender_type}
                </p>
                <Link to={`/room/${item.ID}`}>{item.room_type}</Link>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.room_location}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-medium">
                    <span className="text-sm text-stone-600">Security</span>{" "}
                    {item?.room_security_cost}
                  </p>
                  <p className="text-lg text-headingColor font-medium">
                    <span className="text-sm text-stone-600">Rs.</span>{" "}
                    {item?.room_cost}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RowContainer;
