"use client";
import finalHours from "@/public/music/final-hours.mp3";

function Music() {
  return (
    <audio autoPlay controls loop>
      <source src={finalHours} type="audio/mpeg"/>
    </audio>
  )
}

export default Music;
