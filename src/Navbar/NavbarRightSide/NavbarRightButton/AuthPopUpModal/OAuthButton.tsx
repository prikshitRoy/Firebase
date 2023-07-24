import { Button } from "@/components/ui/button";
import React from "react";

const OAuthButton: React.FC = () => {
  return (
    <div className="flex w-[100%] mb-4">
      <Button variant={"outline"} className="p-5 mb-2 mt-2">
        Continue with Google
      </Button>
      <Button variant={"outline"} className="p-5 mb-2 mt-2">
        Some Other Provider
      </Button>
    </div>
  );
};
export default OAuthButton;
