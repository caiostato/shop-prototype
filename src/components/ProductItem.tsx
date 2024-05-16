import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ProductType } from "@/types/product";
import { formatCurrency } from "@/utils/formaters";

const ProductItem = ({
  id,
  image,
  title,
  description,
  price,
  category,
  rating,
}: ProductType) => {
  return (
    <Card
      key={id}
      className="w-48 flex flex-col justify-between items-center py-2  overflow-hidden group border-none outline-none ring-0 shadow-none bg-white"
    >
      <CardContent className="transform-[translateZ(0)] relative z-[2] size-[200px] overflow-hidden md:size-[300px]">
        <a href={""}>
          <Image
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 450px) 150px, 300px"
            src={image}
            alt={`${id}${title} image`}
            width={150}
            height={300}
            className="z-0 select-none object-cover transition-transform group-hover:scale-105 max-h-[300px]"
          />
        </a>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-2 text-left justify-start items-start">
        <p className="line-clamp-2 text-base tracking-tight md:text-xl">
          {title}
        </p>
        <p className="text-base font-semibold tracking-tight text-black md:text-lg">
          R$ {formatCurrency(price)}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
