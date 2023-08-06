import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeIcon } from "@radix-ui/react-icons";
import React from "react";
import Communities from "@/components/Buttons/Communities/CreateCommunityButton";

type SelectCommunityButtonProps = {};

const SelectCommunityButton: React.FC<SelectCommunityButtonProps> = () => {
  // Common className to be applied to all DropdownMenuItem elements
  const commonClassName =
    "cursor-pointer hover:bg-neutral-800 flex justify-center";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HomeIcon className="h-5 w-5 hover:text-zinc-400" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-10 mr-4 w-56 bg-black">
        {/* Importing Community */}
        <Communities />
        <DropdownMenuGroup>
          <DropdownMenuItem className={commonClassName}>
            Teaching
          </DropdownMenuItem>
          <DropdownMenuItem className={commonClassName}>
            Codding
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default SelectCommunityButton;
