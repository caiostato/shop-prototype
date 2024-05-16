"use client";
import React from "react";
import { Home2, ShoppingCart, User } from "iconsax-react";
import { useRouter } from "next/navigation";

type BottomMenuProps = {
  iconSelected: any;
  setIconSelected: any;
};

const BottomMenu = ({ iconSelected, setIconSelected }: BottomMenuProps) => {
  const { push } = useRouter();

  const handleClickIcon = (value: string) => {
    setIconSelected(value);
  };
  return (
    <div className="w-screen h-16 bg-white absolute bottom-0 flex flex-row justify-around z-50 border-t border-neutral-100 shadow-lg">
      <a
        href="/"
        className={`my-2 p-2 rounded-full ${
          iconSelected == "home" ? "bg-[#F89595]/30" : ""
        }`}
        onClick={() => {
          handleClickIcon("home");
        }}
      >
        <Home2
          size="32"
          color={`${iconSelected == "home" ? "#F89595" : "black"}`}
          variant={`${iconSelected == "home" ? "Bold" : "Linear"}`}
          className="my-auto"
          onClick={() => {
            handleClickIcon("home");
          }}
        />
      </a>

      <a
        href="/cart"
        className={`my-2 p-2 rounded-full duration-100 ease-in ${
          iconSelected == "cart" ? "bg-[#F89595]/30" : ""
        }`}
        onClick={() => {
          handleClickIcon("cart");
        }}
      >
        <ShoppingCart
          size="32"
          color={`${iconSelected == "cart" ? "#F89595" : "black"}`}
          variant={`${iconSelected == "cart" ? "Bold" : "Linear"}`}
          className="my-auto duration-100 ease-in"
          onClick={() => {
            handleClickIcon("cart");
          }}
        />
      </a>

      <a
        href="/account"
        className={`my-2 p-2 rounded-full ${
          iconSelected == "user" ? "bg-[#F89595]/30" : ""
        }`}
        onClick={() => {
          handleClickIcon("user");
        }}
      >
        <User
          size="32"
          color={`${iconSelected == "user" ? "#F89595" : "black"}`}
          variant={`${iconSelected == "user" ? "Bold" : "Linear"}`}
          className="my-auto"
          onClick={() => {
            handleClickIcon("user");
          }}
        />
      </a>
    </div>
  );
};

export default BottomMenu;
