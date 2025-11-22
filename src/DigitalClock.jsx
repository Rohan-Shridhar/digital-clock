import React, { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime() {
    let hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const meridien = hour > 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    return `${padZero(hour)}:${padZero(min)}:${padZero(sec)} ${meridien}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return <div className="dc-container">{formatTime()}</div>;
}
export default DigitalClock;
