import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (req.method === "GET") {
    let data;
    let totalProducts;

    try {
      const prisma = new PrismaClient();
      data = await prisma.product.findMany();
      totalProducts = await prisma.product.count();

      return NextResponse.json(
        { products: data, totalProducts: totalProducts },
        {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Error retrieving products", details: error },
        { status: 500 }
      );
    }
  }
}
