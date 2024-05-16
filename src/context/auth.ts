import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStoreType = {
  auth: boolean;
  setAuth: (value: boolean) => void;
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set, get) => ({
      auth: false,
      setAuth: async (value: boolean) => {
        set((state) => ({
          auth: value,
        }));
      },
    }),
    {
      name: "authShopStore",
    }
  )
);
