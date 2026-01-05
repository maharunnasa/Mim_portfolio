"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavItem = {
  title: string;
  sectionId: string;
};

export default function Navbar({ navigation = [] }: { navigation?: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
       <h1 className="font-signature text-3xl font-extrabold bg-gradient-to-r from-blue-300 purple-200 to-pink-300 bg-clip-text text-transparent">
  Mim
</h1>



        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navigation.map((item) => (
            <li key={item.sectionId}>
              <Link
                href={`#${item.sectionId}`}
                className="hover:text-purple-500"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/10 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.sectionId}>
                <Link
                  href={`#${item.sectionId}`}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
