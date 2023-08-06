import React, { useState } from "react";
import CreateCommunityModal from "@/components/Modal/CreateCommunityModal";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <DropdownMenuSeparator className="bg-zinc-600" />
      <Button
        onClick={() => setOpen(true)}
        className="flex w-full justify-center hover:bg-neutral-800"
      >
        Create Community
      </Button>
    </>
  );
};
export default Communities;
