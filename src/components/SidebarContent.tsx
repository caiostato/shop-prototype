"use client";
import React from "react";

import { useAuthStore } from "@/context/auth";

import Button from "@/components/Button";

import { SheetFooter, SheetHeader } from "./ui/sheet";

const SidebarContent = () => {
  const hasAuth = useAuthStore((state) => state.auth);

  return (
    <>
      <SheetHeader>dasdas</SheetHeader>
      dasdas
      <SheetFooter className="flex flex-row gap-4">
        {hasAuth ? (
          <Button mode="none" type="button">
            Log Out
          </Button>
        ) : (
          <>
            <Button mode="full" type="button">
              Sign Up
            </Button>
            <Button mode="border" type="button">
              Sign In
            </Button>
          </>
        )}
      </SheetFooter>
    </>
  );
};

export default SidebarContent;
