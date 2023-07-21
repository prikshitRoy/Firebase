import React from "react";
import NavbarRightContent from "@/Navbar/NavbarRightSide/NavbarRightMain/NavbarRightContent";

const NaveBar = () => {
  return (
    <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
      <div className="absolute left-0 pl-4 pt-1">Left Side</div>
      <div className="z-auto text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
        FIREBASE
      </div>
      <NavbarRightContent />
    </div>
  );
};

export default NaveBar;
