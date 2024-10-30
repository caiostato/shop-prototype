import { Product } from "@prisma/client";

const getProducts = async (): Promise<{
  products: Product[];
  totalProducts: number;
}> => {
  const response = await fetch(`${process.env.VERCEL_URL}/api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    // Handle HTTP errors (e.g., 404, 500)
    console.log("HTTP error:", response.statusText);
    return { products: [], totalProducts: 0 };
  }

  if (response.ok) {
  }

  const data = await response.json();
  console.log(data);

  return { products: data.products, totalProducts: data.totalProducts };
};

export { getProducts };
