"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
};

const MobileNav = ({ isMenuOpen, setIsMenuOpen }: MobileNavProps) => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News & Events", path: "/news-events" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Utility"
      className="bg-white flex items-center justify-between h-16 px-4 fixed w-full z-50"
    >
      <Link href="/" className="flex items-center gap-2">
        <p>Logo</p>
      </Link>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`
          fixed left-0 w-full bg-emerald-600 z-40 flex flex-col items-center 
          transition-all duration-300
          ${
            isMenuOpen
              ? "top-16 h-screen opacity-100"
              : "top-16 h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col gap-8 pt-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-2xl transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-white hover:text-primary-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
