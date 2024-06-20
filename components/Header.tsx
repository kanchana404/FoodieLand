import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="wrapper flex-between py-4">
        <div className="text-lg font-bold">
          <Image src="/Foodieland..png" alt="logo" width={100} height={50} />
        </div>
        <nav className="flex space-x-12 ">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Recipes
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Blog
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            About us
          </a>
        </nav>
        <div className="flex space-x-3">
          <a href="#" className="text-gray-700 hover:text-black">
            <Image src="/facebook.png" alt="logo" width={10} height={10} />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <Image src="/twitter.png" alt="logo" width={19} height={19} className="mt-0.5" />
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <Image src="/instagram.png" alt="logo" width={20} height={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
