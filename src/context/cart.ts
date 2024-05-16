// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// type CartStoreType = {
//   cart: any[];
//   setCart: (value: boolean) => void;
// };

// export const useCartStore = create<CartStoreType>()(
//   persist(
//     (set, get) => ({
//       cart: true,
//       setCart: async (value: boolean) => {
//         set((state) => ({
//           cart: value,
//         }));
//       },
//     }),
//     {
//       name: "cartShopStore",
//     }
//   )
// );
