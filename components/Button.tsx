"use client";

import { ArrowRight } from "lucide-react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

const Button = ({title, onClick}: ButtonProps) => {
  return (
    <button
    type="button"
    className="flex items-center justify-center gap-2 px-5 py-2 bg-secondary text-white rounded-lg text-sm md:text-[15px] font-semibold shadow-sm hover:scale-105 transition-transform"
    onClick={onClick}
    >
        <p>{title}</p>
        <ArrowRight size={22} strokeWidth={1.5} />
    </button>
  )
}

export default Button;