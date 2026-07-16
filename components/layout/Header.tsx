"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <Link className="site-logo" href="#top" aria-label="Retour au début">
        KRIMO
      </Link>
      <nav className="desktop-nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="#contact">
        Collaborer
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{isOpen ? "Fermer" : "Menu"}</span>
      </button>
      <div id="mobile-menu" className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <nav aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            Collaborer
          </Link>
        </nav>
      </div>
    </header>
  );
}
