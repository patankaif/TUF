import React from "react";
import "./Spring.css";

const Spring = ({ count = 40 }) => {
  return (
    <div className="spring">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="ring"></div>
      ))}
    </div>
  );
};

export default Spring;