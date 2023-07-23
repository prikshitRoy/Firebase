import React from "react";
import NavbarRightButton from "@/Navbar/NavbarRightSide/NavbarRightButton/NavbarRightButton";
import NavbarRightUser from "@/Navbar/NavbarRightSide/NavbarRightUser/NavbarRightUser";
import AuthPopUpModal from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal";

type NavRightProps = {};

const NavRight: React.FC<NavRightProps> = () => {
  return (
    <div className="flex absolute right-0 pr-4 pt-1 gap-x-4">
      <AuthPopUpModal />
      <NavbarRightButton />
      <NavbarRightUser />
    </div>
  );
};
export default NavRight;
