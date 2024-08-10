import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="relative w-40 h-12">
            <Link href="/">
              <Image
                src="/RJlogo-horizontal.png"
                className="mr-3 object-contain"
                alt="ランジャニちゃん"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <div className="flex items-center lg:order-2">
            <Link
              href="/signin"
              className="text-black bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
