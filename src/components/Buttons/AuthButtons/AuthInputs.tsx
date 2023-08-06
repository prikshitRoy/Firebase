import React from "react";
import { useRecoilValue } from "recoil";
import { LoginSignupModal } from "@/atoms/atomAuthModal";
import LoginForm from "@/components/Auth/LoginForm";
import SignUpForm from "@/components/Auth/SignUpForm";

type AuthInputsProps = {};

const AuthInputs: React.FC<AuthInputsProps> = () => {
  // Reading current Recoil state value
  const modalState = useRecoilValue(LoginSignupModal);

  return (
    <>
      {modalState.view === "login" && <LoginForm />}
      {modalState.view === "signup" && <SignUpForm />}
    </>
  );
};
export default AuthInputs;
