import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="relative w-40 h-12">
            <Image
              src="/rand-jouney-logo-full.png"
              className="mr-3 object-contain"
              alt="ランジャニちゃん"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
