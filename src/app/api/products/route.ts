import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const data = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
  return NextResponse.json(data);
}
