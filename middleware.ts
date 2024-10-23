import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  let cookiesStore = cookies();

  let aux = cookiesStore.getAll();

  console.log(aux);

  return NextResponse.redirect("/");
}
