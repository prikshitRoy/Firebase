import SelectCommunityButton from "@/components/Buttons/Communities/SelectCommunityButton";
import React from "react";

type NavBarLeftContentProps = {};

const NavBarLeftContent: React.FC<NavBarLeftContentProps> = () => {
  return (
    <div>
      <SelectCommunityButton />
    </div>
  );
};
export default NavBarLeftContent;
