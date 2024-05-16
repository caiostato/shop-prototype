"use client";
import Carousel from "@/components/Carousel";

import HomeTab from "@/features/home";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Carousel />
      <HomeTab />
    </div>
  );
}
