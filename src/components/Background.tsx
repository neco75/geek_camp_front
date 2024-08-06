"use client";

import React, { useState, useEffect } from "react";

function Background() {
  const [imageUrl, setImageUrl] = useState(
    "https://picsum.photos/1980/1080?blur=5"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageUrl(
        `https://picsum.photos/1980/1080?blur=5&random=${Math.random()}`
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageUrl})`,
          opacity: 0.5,
          zIndex: -1,
        }}
      ></div>
    </>
  );
}

export default Background;
