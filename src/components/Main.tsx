"use client";

import React, { useState, useCallback } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./Map";
import DropdownList from "./DropdownList";

function Main() {
  const [place, setPlace] = useState("");
  const [detail, setDetail] = useState("");
  const [address, setAddress] = useState("1001701");

  const handleSubmit = (e: React.FormEvent) => {
    //ここでAPIを叩いてデータを取得する useEffectを使う
    e.preventDefault();
    setPlace("東京"); //ここに取得したもの
    setDetail("東京都は、日本の首都であり、日本最大の都市です。");
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  return (
    <>
      <div
        id="main-contents"
        className="text-center p-5 flex flex-col lg:flex-row items-center justify-center w-full"
      >
        <form
          className="m-5 w-full border max-w-xs shadow rounded-2xl flex flex-col justify-center bg-white shadow"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <p className="text-base mt-6 mb-3 bmb-2 font-medium">
              あなたの現在地
            </p>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-50 shadow mb-5 text-center border border-gray-300 rounded-lg w-40 focus:ring-blue-500"
            />
          </div>
          <DropdownList />
          <button
            type="submit"
            className="w-40 mb-5 shadow mx-auto text-white bg-gray-700 transition hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Let&apos;s jouney !
          </button>
        </form>
        <div className="m-5 w-full">
          {isLoaded ? <Map address={address} /> : <div>Loading...</div>}
        </div>
      </div>
      <div
        id="detail-text"
        className="flex flex-col items-center justify-center w-full p-5"
      >
        <div className="w-full m-10 max-w-screen-xl bg-gray-100 p-5 border shadow rounded-3xl">
          <h2 className="text-3xl font-bold text-center">おすすめの旅行先</h2>
          <ul className="text-left p-5">
            <li className="mb-5  items-center">
              <h3 className="text-2xl font-semibold">場所</h3>
              <p className="text-lg mt-3">{place}</p>
            </li>
            <li className="mb-5  items-center">
              <h3 className="text-2xl font-semibold">詳細</h3>
              <p className="text-lg mt-3">{detail}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
