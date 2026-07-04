import React from "react";
import clsx from "clsx";

const Button = ({ children, variant = "primary", className, ...props }) => {
  return (
    <button
      className={clsx(
        // Base Styles
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

        // Variants
        {
          "bg-[#00ABE4] text-white hover:bg-sky-600 focus:ring-sky-400":
            variant === "primary",

          "border border-[#00ABE4] bg-white text-[#00ABE4] hover:bg-[#E9F1FA] focus:ring-sky-400":
            variant === "secondary",

          "bg-transparent text-[#00ABE4] hover:bg-[#E9F1FA] focus:ring-sky-400":
            variant === "ghost",

          "bg-white text-[#00ABE4] hover:bg-slate-100 focus:ring-sky-400":
            variant === "white",
        },

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;