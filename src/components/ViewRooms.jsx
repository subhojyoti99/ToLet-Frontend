import { useEffect, useRef, useState } from "react";
import axios from "../../src/axios";
import { motion } from "framer-motion";

export const ViewRooms = ({ flag, data, scrollValue }) => {
  const ViewRooms = useRef();

  const [rooms, setRooms] = useState({});

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/rooms");
        console.log(res?.data?.rooms);
        setRooms(res?.data?.rooms);
        console.log("dddddddddddddddddddddd", rooms);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRoom();
    ViewRooms.current.leftScroll += scrollValue;
  }, [scrollValue]);

  return (
    <>
      {/* <h1>Rooms</h1>
      <ul>
        {rooms?.map((item) => (
          <li key="id">{item.room_type}</li>
        ))}
        <li></li>
      </ul> */}

      <div
        ref={ViewRooms}
        className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
          flag
            ? "overflow-x-scroll scrollbar-none"
            : "overflow-x-hidden flex-wrap justify-center"
        }`}
      >
        {rooms &&
          rooms?.map((item) => (
            <div
              key={item?.id}
              className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
            >
              <div className="w-full flex items-center justify-between">
                <motion.div
                  className="w-40 h-40 -mt-8 drop-shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <img
                    src={item?.imageURL}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                {/* <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-stone-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                  onClick={() => setRooms([...cartItems, item])}
                >
                  <MdOutlineShoppingBag className="text-white" />
          </motion.div> */}
              </div>

              <div className="w-full flex flex-col items-end justify-end -mt-8">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item?.room_type} room type
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item?.gender_type} gender_type
                </p>
                <div className="flex items-center gap-8">
                  <p className="mt-1 text-sm text-stone-800">
                    {item?.room_location} room_location
                  </p>
                  <p className="text-lg text-headingColor font-medium">
                    <span className="text-sm text-stone-600">Rs.</span>{" "}
                    {item?.room_cost}room_cost
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
