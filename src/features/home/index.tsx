import ProductItem from "@/components/ProductItem";
import { getProducts } from "@/services/products";
import { ProductType } from "@/types/product";
import React, { useEffect, useState } from "react";

const HomeTab = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  const fetchProducts = async () => {
    const data = await getProducts();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full h-full flex">
      {/* <div className="w-full h-full flex flex-row overflow-x-hidden flex-wrap justify-around gap-2"></div> */}
      <div className="w-full h-full flex flex-row overflow-x-hidden flex-wrap justify-around gap-4 gap-y-8">
        {products?.map((product: ProductType) => {
          return (
            <ProductItem
              id={product.id}
              category={product.category}
              description={product.description}
              image={product.image}
              price={product.price}
              title={product.title}
              rating={product.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeTab;
