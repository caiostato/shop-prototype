import React from "react";
import {
  Carousel as CarouselUI,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Carousel = () => {
  return (
    <div className="absolute top-16 w-full border-t border-zinc-100 bg-white ">
      <CarouselUI
        className="w-full max-w-full"
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
      </CarouselUI>
    </div>
  );
};

export default Carousel;
