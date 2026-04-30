"use client";

import { BellIcon } from "lucide-react";
import SearchInput from "../SearchInput";

export default function Topbar() {
  return (
    <section className="fixed top-0 left-64 right-0 h-16 bg-background/80 flex items-center justify-between px-8 shadow-md">

      {/* Search */}
      <SearchInput />

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="hover:bg-primary/20 rounded-full p-2">
          <BellIcon />
        </button>

        <div className="flex items-center gap-2">
          <div>
            <p className="text-sm font-semibold text-foreground">John Doe</p>
            <p className="text-xs text-foreground/50">Operations Manager</p>
          </div>
          <div className="bg-primary w-9 h-9 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}