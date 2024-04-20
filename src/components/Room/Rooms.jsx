import { useEffect, useRef, useState } from "react";
import axios from "../../utils/axios";
import { motion } from "framer-motion";
import HomeImg from "./../../img/rent1.png";
import FilterImg from "./../../img/filter.png";
import React from "react";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const Rooms = ({ flag, data, scrollValue }) => {
  const Rooms = useRef();

  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = useState(false);

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
    setRooms(rooms);
  }, []);

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <div>
        <h1>Rooms</h1>
        <img
          onClick={(event) => {
            event.preventDefault();
            setOpen(true);
          }}
          src={FilterImg}
          width={40}
          className="flex float-right cursor-pointer"
          alt="filterImg"
        />
        <hr />
      </div>
      <Modal open={open} onClose={() => handleClose()} size="sm">
        <Fade in={open}>
          <Box className="md:m-auto md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%] w-3/4 h-1/2 translate-x-0 translate-y-0 rounded-25 md:rounded-2xl pt-16 pb-24 px-16 md:w-auto md:h-auto absolute bg-white">
            <form>
              <h3>Filter</h3>
            </form>
          </Box>
        </Fade>
      </Modal>
      <div className="flex flex-wrap ml-10 gap-16">
        {rooms &&
          rooms.map((item) => (
            <Link to={`/room/${item.ID}`} className="no-underline">
              <div
                key={item?.ID}
                className="w-275 h-[210px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
              >
                <div className="w-full flex items-center justify-between">
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
                  {/* <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-full bg-stone-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                            onClick={() => setItems([...cartItems, item])}
                        >
                            <MdOutlineShoppingBag className="text-white" />
                        </motion.div> */}
                </div>

                <div className="w-full flex flex-col items-end justify-end -mt-8">
                  <p className="text-textColor font-semibold text-base md:text-lg">
                    {item?.room_type} for {item?.gender_type}
                  </p>
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
      {/* </div>  */}
    </>
  );
};
