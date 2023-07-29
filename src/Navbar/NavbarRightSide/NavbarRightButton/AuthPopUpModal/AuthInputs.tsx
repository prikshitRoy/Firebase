import React from "react";
import { useRecoilValue } from "recoil";
import { LoginSignupModal } from "@/atoms/atomAuthModal";
import Login from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/Login";
import SignUp from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/SignUp";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  // Reading Recoil state
  const modalState = useRecoilValue(LoginSignupModal);

  return (
    <>
      {modalState.view === "login" && <Login />}
      {modalState.view === "signup" && <SignUp />}
    </>
  );
};
export default AuthInputs;
