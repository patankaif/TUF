import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [noteValue, setNoteValue] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const dates = [];
  for (let i = 0; i < firstDay; i++) dates.push(null);
  for (let i = 1; i <= totalDays; i++) dates.push(i);

  const changeMonth = (dir) => {
    setCurrentDate(new Date(year, month + dir, 1));
    setSelectedDates([]); 
  };

  const handleClick = (day) => {
    if (!day) return;

    const clicked = new Date(year, month, day).toDateString();

    setSelectedDates((prev) => {
      if (prev.includes(clicked)) {
        return prev.filter((d) => d !== clicked); 
      } else {
        return [...prev, clicked]; 
      }
    });
  };

  const isSelected = (day) => {
    if (!day) return false;

    const d = new Date(year, month, day).toDateString();
    return selectedDates.includes(d);
  };

  return (
    <div className="calendar">

      <div className="monthHeader">
        <button onClick={() => changeMonth(-1)}>{"<"}</button>
        <h2>{monthNames[month]} {year}</h2>
        <button onClick={() => changeMonth(1)}>{">"}</button>
      </div>

      <div className="calendarBody">
        <div className="notes">
          <h3>Notes</h3>
          <textarea 
            className="note-textarea"
            value={noteValue}
            onChange={(e) => setNoteValue(e.target.value)}
            placeholder="Write your notes here..."
          />
        </div>

        <div className="calendarContent">
          <div className="days">
            {days.map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>

          <div className="dates">
            {dates.map((d, i) => (
              <div
                key={i}
                className={`date ${isSelected(d) ? "selected" : ""}`}
                onClick={() => handleClick(d)}
              >
                {d || ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;