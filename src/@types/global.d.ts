// global.d.ts
import { PrismaClient } from "@prisma/client";

declare global {
  namespace NextJS {
    interface Global {
      prisma: PrismaClient | undefined; // Declare the prisma property on global
    }
  }
}

// Prevent TypeScript from complaining about this file being empty
export {};
