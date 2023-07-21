import { Button } from "@/components/ui/button";
import React from "react";

const NavbarRightButton: React.FC = () => {
  return (
    <>
      <Button
        variant="outline"
        /*       onClick={()=>{}} */
      >
        Log In
      </Button>
      <Button
        variant="outline"
        /*       onClick={()=>{}} */
      >
        Sign Up
      </Button>
    </>
  );
};
export default NavbarRightButton;
