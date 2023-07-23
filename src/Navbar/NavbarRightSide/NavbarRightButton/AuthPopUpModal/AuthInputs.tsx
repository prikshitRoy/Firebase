import React from "react";
import { useRecoilValue } from "recoil";
import { LoginSignupModal } from "@/atoms/atomAuthModal";
import Login from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/Login";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  const modalState = useRecoilValue(LoginSignupModal);

  return (
    <>
      {modalState.view === "login" && <Login />}
      {/* 
      {modalState.view === "signup" && <SignUp />} 
      */}
    </>
  );
};
export default AuthInputs;
