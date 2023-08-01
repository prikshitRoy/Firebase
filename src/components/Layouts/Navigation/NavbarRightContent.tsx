import React from "react";
import LoginAndSignupButtons from "@/components/Auth/AuthButtons/LoginAndSignupButtons";
import AuthPopUpModal from "@/components/Modal/AuthModal/AuthPopUpModal";
import { DropdownMenuUser } from "../../User/DropdownMenuUser";
import { User } from "firebase/auth";

type NavbarRightContentProps = {
  user?: User | null; // User from Firebase auth
};

const NavbarRightContent: React.FC<NavbarRightContentProps> = ({ user }) => {
  return (
    <div className="flex space-x-4">
      <AuthPopUpModal />
      {user ? <DropdownMenuUser /> : <LoginAndSignupButtons />}
    </div>
  );
};
export default NavbarRightContent;
