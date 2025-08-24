"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8); // threshold
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-bg" : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between p-6">
        <h1 className="text-4xl text-expresso font-bold font-playfair italic no-synth">
          My Pilate
        </h1>
        <BurgerMenu />
      </div>
    </header>
  );
}
