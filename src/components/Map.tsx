"use client";

import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const containerStyleMobile = {
  width: "100%",
  height: "40vh",
};

const center = {
  lat: 34.7293466708865,
  lng: 135.49939605607292,
};

const zoom = 13;

function Map() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); //ismobileに状態が入る
    };

    window.addEventListener("resize", handleResize); //pageが動いた時に判定してる
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""} //envファイル呼び出し
    >
      <GoogleMap
        mapContainerStyle={isMobile ? containerStyleMobile : containerStyle} //if文みたいな
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
export default Map;
