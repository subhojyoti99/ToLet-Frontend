import { useState } from "react";
import MenuImg from "../../img/logo.png";
export const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <img
        src={MenuImg}
        onClick={() => {
          handleClick();
        }}
        className="w-10 float-right cursor-pointer"
        alt="menuImg"
      />
      {click && (
        <div className="absolute float-right">
          <ul>
            <li>My Rooms</li>
          </ul>
        </div>
      )}
    </>
  );
};
