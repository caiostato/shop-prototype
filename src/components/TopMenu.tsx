"use client";
import React from "react";
import Image from "next/image";
import { TextalignLeft, SearchNormal1 } from "iconsax-react";
import { useAnimate } from "framer-motion";

import LogoMin from "@/assets/logo-min.png";

import BackButton from "./BackButton";

import { Input } from "./ui/input";
import { SheetTrigger } from "./ui/sheet";

type TopMenuProps = {};

const TopMenu = ({}: TopMenuProps) => {
  const [scope, animate] = useAnimate();

  const handleClickBackButton = () => {
    animate("div", { x: "0%" });
  };
  const handleClickSearchIcon = () => {
    animate("div", { x: "-100%" }, { ease: "circInOut" });
  };

  return (
    <div
      ref={scope}
      className="w-full h-16 absolute top-0 bg-white grid grid-flow-col columns-1 mt-1 overflow-x-hidden"
    >
      <div className="w-screen h-full flex flex-row justify-between px-6 overflow-x-hidden">
        <SheetTrigger>
          <TextalignLeft size="32" color="black" className="my-auto" />
        </SheetTrigger>
        <Image src={LogoMin} alt="Logo" className="w-16 h-16" />
        <SearchNormal1
          size="32"
          color="black"
          className="my-auto"
          onClick={handleClickSearchIcon}
        />
      </div>
      <div className="w-screen h-full flex flex-row justify-around py-auto overflow-x-hidden">
        <BackButton fn={handleClickBackButton} />
        <Input placeholder="Pesquisar" className="w-[80%] mt-3" />
      </div>
    </div>
  );
};

export default TopMenu;
