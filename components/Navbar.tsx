"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  title: string;
  sectionId: string;
};

export default function Navbar({
  navigation = [],
}: {
  navigation?: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  // active section detect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navigation.forEach((item) => {
      const el = document.getElementById(item.sectionId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navigation]);

  // hide / show navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white/20 backdrop-blur-md transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-signature text-3xl font-extrabold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent">
          Mim
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          {navigation.map((item) => (
            <li key={item.sectionId}>
              <button
                onClick={() => handleScroll(item.sectionId)}
                className={`transition ${
                  active === item.sectionId
                    ? "text-purple-400 font-semibold"
                    : "hover:text-purple-300"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-6 pb-6">
          <ul className="flex flex-col gap-4 text-white">
            {navigation.map((item) => (
              <li key={item.sectionId}>
                <button
                  onClick={() => handleScroll(item.sectionId)}
                  className={`w-full text-left transition ${
                    active === item.sectionId
                      ? "text-purple-400 font-semibold"
                      : "hover:text-purple-300"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

