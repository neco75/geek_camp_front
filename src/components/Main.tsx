

import React, { useState } from "react";
import Map from "./Map";

function Main() {
  const [place, setPlace] = useState("");
  const [detail, setDetail] = useState("");
  const [address, setAddress] = useState("00000000");

  const handleSubmit = (e: React.FormEvent) => {
    //ここでAPIを叩いてデータを取得する useEffectを使う
    e.preventDefault();
    setPlace("東京");
    setDetail("東京都は、日本の首都であり、日本最大の都市です。");
  };

  return (

    <div
      id="main-contents"
      className="text-center p-5 flex flex-col lg:flex-row items-center justify-center w-full"
    >
      <form
          className="m-5 w-full max-w-xs flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
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
            旅行先を決める
          </button>
        </form>
        <div className="m-5 w-full">
          <h3 className="text-lg">Map</h3>
          <div className="border-2 border-gray-500  overflow-y-scroll">
            <Map />
          </div>
        </div>
      </div>
      <div
        id="detail-text"
        className="flex flex-col items-center justify-center w-full p-5"
      >
        <div className="w-full max-w-screen-xl bg-slate-200/60 p-5 rounded-lg">
          <h2 className="text-2xl font-bold text-center">旅行先の詳細</h2>
          <ul className="text-left p-5">
            <li className="mb-5 flex items-center">
              <h3 className="text-lg">場所 : </h3>
              <p className="text-sm">{place}</p>
            </li>
            <li className="mb-5 flex items-center">
              <h3 className="text-lg">詳細 : </h3>
              <p className="text-sm">{detail}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
