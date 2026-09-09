"use client";
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  //Przechowywawnie czasu który pozostał do ustawionej daty.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //Używanie 'useEffect' to sprawdzenia czy użytkownik załadował stronę, co powoduje uruchomienie skryptu odliczania.
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      let newTimeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      //Sprawdzenie czy odliczanie zostało zakończone, żeby timer nie liczył poniżej zera.
      if (difference > 0) {
        newTimeLeft = {
          //Suma milisekund, żeby otrzymać ilość dni.
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          //Izolowanie pozostałych godzin do pojedzynczego dnia.
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          //Pozostałe minuty.
          minutes: Math.floor((difference / 1000 / 60) % 60),
          //Pozosałe sekundy.
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };

    //Używanie 'useEffect' to sprawdzenia czy użytkownik załadował stronę, co powoduje uruchomienie skryptu odliczania.
    useEffect(() => {
      //Zapobieganie opóźnienia.
        setTimeLeft(calculateTimeLeft());

      //Wywoływanie odświerzenia licznika co sekunde.
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);

      //Zapobieganie memory leak
        return () => clearInterval(timer);
      }, [targetDate]);

  return (
    <div>
      <div className="Timer">
        <p>Dni</p>
        <span>{timeLeft.days}</span>
      </div>
      <div>
        <p>Godziny</p>
        <span>{String(timeLeft.hours)}</span>
      </div>
      <div>
        <p>Minuty</p>
        <span>{String(timeLeft.minutes)}</span>
      </div>
      <div>
        <p>Sekundy:</p>
        <span>{String(timeLeft.seconds)}</span>
      </div>
      <div>
        <p>Odliczanie do daty: { targetDate.toString() }</p>
      </div>
    </div>
  );
}
