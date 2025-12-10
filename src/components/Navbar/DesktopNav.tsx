"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const DesktopNav = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Members", path: "/members" },
    { name: "News & Events", path: "/news-events" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav
      role="navigation"
      aria-label="Utility"
      className="flex flex-col justify-center h-16 px-6 bg-white backdrop-blur-md"
    >
      <div className="flex items-center justify-between h-full">
        <h2>Logo</h2>

        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative transition-colors ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-700 hover:text-primary"
                  } after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-primary after:w-0 after:transition-all after:duration-300 hover:after:w-full 
                  ${isActive ? "after:w-full" : ""}
    `}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* External button */}
        <a
          href="https://www.amsafricaconference.org"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Visit Conference
        </a>
      </div>
    </nav>
  );
};

export default DesktopNav;
