"use client";
import { Search } from "lucide-react";
import React, { ChangeEvent, useState } from "react";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {};

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="h-10 px-4 rounded-lg flex items-center bg-[#f8f5f1]">
        <input
          className="h-8 bg-[#f8f5f1] rounded-md outline-none ring-none placeholder-gold-600/50 text-gold-600 placeholder:font-light"
          type="text"
          placeholder="Pesquise aqui..."
          value={inputValue}
          onChange={onChangeInputValue}
        />
        <Search
          className="text-gold-600 hover:cursor-pointer"
          strokeWidth={1}
        />
      </div>
      <UserIcon />
      <CartIcon />
    </div>
  );
};

export default SearchBar;
