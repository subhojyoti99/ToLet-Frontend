import React, { useState } from "react";
import { TextField } from "@mui/material";

const RoomMate = () => {
  // Sample data for roommate listings
  const roommateListings = [
    {
      id: 1,
      name: "Vishal Das",
      roomSpecs: "2 Bedroom, 1 Bath",
      cost: 6000,
      location: "Downtown",
      description:
        "Looking for a roommate to share a spacious apartment in downtown.",
      comments:
        "I'm a quiet and tidy individual. Prefer someone who is responsible and friendly.",
    },
    {
      id: 2,
      name: "Tanisha Sapui",
      roomSpecs: "1 Bedroom, Shared Bath",
      cost: 4000,
      location: "University District",
      description:
        "Seeking a roommate for a cozy apartment near the university campus.",
      comments:
        "I'm a student studying engineering. I enjoy cooking and movie nights.",
    },
    {
      id: 3,
      name: "Arnab Sikdar",
      roomSpecs: "1 Bedroom, Shared Bath",
      cost: 4000,
      location: "University District",
      description:
        "Seeking a roommate for a cozy apartment near the university campus.",
      comments:
        "I'm a student studying engineering. I enjoy cooking and movie nights.",
    },
    {
      id: 4,
      name: "Bijoy Mondal",
      roomSpecs: "1 Bedroom, Shared Bath",
      cost: 4000,
      location: "University District",
      description:
        "Seeking a roommate for a cozy apartment near the university campus.",
      comments:
        "I'm a student studying engineering. I enjoy cooking and movie nights.",
    },
    // Add more roommate listings as needed
  ];

  const [hoveredId, setHoveredId] = useState(null);
  const [locationFilter, setLocationFilter] = useState("");
  const [costFilter, setCostFilter] = useState("");

  const filteredListings = roommateListings.filter(
    (listing) =>
      listing.location.toLowerCase().includes(locationFilter.toLowerCase()) &&
      (!costFilter || parseInt(listing.cost) <= parseInt(costFilter))
  );

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-toletHeading">
        Find Your Roommate
      </h1>
      <div className="container mx-auto p-6">
        <div className="flex">
          {/* Left sidebar for filters (if needed) */}
          <div className="w-1/4 mr-6">
            {/* Add filters here */}
            <h2 className="text-xl font-semibold mb-2">
              Please make your choice
            </h2>
            {/* Add filter options */}
            {/* <input
              type="text"
              placeholder="Enter location..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border-1 border-toletHeading p-2 rounded w-full"
            /> */}
            <TextField
              type="text"
              placeholder="Enter location..."
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="border-1 border-toletHeading p-2 rounded w-full"
              variant="standard"
            />
            <TextField
              type="number"
              placeholder="Enter your expected cost..."
              value={costFilter}
              onChange={(e) => setCostFilter(e.target.value)}
              className="border-1 border-toletHeading p-2 rounded w-full"
              variant="standard"
            />
          </div>
          {/* Main content area for roommate listings */}
          <div className="w-3/4">
            {/* Display roommate listings */}
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className={`mb-6 rounded-lg border-1 ${
                  hoveredId === listing.id
                    ? "border-doorKnocker"
                    : "border-toletHeading"
                }`}
                onMouseEnter={() => setHoveredId(listing.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <button className="bg-toletHeading hover:bg-doorKnocker text-white font-bold py-2 px-4 rounded mt-2 transition duration-300 transform hover:scale-105 float-end">
                  View My Room
                </button>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{listing.name}</h2>
                  <p className="text-gray-600 mb-2">{listing.roomSpecs}</p>
                  <p className="text-gray-600 mb-2">
                    Rs. {listing.cost} per month
                  </p>
                  <p className="text-gray-600 mb-2">
                    Location: {listing.location}
                  </p>
                  <p className="mb-4">{listing.description}</p>
                  <p className="italic">{listing.comments}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomMate;
