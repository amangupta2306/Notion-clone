"use client";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, ChevronsLeftRight } from "lucide-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

export const UserItem = () => {
  const { user } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center w-full hover:bg-primary/10 p-3"
        >
          <div className="flex items-center gap-x-2 max-w-[150px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="font-medium line-clamp-1">{user?.fullName}</span>
          </div>
          <ChevronsLeftRight className="h-4 w-4 rotate-90 text-muted-foreground ml-2" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex items-center justify-center gap-x-3 p-3">
          <div>
            <Avatar className="h-10 w-10">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
          </div>
          <div>
            <p>{user?.fullName}</p>
            <p className="text-xs line-clamp-1 text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="">
          <SignOutButton>
            <div className="flex items-center justify-center text-muted-foreground gap-x-1 p-1 cursor-pointer">
              Log out
              <ArrowRight className="h-4 w-4" />
            </div>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
