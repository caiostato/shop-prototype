"use client";
import "./globals.css";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-gold-100 w-screen h-screen m-0 p-0 font-sans antialiased overflow-x-hidden overflow-y-hidden">
        <SessionProvider>
          <main className=" min-w-full min-h-screen ">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
