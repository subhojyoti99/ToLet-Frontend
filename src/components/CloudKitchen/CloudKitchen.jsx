import React from "react";

const CloudKitchen = () => {
  return (
    <>
      <h1 className="text-3xl text-toletHeading font-bold mb-4">
        Our Cloud Kitchen
      </h1>
      <div className="container mx-auto p-6">
        <p className="mb-4">
          Welcome to Our Cloud Kitchen! We offer a wide variety of delicious
          dishes prepared by our expert chefs and delivered straight to your
          doorstep. Whether you're craving savory classics, indulgent desserts,
          or healthy options, we've got something for everyone.
        </p>
        <p className="mb-4">
          Here are some of the delicious foods we're making:
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Classic burgers and fries</li>
          <li>Authentic Italian pasta dishes</li>
          <li>Flavorful Asian stir-fries and noodles</li>
          <li>Hearty soups and sandwiches</li>
          <li>Decadent desserts like cakes and cookies</li>
          <li>Healthy salads and grain bowls</li>
        </ul>
        <p>
          Our menu is constantly updated to include seasonal specialties and
          customer favorites. Each dish is made with fresh, high-quality
          ingredients to ensure maximum flavor and satisfaction.
        </p>
        <p>
          Ordering from Our Cloud Kitchen is easy! Simply browse our menu,
          select your desired items, and place your order online. We'll take
          care of the rest and have your meal delivered to you in no time.
        </p>
      </div>
    </>
  );
};

export default CloudKitchen;
