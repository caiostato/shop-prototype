import { ProductType } from "@/types/product";

const getProducts = async () => {
  const data: ProductType[] = await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return data;
};

export { getProducts };
