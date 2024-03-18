"use client";
import "./globals.css";
import BottomMenu from "@/components/BottomMenu";
import TopMenu from "@/components/TopMenu";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { useAnimate } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const [status, setStatus] = useState(false);
  const handleClickOpen = () => {
    animate("div", { x: "100%" }, { ease: "circInOut" });
  };
  const handleClickClose = () => {
    animate("div", { x: "0%" });
  };

  const handleClickOpenMenu = () => {
    handleClickOpen();
    setStatus(true);
  };

  return (
    <html lang="pt">
      <body className="bg-zinc-50 container m-0 p-0 font-sans antialiased overflow-x-hidden overflow-y-hidden">
        {children}
        {/* <Sidebar
            status={status}
            scope={scope}
            setStatus={() => {
              setStatus(false);
            }}
          />
          <div className={`${status ? "blur-sm" : "duration-100"}`}>
            <TopMenu handleClickOpenMenu={handleClickOpenMenu} />
            {children}
            <BottomMenu />
          </div> */}
      </body>
    </html>
  );
}
