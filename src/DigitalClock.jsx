import React, { useState, useEffect } from "react";
import img1 from "/public/totoro_1.jpeg";
import img2 from "/public/totoro_2.jpeg";
import img3 from "/public/totoro_3.jpeg";
import btn from "/public/btn.gif";


function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  const changeBackground = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  }
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

  return <div className="clock" 
              style={{backgroundImage: `url(${images[currentImageIndex]})`}}
              ><img  onClick={changeBackground} src={btn} title="Change Background" className="img-btn"/>
              <div className="time-band">
                {formatTime()}
              </div>
          </div>;
}
export default DigitalClock;
