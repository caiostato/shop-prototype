"use client";
import "./globals.css";
import React from "react";

import { SessionProvider } from "next-auth/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-white w-screen h-screen m-0 p-0 font-sans antialiased overflow-x-hidden overflow-y-hidden">
        <SessionProvider>
          <SidebarProvider>
            <AppSidebar />
            <main className="bg-gold-100 min-w-full min-h-screen">
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
