import React from "react";
import Link from "next/link";

const NoAuth = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-44 gap-1">
      <div className="font-medium">You are not logged in</div>
      <Link href={"/signin"} className="font-medium text-pink">
        Sign In here.
      </Link>
    </div>
  );
};

export default NoAuth;
