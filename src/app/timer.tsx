"use client";
import { useState } from "react"
export function Timer() {
  let [currentDate, setCurrentDate] = useState(new Date(Date.now()));
  let [peaugeotDate, setPeageotDate] = useState(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDay()))
  // Date.now() <- teraz!
  return (
    //placeholder for the timer during the process of building the structure of the website
    <div className="timer">
      <h1 id="mainTimer">{peaugeotDate.toDateString()}</h1>
    </div>
  );
}
