import React from "react";
import NavbarRightContent from "@/Navbar/NavbarRightSide/NavbarRightMain/NavbarRightContent";

const NaveBar = () => {
  return (
    <div className="fixed flex w-full items-center justify-between border-b border-gray-300 p-4 backdrop-blur-2xl">
      <div className="flex space-x-4">Left Side</div>
      <div className="z-auto bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text pl-48 font-bold text-transparent sm:text-xl md:pl-28 md:text-3xl lg:text-5xl">
        FIREBASE
      </div>
      <NavbarRightContent />
    </div>
  );
};

export default NaveBar;
/* flex fixed w-full justify-between p-4 bg-gray-500  */
/* left-0 top-0 */
/* items-center  ==> It keeps items center vertically */
