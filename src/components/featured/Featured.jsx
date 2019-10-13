import React from "react";
import Carrousel from "./Carrousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <TimeUntil />
      <div className="artist_name">
        <div className="wrapper">Aiana Grande</div>
      </div>
    </div>
  );
};

export default Featured;
