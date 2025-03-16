import React from "react";
import LogoImg from "../assets/logo.png";

const NavbarComponent = () => {
  return (
    <>
      <nav className="flex w-full justify-between items-center bg-blue-100 shadow-md py-3 px-10">
        {/* logo */}
        <div className="flex gap-1 justify-center items-center cursor-pointer">
          <img src={LogoImg} alt="logo-image" className="h-6 w-6" />
          <p className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition ease-in-out">
            To Do Online
          </p>
        </div>

        {/* navmenu */}
        <div className="flex gap-6 justify-center items-center text-blue-900 font-semibold">
          <a href="#" className="text-sm">
            My ToDo
          </a>
          <a
            href="#"
            className="bg-blue-800 text-white text-sm py-2 px-6 rounded-md hover:bg-blue-700 transition ease-in-out"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;