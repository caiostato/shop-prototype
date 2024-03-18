"use client";
import React from "react";
import Image from "next/image";
import { HambergerMenu, SearchNormal1 } from "iconsax-react";
import { useAnimate } from "framer-motion";

import LogoMin from "@/assets/logo-min.png";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import BackButton from "./BackButton";
import { Input } from "./ui/input";

type TopMenuProps = {
  handleClickOpenMenu: any;
};

const TopMenu = ({ handleClickOpenMenu }: TopMenuProps) => {
  const [scope, animate] = useAnimate();

  const handleClickBackButton = () => {
    animate("div", { x: "0%" });
  };
  const handleClickSearchIcon = () => {
    animate("div", { x: "-100%" }, { ease: "circInOut" });
  };

  return (
    <>
      <div
        ref={scope}
        className="w-screen h-16 absolute top-0 bg-zinc-50 grid grid-flow-col columns-1 mt-1 overflow-x-hidden"
      >
        <div className="w-screen h-full flex flex-row justify-around overflow-x-hidden">
          <HambergerMenu
            size="32"
            color="black"
            className="my-auto"
            onClick={handleClickOpenMenu}
          />
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
      <div className="absolute top-16 w-full border-t border-zinc-100 bg-zinc-50 ">
        <Carousel
          className="w-full max-w-sm"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="p-1 ml-1 flex flex-row gap-2">
            <CarouselItem className="basis-1/4 border border-zinc-400 rounded-md text-zinc-900">
              <div className="p-1">Roupas</div>
            </CarouselItem>
            <CarouselItem className="basis-1/4 border border-zinc-400 rounded-md text-zinc-900">
              <div className="p-1">Roupas</div>
            </CarouselItem>
            <CarouselItem className="basis-1/4 border border-zinc-400 rounded-md text-zinc-900">
              <div className="p-1">Roupas</div>
            </CarouselItem>
            <CarouselItem className="basis-1/4 border border-zinc-400 rounded-md text-zinc-900">
              <div className="p-1">Roupas</div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default TopMenu;
