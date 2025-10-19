import React from "react";
import type { ButtonProps } from "./Button.types";
import clsx from "clsx";

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  variant = "radient",
  size = "md",
}) => {
  const baseClass = "rounded-md cursor-pointer";
  const variantClass = {
    primary: "bg-primary text-white",
    radient: "bg-linear-to-t from-[#FFCC21] to-[#FF963C] text-white",
  };
  const sizeClass = {
    sm: "text-[14px] py-[10px] px-13",
    md: "text-[18px]/[26px] py-[15px] px-19",
    lg: "text-[22px] py-[20px] px-25",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClass,
        variantClass[variant],
        sizeClass[size],
        disabled && "btn-disabled",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
