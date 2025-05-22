"use client";

import * as React from "react";
import Title from "../common/Title";

const CountDownTimer = () => {
  const [timerDays, setTimerDays] = React.useState<string | number | null>(
    null
  );
  const [timerHours, setTimerHours] = React.useState<string | number | null>(
    null
  );
  const [timerMinutes, setTimerMinutes] = React.useState<
    string | number | null
  >(null);
  const [timerSecondes, setTimerSecondes] = React.useState<
    string | number | null
  >(null);

  const calculateTimeRemaining = () => {
    const endDate = new Date("June 10, 2025 00:00:00").getTime();
    const currentDate = new Date().getTime();
    const remains = endDate - currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remainsDays = Math.floor(remains / days);
    const remainsHours = Math.floor((remains % days) / hours);
    const remainsMinutes = Math.floor((remains % hours) / minutes);
    const remainsSecondes = Math.floor((remains % minutes) / seconds);

    const formattedDays =
      remainsDays < 10 ? `0${remainsDays}` : `${remainsDays}`;
    const formattedHours =
      remainsHours < 10 ? `0${remainsHours}` : `${remainsHours}`;
    const formattedMinutes =
      remainsMinutes < 10 ? `0${remainsMinutes}` : `${remainsMinutes}`;
    const formattedSeconds =
      remainsSecondes < 10 ? `0${remainsSecondes}` : `${remainsSecondes}`;

    setTimerDays(formattedDays);
    setTimerHours(formattedHours);
    setTimerMinutes(formattedMinutes);
    setTimerSecondes(formattedSeconds);

    if (remains < 1000) {
      setTimerDays("00");
      setTimerHours("00");
      setTimerMinutes("00");
      setTimerSecondes("00");
    }
  };

  React.useEffect(() => {
    const intervalId = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="flex items-center gap-2">
      <div className="w-14 flex flex-col items-center gap-0.5 p-3 rounded-sm bg-shade-900 text-shade-100">
        <Title level="h3" ariaLevel={3} className="font-bold">
          {timerDays || "00"}
        </Title>
        <p className="text-xs">Days</p>
      </div>

      <div className="w-14 flex flex-col items-center gap-0.5 p-3  rounded-sm bg-shade-900 text-shade-100">
        <Title level="h3" ariaLevel={3} className="font-bold">
          {timerHours || "00"}
        </Title>
        <p className="text-xs">Hour</p>
      </div>

      <div className="w-14 flex flex-col items-center gap-0.5 p-3 rounded-sm bg-shade-900 text-shade-100">
        <Title level="h3" ariaLevel={3} className="font-bold">
          {timerMinutes || "00"}
        </Title>
        <p className="text-xs">Min</p>
      </div>

      <div className="w-14 flex flex-col items-center gap-0.5 p-3 rounded-sm bg-shade-900 text-shade-100">
        <Title level="h3" ariaLevel={3} className="font-bold">
          {timerSecondes || "00"}
        </Title>
        <p className="text-xs">Sec</p>
      </div>
    </div>
  );
};

export default CountDownTimer;
