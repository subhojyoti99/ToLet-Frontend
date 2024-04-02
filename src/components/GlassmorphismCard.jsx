import React from "react";

const GlassmorphismCard = ({ title, description }) => {
  return (
    <div className="glass-card p-6 rounded-lg shadow-lg bg-white bg-opacity-10 hover:bg-opacity-60 transition duration-300 transform hover:scale-105 w-full md:w-72">
      <h2 className="text-2xl font-semibold text-doorKnocker mb-4 transition-opacity hover:opacity-100">
        {title}
      </h2>
      <p className="text-doorKnocker transition-opacity hover:opacity-100">
        {description}
      </p>
    </div>
  );
};

const GlassmorphismCards = () => {
  return (
    <div className="flex justify-center gap-6">
      <GlassmorphismCard
        title="Our Cloud Kitchen"
        description="Discover a variety of delicious dishes delivered straight from our cloud kitchen."
      />
      <GlassmorphismCard
        title="Your Room Mate"
        description="Find your perfect roommate with our Room Mate service."
      />
      <GlassmorphismCard
        title="Our Tiffin System"
        description="Enjoy home-cooked meals delivered right to your doorstep with our Tiffin System."
      />
      <GlassmorphismCard
        title="Room With Food"
        description="Book a room with complimentary food options to make your stay even more enjoyable."
      />
    </div>
  );
};

export default GlassmorphismCards;
