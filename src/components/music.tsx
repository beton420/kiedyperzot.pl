"use client";
import finalHours from "@/public/music/final-hours.mp3";
import { useEffect, useRef } from "react";

function Music() {
  return (
    <audio autoPlay controls loop>
      <source src={finalHours} type="audio/mpeg"/>
    </audio>
  )
}

export default Music;
