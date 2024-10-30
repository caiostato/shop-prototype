"use client";
import { CircleUser } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserIcon = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none ring-none">
        <div className="flex items-center justify-center relative group">
          <CircleUser
            className="text-gold-600 group-hover:cursor-pointer group-hover:scale-105 duration-150 ease-in"
            width={28}
            height={28}
            strokeWidth={1}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gold-600">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserIcon;
