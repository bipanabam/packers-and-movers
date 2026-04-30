"use client";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
   <div className="hidden md:flex relative items-center group">
      <Search size={18} className="absolute left-2 text-primary/70 group-focus-within:text-primary transition-colors" />
      <input
      id="search"
      type="text"
      placeholder="search shipments, customers..."
      className="bg-transparent rounded-lg border-2 border-b-4 border-primary/70 py-2 px-8 font-inter text-xs font-bold tracking-widest text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-borderColor w-48 lg:w-80"
      />
    </div>
  )
}

export default SearchInput;