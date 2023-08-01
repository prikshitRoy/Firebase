import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import NavbarRightUser from "./NavbarRightUser";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/clientApp";

export function DropdownMenuUser() {
  // Common className to be applied to all DropdownMenuItem elements
  const commonClassName = "cursor-pointer hover:bg-neutral-800";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <NavbarRightUser />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-10 mr-4 w-56 bg-black">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-600" />
        <DropdownMenuGroup className="bg">
          <DropdownMenuItem className={commonClassName}>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className={commonClassName}>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className={commonClassName}>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className={commonClassName}>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-zinc-600" />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className={commonClassName}>
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className=" bg-black">
                <DropdownMenuItem className={commonClassName}>
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem className={commonClassName}>
                  Message
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-zinc-600" />
                <DropdownMenuItem className={commonClassName}>
                  More...
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem className={commonClassName}>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-zinc-600" />
        <DropdownMenuItem className={commonClassName}>GitHub</DropdownMenuItem>
        <DropdownMenuItem className={commonClassName}>Support</DropdownMenuItem>
        <DropdownMenuItem disabled className={commonClassName}>
          API
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-zinc-600" />
        <DropdownMenuItem
          onClick={() => signOut(auth)}
          className={commonClassName}
        >
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
