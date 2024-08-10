"use client";

import React, { useState, useEffect } from "react";

function Background() {
  const [imageUrl, setImageUrl] = useState(`/images/1-min.jpg`);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setImageUrl(`/images/${Math.floor(Math.random() * 30) + 1}-min.jpg`);
        setFade(false);
      }, 1000);
    }, 5000);

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
          zIndex: -1,
          transition: "opacity 1s",
          opacity: fade ? 0 : 0.3,
        }}
      ></div>
    </>
  );
}

export default Background;
