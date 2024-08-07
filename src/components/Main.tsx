"use client";

import React from "react";

function Main() {
  return (
    <div
      id="main-contents"
      className="text-center p-5 flex flex-col lg:flex-row items-center justify-center w-full"
    >
      <form className="m-5 w-full max-w-xs flex flex-col justify-center">
        <div className="mb-5">
          <p className="text-lg mb-2">あなたの現在地</p>
          <input
            type="text"
            defaultValue="0000000"
            className="text-center border-2 border-r-2 border-gray-500"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={() => {
            alert("旅行先を決めます");
          }}
        >
          旅行先を決める
        </button>
      </form>
      <div className="m-5 w-full">
        <h3 className="text-lg">Map</h3>
        <div className="border-2 border-gray-500 min-h-96 max-h-96 overflow-y-scroll">
          <p>ここにマップを配置</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
