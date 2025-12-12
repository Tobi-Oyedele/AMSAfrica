"use client";

import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="block lg:hidden">
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </div>
  );
};

export default Navbar;
