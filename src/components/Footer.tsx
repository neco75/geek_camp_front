import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex ">
          <div className="relative w-60 h-30">
            <Image
              src="/RJlogo-horizontal.png"
              alt="FlowBite Logo"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 60px"
              priority
            />
          </div>
          <div className="flex-grow"></div>
          <div className="grid  gap-8 sm:gap-6 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Developer name
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    大熊佑輔
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/neco75"
                    className="hover:underline"
                    target="_blank"
                  >
                    neco
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    チャーリーさん
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    めぐる
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
