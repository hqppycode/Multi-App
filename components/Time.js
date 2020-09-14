import { useState } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setTimeout(function () {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return <div style={{ fontSize: "1.75rem" }}>{time}</div>;
};

export default Time;
