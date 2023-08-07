import React from "react";
import { auth } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import NavbarRightContent from "@/components/Layouts/Navigation/NavbarRightContent";
import NavBarLeftContent from "./NavBarLeftContent";

const NavBar = () => {
  const [activeUser, loading, error] = useAuthState(auth);

  return (
    <div className="fixed flex w-full items-center justify-between border-b border-gray-300 p-4 backdrop-blur-2xl">
      <div className="flex space-x-4">
        <NavBarLeftContent />
      </div>
      <div className="z-auto bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text font-bold text-transparent sm:text-xl md:text-3xl lg:text-5xl">
        FIREBASE
      </div>
      <NavbarRightContent user={activeUser} />
    </div>
  );
};

export default NavBar;
/* flex fixed w-full justify-between p-4 bg-gray-500  */
/* left-0 top-0 */
/* items-center  ==> It keeps items center vertically */
