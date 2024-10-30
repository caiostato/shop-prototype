"use client";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";

const CartIcon = () => {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute flex items-center justify-center top-[-1rem] right-[-1rem] text-white rounded-full bg-red-400 w-5 h-5 text-sm">
        {cartItems}
      </div>
      <ShoppingCart
        className="text-gold-600 "
        strokeWidth={1}
        width={28}
        height={28}
      />
    </div>
  );
};

export default CartIcon;
