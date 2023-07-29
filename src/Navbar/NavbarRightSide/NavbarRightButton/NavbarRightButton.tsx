import { Button } from "@/components/ui/button";
import React from "react";
import { useSetRecoilState } from "recoil";
import { LoginSignupModal } from "@/atoms/atomAuthModal";

const NavbarRightButton: React.FC = () => {
  // Using Recoil "useSetRecoilState(LoginSignupModal)" to set the State Manually
  const setAuthModalState = useSetRecoilState(LoginSignupModal);

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>

      <Button
        variant="outline"
        onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default NavbarRightButton;
