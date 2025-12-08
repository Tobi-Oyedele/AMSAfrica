"use client";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden">
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </div>
  );
};

export default Navbar;
