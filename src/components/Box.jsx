import React from "react";
import "./Box.css";
import Spring from "./Spring";
import Calendar from "./Calendar";
function Box() {
  return (
    <div className="mainBox">
      <div className="calendar">
        <Spring />

        <div className="box">
            <img src="/image2.jpg" alt="cover" className="topImage" />
            <div className="wave">
                <svg viewBox="0 0 500 100" preserveAspectRatio="none">
                <path
                    d="M0,0 L500,0 L500,60 
                    Q400,100 300,70 
                    Q200,40 100,80 
                    Q50,100 0,70 Z"
                />
                </svg>
            </div>

            <Calendar />
            <div className="content"></div>
        </div>
      </div>
    </div>
  );
}

export default Box;