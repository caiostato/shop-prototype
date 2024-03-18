"use client";
import React, { useState } from "react";
import { Home2, ShoppingCart, User } from "iconsax-react";

const BottomMenu = () => {
  const [iconSelected, setIconSelected] = useState("home");

  const handleClickIcon = (value: string) => {
    setIconSelected(value);
  };
  return (
    <div className="w-screen h-16 bg-zinc-50 absolute bottom-0 flex flex-row justify-around shadow-sm ">
      <div
        className={`my-2 p-2 rounded-full ${
          iconSelected == "home" ? "bg-[#582FFF]/20" : ""
        }`}
        onClick={() => {
          handleClickIcon("home");
        }}
      >
        <Home2
          size="32"
          color={`${iconSelected == "home" ? "#582FFF" : "black"}`}
          variant={`${iconSelected == "home" ? "Bold" : "Linear"}`}
          className="my-auto"
          onClick={() => {
            handleClickIcon("home");
          }}
        />
      </div>

      <div
        className={`my-2 p-2 rounded-full duration-100 ease-in ${
          iconSelected == "cart" ? "bg-[#582FFF]/20" : ""
        }`}
        onClick={() => {
          handleClickIcon("cart");
        }}
      >
        <ShoppingCart
          size="32"
          color={`${iconSelected == "cart" ? "#582FFF" : "black"}`}
          variant={`${iconSelected == "cart" ? "Bold" : "Linear"}`}
          className="my-auto duration-100 ease-in"
          onClick={() => {
            handleClickIcon("cart");
          }}
        />
      </div>

      <div
        className={`my-2 p-2 rounded-full ${
          iconSelected == "user" ? "bg-[#582FFF]/20" : ""
        }`}
        onClick={() => {
          handleClickIcon("user");
        }}
      >
        <User
          size="32"
          color={`${iconSelected == "user" ? "#582FFF" : "black"}`}
          variant={`${iconSelected == "user" ? "Bold" : "Linear"}`}
          className="my-auto"
          onClick={() => {
            handleClickIcon("user");
          }}
        />
      </div>
    </div>
  );
};

export default BottomMenu;
