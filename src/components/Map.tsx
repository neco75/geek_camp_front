"use client";

import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "70vh",
};

const containerStyleMobile = {
  width: "100%",
  height: "40vh",
};

const zoom = 13;

function Map(props: { address: string }) {
  const [isMobile, setIsMobile] = useState(false);
  const [center, setCenter] = useState({
    lat: 34.7293466708865,
    lng: 135.49939605607292,
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 1024);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof google !== "undefined") {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: props.address }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const location = results[0].geometry.location;
          setCenter({ lat: location.lat(), lng: location.lng() });
          setError(null);
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
          setError("住所の検索に失敗しました。正しい住所を入力してください。");
        }
      });
    }
  }, [props.address]);

  return (
    <>
      {error && <div className="text-red-500  bg-white">{error}</div>}
      <GoogleMap
        mapContainerStyle={isMobile ? containerStyleMobile : containerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}

export default Map;
