import styled from "styled-components";
import { useState } from "react";

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

  const getWeather = async () => {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=33.365137&lon=-85.50586&units=imperial&exclude=minutely,hourly&appid=0ebabda9589d4710278830f6c9e0b176"
    );
    const json = await res.json();
    console.log(json);
    return json;
  };

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

  return (
    <Container>
      <Headline>3-day Weather</Headline>
      <Today>
        Today {currentTemp}°
        <img src={currentIcon} alt="Weather Icon" />
        {currentMain}
      </Today>
      <Tomorrow>
        Tomorrow {tomorrowMax}° / {tomorrowMin}°
        <img src={tomorrowIcon} alt="Weather Icon" />
        {tomorrowMain}
      </Tomorrow>
      <NextDay>
        Next day {dayAfterMax}° / {dayAfterMin}°
        <img src={dayAfterIcon} alt="Weather Icon" />
        {dayAfterMain}
      </NextDay>
    </Container>
  );
};

export default Weather;

// Styles
const Container = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 32px;
  font-weight: 700;
  color: #222;
`;

const Headline = styled.h1`
  font-size: 48px;
  font-family: "Anton";
`;

const Today = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;

const Tomorrow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

const NextDay = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin-top: -50px;
`;

// API key for openweathermap
// 0ebabda9589d4710278830f6c9e0b176
