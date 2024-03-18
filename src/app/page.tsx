"use client";
import BottomMenu from "@/components/BottomMenu";
import Sidebar from "@/components/Sidebar";
import TopMenu from "@/components/TopMenu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useAnimate } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [scope, animate] = useAnimate();
  const [status, setStatus] = useState(false);
  const handleClickOpen = () => {
    animate("div", { x: "100%" }, { ease: "circInOut" });
  };
  const handleClickClose = () => {
    animate("div", { x: "0%" });
  };

  const handleClickOpenMenu = () => {
    handleClickOpen();
    setStatus(true);
  };
  return (
    <div className="bg-zinc-100 container m-0 p-0 font-sans antialiased overflow-x-hidden overflow-y-hidden">
      <Sidebar
        status={status}
        scope={scope}
        setStatus={() => {
          setStatus(false);
        }}
      />
      <div className={`${status ? "blur-sm" : "duration-100"}`}>
        <TopMenu handleClickOpenMenu={handleClickOpenMenu} />
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
        <BottomMenu />
      </div>
    </div>
  );
}
