import React from "react";
import { ArrowLeft } from "iconsax-react";

type BackButtonProps = {
  fn: any;
};

const BackButton = ({ fn }: BackButtonProps) => {
  return <ArrowLeft size="32" color="black" onClick={fn} className="my-auto" />;
};

export default BackButton;
