import React from "react";
import Tiffin_Banner from "../../img/tiffinBanner.png";

const TiffinSystem = () => {
  return (
    <>
      <h1 className="text-3xl text-toletHeading font-bold mb-4">
        Our Tiffin System
      </h1>
      <div className="container mx-auto p-6">
        <div className="flex">
          <div className="w-1/2 mr-6">
            <img
              src={Tiffin_Banner}
              alt="Tiffin System Banner"
              className="w-full rounded-lg shadow-lg mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2">
              What is Our Tiffin System?
            </h2>
            <p className="text-gray-600 mb-6">
              Our Tiffin System is a convenient way for you to enjoy delicious,
              home-cooked meals delivered right to your doorstep. Whether you're
              a busy professional, a student, or just someone who prefers
              wholesome, freshly-prepared food, our tiffin service is perfect
              for you.
            </p>
            <h2 className="text-2xl font-semibold mb-2">How Does It Work?</h2>
            <p className="text-gray-600 mb-6">
              Signing up for our tiffin service is easy. Simply choose your meal
              plan, select your preferences, and we'll take care of the rest.
              You'll receive daily or weekly deliveries of nutritious, tasty
              meals that are sure to satisfy your hunger and delight your taste
              buds.
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-semibold mb-2">Meal Plans</h2>
            <ul className="list-disc text-gray-600 mb-6">
              <li>Standard Plan: Includes breakfast, lunch, and dinner</li>
              <li>
                Veggie Delight: Vegetarian meal options for all three meals
              </li>
              <li>Custom Plan: Tailored to your dietary preferences</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">
              Benefits of Our Tiffin System
            </h2>
            <ul className="list-disc text-gray-600">
              <li>Convenience: No need to cook or shop for groceries</li>
              <li>Variety: Enjoy a diverse range of cuisines and flavors</li>
              <li>Health: Fresh ingredients and balanced meals</li>
              <li>Affordability: Cost-effective meal options</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TiffinSystem;
