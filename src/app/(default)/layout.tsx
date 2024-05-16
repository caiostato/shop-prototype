"use client";
import "../globals.css";
import React, { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";

import BottomMenu from "@/components/BottomMenu";
import SidebarContent from "@/components/SidebarContent";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [iconSelected, setIconSelected] = useState("home");

  useEffect(() => {
    if (pathname == "/account") setIconSelected("user");
    else setIconSelected("cart");
  }, []);
  return (
    <html lang="pt">
      <body className="bg-white w-screen h-screen m-0 p-0 font-sans antialiased overflow-x-hidden overflow-y-hidden">
        <Sheet>
          <SheetContent side={"left"} className="flex flex-col justify-between">
            <SidebarContent />
          </SheetContent>

          <div className={`h-full w-screen`}>
            <div className={`h-full w-full m-0 p-0`}>{children}</div>
            <BottomMenu
              iconSelected={iconSelected}
              setIconSelected={setIconSelected}
            />
          </div>
        </Sheet>
      </body>
    </html>
  );
}
