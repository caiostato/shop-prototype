import Menu from "@/components/Menu";
import TopAd from "@/components/TopAd";
import { getProducts } from "@/services/products";
import React from "react";

export default async function Page() {
  // const { products, totalProducts } = await getProducts();

  return (
    <div className="min-h-screen w-full ">
      <TopAd />
      <Menu />
    </div>
  );
}
