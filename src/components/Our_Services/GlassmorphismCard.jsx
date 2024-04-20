import React from "react";
import { Link } from "react-router-dom";

const GlassmorphismCard = ({ title, description }) => {
  return (
    <div className="glass-card p-6 rounded-lg shadow-lg bg-white bg-opacity-10 hover:bg-opacity-60 transition duration-300 transform hover:scale-105 w-full md:w-72 h-full">
      <h2 className="text-2xl text-center font-semibold text-doorKnocker mb-4 transition-opacity hover:opacity-100 cursor-pointer">
        {title}
      </h2>
      <p className="text-doorKnocker transition-opacity hover:opacity-100 cursor-pointer">
        {description}
      </p>
    </div>
  );
};

const GlassmorphismCards = () => {
  return (
    <>
      <h1 className="text-center text-toletHeading mb-8">Choose One</h1>
      <div className="flex justify-center gap-6">
        <Link to={"/cloud-kitchen"} className="no-underline">
          <GlassmorphismCard
            title="Our Cloud Kitchen"
            description="Discover a variety of delicious dishes delivered straight from our cloud kitchen."
          />
        </Link>
        <Link to={"/room-mate"} className="no-underline">
          <GlassmorphismCard
            title="Your Room Mate"
            description="Find your perfect roommate with our Room Mate service."
          />
        </Link>
        <Link to={"/tiffin-system"} className="no-underline">
          <GlassmorphismCard
            title="Our Tiffin System"
            description="Enjoy home-cooked meals delivered right to your doorstep with our Tiffin System."
          />
        </Link>
        <Link to={"/room-with-food"} className="no-underline">
          <GlassmorphismCard
            title="Room With Food"
            description="Book a room with complimentary food options to make your stay even more enjoyable."
          />
        </Link>
      </div>
    </>
  );
};

export default GlassmorphismCards;
