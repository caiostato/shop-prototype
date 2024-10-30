import Image from "next/image";
import React from "react";

import Logo from "@/assets/logo-wordmark.jpg";
import SearchBar from "./SearchBar";

const Menu = () => {
  return (
    <div className="min-w-full bg-cream px-32 pt-2">
      <div className=" w-full flex items-center justify-between py-2 border-b-[1px] border-gold-600/10">
        <Image src={Logo} alt={"logo"} width={200} height={50} />
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Menu;
