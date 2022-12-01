import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="shadow-s h-12">
      <div className="container m-auto">
        <div className="flex gap-x-4 items-center">
          <Link href="/" className="text-base font-medium text-green-700">
            Home
          </Link>
          <Link href="/about" className="text-base font-medium">
            About
          </Link>
          <Link href="/contact" className="text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
