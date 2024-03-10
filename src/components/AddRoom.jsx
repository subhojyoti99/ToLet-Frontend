import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import "./addRoom.css";

export const AddRoom = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [roomDetails, setRoomDetails] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setRoomDetails({ ...roomDetails, [name]: value });

    // validateField(name, value);
  }

  //Add new room
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const updatedRoom = {
        ...roomDetails,
        room_cost: +roomDetails.room_cost,
        room_security_cost: +roomDetails.room_security_cost,
        room_age: +roomDetails.room_age,
        available_room: +roomDetails.available_room,
      };
      const res = await axios.post(
        "http://localhost:8080/admin/register-room",
        updatedRoom,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("=====", res);
      //   onAdd();
    } catch (err) {
      console.error("addRoom", err);
    } finally {
      setOpen(false);
      setRoomDetails({});
    }
    setLoading(false);
  };
  function handleClose() {
    setOpen(false);
    setRoomDetails({});
  }

  return (
    <>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          setOpen(true);
        }}
        className=" bg-[#FF9933] hover:bg-[#FF7722] border-[#ff9933] hover:border-white border-1 text-white focus:ring-white font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 w-auto float-right"
      >
        Add New Room
      </button>
      <Modal open={open} onClose={() => handleClose()}>
        <Fade in={open}>
          <Box className="md:m-auto md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%] w-3/4 h-1/2 translate-x-0 translate-y-0 rounded-0 md:rounded-2xl pt-16 pb-24 px-16 md:w-auto md:h-auto absolute bg-white">
            <form onSubmit={handleSubmit} id="addRoom">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="room_type"
                  placeholder="Room type"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_type}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="gender_type"
                  placeholder="Gender"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.gender_type}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="room_location"
                  placeholder="Location"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_location}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="number"
                  name="room_cost"
                  placeholder="Cost"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_cost}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="number"
                  name="room_security_cost"
                  placeholder="Security Cost"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_security_cost}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="room_capacity"
                  placeholder="Capacity"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_capacity}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="number"
                  name="room_age"
                  placeholder="Room Age"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_age}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="room_feature"
                  placeholder="Feature"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_feature}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="room_description"
                  placeholder="Description"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_description}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  name="room_status"
                  placeholder="Status"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.room_status}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="number"
                  name="available_room"
                  placeholder="Available Rooms"
                  className="w-full h-10 border border-gray-300 rounded-lg px-3 mb-4"
                  value={roomDetails.available_room}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full flex-shrink-0 bg-slate-600 hover:bg-slate-800 border-slate-600 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 rounded"
              >
                Submit
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
