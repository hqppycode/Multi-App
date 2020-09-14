import styled from "styled-components";
import { useState, useEffect } from "react";

const Weather = () => {
  // Current Weather
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentMain, setCurrentMain] = useState("");
  const [currentIcon, setCurrentIcon] = useState("");

  // Tomorrow's Weather
  const [tomorrowMax, setTomorrowMax] = useState("");
  const [tomorrowMin, setTomorrowMin] = useState("");
  const [tomorrowMain, setTomorrowMain] = useState("");
  const [tomorrowIcon, setTomorrowIcon] = useState("");

  // Day After Tomorrow
  const [dayAfterMax, setdayAfterMax] = useState("");
  const [dayAfterMin, setdayAfterMin] = useState("");
  const [dayAfterMain, setdayAfterMain] = useState("");
  const [dayAfterIcon, setdayAfterIcon] = useState("");

  // Day
  const [thirdDay, setThirdDay] = useState("Next");

  // API call
  const getWeather = async () => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.365137&lon=-85.50586&units=imperial&exclude=minutely,hourly&appid=0ebabda9589d4710278830f6c9e0b176"
    );
    const json = await res.json();
    return json;
  };

  // API call on page load
  useEffect(() => {
    getWeather().then((res) => {
      // Current Weather
      setCurrentTemp(Math.trunc(Number(res.current.temp))); //Math.trunc(Number(res.daily[0].temp.min))
      setCurrentMain(res.current.weather[0].main);
      setCurrentIcon(
        `http://openweathermap.org/img/wn/${res.current.weather[0].icon}@2x.png`
      );
      // Tomorrow's Weather
      setTomorrowMax(Math.trunc(Number(res.daily[0].temp.max)));
      setTomorrowMin(Math.trunc(Number(res.daily[0].temp.min)));
      setTomorrowMain(res.daily[0].weather[0].main);
      setTomorrowIcon(
        `http://openweathermap.org/img/wn/${res.daily[0].weather[0].icon}@2x.png`
      );
      // Day After Weather
      setdayAfterMax(Math.trunc(Number(res.daily[1].temp.max)));
      setdayAfterMin(Math.trunc(Number(res.daily[1].temp.min)));
      setdayAfterMain(res.daily[1].weather[0].main);
      setdayAfterIcon(
        `http://openweathermap.org/img/wn/${res.daily[1].weather[0].icon}@2x.png`
      );
    });
  }, []);

  // Switch statement to set the day after tomorrow
  useEffect(() => {
    let num = new Date().getDay();
    switch (num) {
      case 0:
        setThirdDay("Tuesday");
        break;
      case 1:
        setThirdDay("Wednesday");
        break;
      case 2:
        setThirdDay("Thursday");
        break;
      case 3:
        setThirdDay("Friday");
        break;
      case 4:
        setThirdDay("Saturday");
        break;
      case 5:
        setThirdDay("Sunday");
        break;
      case 6:
        setThirdDay("Monday");
        break;
    }
  }, []);

  return (
    <Container>
      <Day>
        <Bold>Today</Bold> {currentTemp}°
        <img src={currentIcon} alt="Weather Icon" />
        {currentMain}
      </Day>
      <Day>
        <Bold>Tomorrow</Bold> {tomorrowMax}° / {tomorrowMin}°
        <img src={tomorrowIcon} alt="Weather Icon" />
        {tomorrowMain}
      </Day>
      <DaySmall>
        <BoldSmall>{thirdDay}</BoldSmall> {dayAfterMax}° / {dayAfterMin}°
        <img src={dayAfterIcon} alt="Weather Icon" />
        {dayAfterMain}
      </DaySmall>
    </Container>
  );
};

export default Weather;

// Styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 50px 50px;
  font-size: 1.75rem;
  font-weight: 400;
  color: #222;
`;

const Day = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
`;

const Bold = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-right: 1rem;
`;

const BoldSmall = styled.div`
  font-size: 2rem;
  font-weight: 400;
  margin-right: 1rem;
  color: #444;
`;

const DaySmall = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.25rem;
  color: #444;
`;

// API key for openweathermap
// 0ebabda9589d4710278830f6c9e0b176
