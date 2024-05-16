import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const HasAuth = () => {
  return (
    <div className="h-full w-full flex flex-col justify-start items-start m-0 p-0">
      <div className="w-full h-60 bg-pink/70 flex flex-col items-center justify-center gap-4">
        <Avatar className="w-32 h-32 shadow-lg border border-[#f56565]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="text-white font-medium text-2xl">Caio Stato</div>
        <Tabs defaultValue="account" className="w-fit bottom-2">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default HasAuth;
