import Image from "next/image";
import React from "react";

import Logo from "@/assets/logo-wordmark.svg";
import SearchBar from "./SearchBar";

const Menu = () => {
  return (
    <div className="min-w-full bg-cream  pt-2 border-gold-600/10">
      <div className=" w-full flex items-center justify-between py-2 border-b-[1px] px-32">
        <Image src={Logo} alt={"logo"} width={240} height={60} />
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Menu;
