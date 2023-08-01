import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

type NavbarRightUserProps = {};

const NavbarRightUser: React.FC<NavbarRightUserProps> = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
export default NavbarRightUser;
