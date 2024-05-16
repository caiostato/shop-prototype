"use client";
import React from "react";

import { useAuthStore } from "@/context/auth";

import HasAuth from "@/features/account/components/HasAuth";
import NoAuth from "@/features/account/components/NoAuth";

const AccountPage = () => {
  const hasAuth = useAuthStore((state) => state.auth);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center m-0 p-0">
      {hasAuth ? <HasAuth /> : <NoAuth />}
    </div>
  );
};

export default AccountPage;
