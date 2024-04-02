import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import HomeImg from "./../../img/rent3.png";
import { useParams } from "react-router-dom";
export const RoomDetails = () => {
  const { id } = useParams();

  const [roomDetails, setRoomDetails] = useState([]);
  const [ownerDetails, setOwnerDetails] = useState([]);

  console.log("12345678", id);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/room/${id}`
        );
        setRoomDetails(response?.data?.Room);
        console.log(response?.data?.Room);
        setOwnerDetails(response?.data?.Room?.owner);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchRoom();
  }, [id]);

  return (
    <>
      <h2>Room Details</h2>
      <hr />
      <div className="grid grid-cols-2">
        <div className="flex w-1/2 m-auto">
          <img src={HomeImg} alt="home" className="h-fit w-fit" />
        </div>
        <div className="border-l-2 border-gray-500 grid grid-cols-2">
          <div className="p-10 text-left">
            <h2>Room Details</h2>
            <h5 className="text-center my-3 m">
              <span>{roomDetails.room_type}</span> room for{" "}
              <span>{roomDetails.gender_type}</span>
            </h5>
            <div className="w-auto h-auto grid grid-cols-2">
              <h6>Cost:</h6>
              <span>Rs. {roomDetails.room_cost}</span>
              <h6>Location:</h6>
              <span>{roomDetails.room_location}</span>
              <h6>Age:</h6>
              <span>{roomDetails.room_age} year</span>
              <h6>Capacity:</h6>
              <span>{roomDetails.room_capacity}</span>
              <h6>Description:</h6>
              <span>{roomDetails.room_description}</span>
              <h6>Feature:</h6>
              <span>{roomDetails.room_feature}</span>
              <h6>Status:</h6>
              <span>{roomDetails.room_status}</span>
              <h6>Available Rooms:</h6>
              <span>{roomDetails.available_room}</span>
              <h6>Security Deposit:</h6>
              <span>Rs. {roomDetails.room_security_cost}</span>
            </div>
          </div>
          <div className="p-10 text-right">
            <h3>Owner Details</h3>
            <div className="p-3 h-min grid grid-cols-2 text-right">
              <h6>Name:</h6>
              <h6 className="font-normal">
                <span>
                  {ownerDetails.first_name} &nbsp;
                  {ownerDetails.last_name}
                </span>
              </h6>
              <h6>Contact Number:</h6>
              <h6 className="font-normal">
                <span>{ownerDetails.contact_number}</span>
              </h6>
              <h6>Email:</h6>
              <h6 className="font-normal">
                <span>{ownerDetails.email}</span>
              </h6>
              <h6>Address:</h6>
              <h6 className="font-normal">
                <span>{ownerDetails.address}</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
