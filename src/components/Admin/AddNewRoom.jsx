import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { Fade } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function AddNewRoom() {
  const [loading, setLoading] = useState(false);
  const [roomDetails, setRoomDetails] = useState({});
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
    setRoomDetails({});
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setRoomDetails({ ...roomDetails, [name]: value });

    // validateField(name, value);
  }

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
          <Box
            component="form"
            className="md:m-auto md:left-[50%] md:top-[50%] md:translate-x-[-50%] md:translate-y-[-50%] w-3/4 h-1/2 translate-x-0 translate-y-0 rounded-25 md:rounded-2xl pt-16 pb-24 px-16 md:w-auto md:h-auto absolute bg-white"
            noValidate
            autoComplete="off"
          >
            <form id="addRoom">
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  label="Room type"
                  type="text"
                  name="room_type"
                  value={roomDetails.room_type}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Gender"
                  type="text"
                  name="gender_type"
                  value={roomDetails.gender_type}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Room Location"
                  type="text"
                  name="room_location"
                  value={roomDetails.room_location}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Room Cost"
                  type="number"
                  name="room_cost"
                  value={roomDetails.room_cost}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Security Cost"
                  type="number"
                  name="room_security_cost"
                  value={roomDetails.room_security_cost}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Room Capacity"
                  type="text"
                  name="room_capacity"
                  value={roomDetails.room_capacity}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Room Age"
                  type="number"
                  name="room_age"
                  value={roomDetails.room_age}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Room Feature"
                  type="text"
                  name="room_feature"
                  value={roomDetails.room_feature}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Room Description"
                  type="text"
                  name="room_description"
                  value={roomDetails.room_description}
                  onChange={(e) => handleChange(e)}
                  variant="standard"
                />
                <TextField
                  label="Room Status"
                  name="room_status"
                  value={roomDetails.room_status}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  variant="standard"
                />
                <TextField
                  label="Available Room"
                  name="available_room"
                  value={roomDetails.available_room}
                  onChange={(e) => handleChange(e)}
                  type="number"
                  variant="standard"
                />
                <TextField
                  label="Upload Document"
                  name="document"
                  value={roomDetails.document}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  variant="standard"
                />
              </div>
              <button
                disabled={loading}
                onClick={handleSubmit}
                type="submit"
                className=" mt-3 w-1/3 flex-shrink-0 bg-slate-600 hover:bg-slate-800 border-slate-600 hover:border-slate-800 text-sm border-4 text-white py-1 px-2 rounded float-right"
              >
                Submit
              </button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
