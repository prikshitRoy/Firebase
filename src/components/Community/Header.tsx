import { Community } from "@/atoms/communitiesAtom";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  // Did user joined the community -- Read it from User CommunitySnippits
  const isJoined = false;

  return (
    <div className="flex h-[146px] w-full flex-col">
      <div className="mt-24 h-[1/2]">
        <Avatar className="flex">
          {communityData.imageURL ? (
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          ) : (
            <AvatarFallback>CN</AvatarFallback>
          )}
        </Avatar>
        <div className="flex">
          <div className="mr-6 flex flex-col">
            <blockquote className="text-lg font-extrabold">
              {communityData.id}
            </blockquote>
          </div>
        </div>
        <Button variant={isJoined ? "outline" : "secondary"} onClick={() => {}}>
          {isJoined ? "Joined" : "Join"}
        </Button>
      </div>
    </div>
  );
};
export default Header;
