import React, { useState } from "react";
import "./Box.css";
import Spring from "./Spring";
import Calendar from "./Calendar";

function Box() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthlyShapes = [
    "M0,0 L500,0 v60 C400,90 250,30 0,80 Z",         // Jan
    "M0,0 L500,0 v60 Q400,100 300,70 Q200,40 100,80 Q50,100 0,70 Z", // Feb
    "M0,0 L500,0 v50 Q250,110 0,50 Z",               // Mar
    "M0,0 L500,0 v60 C400,40 150,120 0,60 Z",         // Apr
    "M0,0 L500,0 v70 Q375,100 250,70 Q125,40 0,70 Z", // May
    "M0,0 L500,0 v60 Q450,130 0,60 Z",                // Jun
    "M0,0 L500,0 v80 L250,420 L0,80 Z",               // Jul
    "M0,0 L500,0 v60 C350,100 150,20 0,60 Z",        // Aug
    "M0,0 L500,0 v70 Q250,130 0,70 Z",                // Sep
    "M0,0 L500,0 v60 Q400,90 20,90 Q100,90 0,60 Z", // Oct
    "M0,0 L500,0 v50 C400,100 10,100 0,50 Z",       // Nov
    "M0,0 L500,0 v70 Q250,122 0,70 Z"                // Dec
  ];

  const currentMonth = currentDate.getMonth();

  return (
    <div className="mainBox">
      <div className="calendar">
        <Spring />

        <div className="box">
          <img src="/image2.jpg" alt="cover" className="topImage" />
          <div className="wave">
            <svg viewBox="0 0 500 100" preserveAspectRatio="none">
              <path d={monthlyShapes[currentMonth]} />
            </svg>
          </div>

          <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
}

export default Box;