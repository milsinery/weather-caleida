import React from "react";
import "./Informer.css";

const Informer = ({ data }) => {
  const {
    wx_desc,
    temp_c,
    winddir_compass,
    windspd_ms,
  } = data;

  return (
    <div className="informer">
      <div className="informer__title">
        <h1>Saint Petersburg</h1>
        <h2>{temp_c}</h2>
        <h3>{wx_desc}</h3>
        <p>
          {winddir_compass} {Math.round(windspd_ms)} m/s
        </p>
      </div>
      <div className="informer_description"></div>
    </div>
  );
};

export default Informer;

// 0	Sunny skies/Clear skies
// 1	Partly cloudy skies
// 2	Cloudy skies
// 3	Overcast skies
// 10	Mist
// 21	Patchy rain possible
// 22	Patchy snow possible
// 23	Patchy sleet possible
// 24	Patchy freezing drizzle possible
// 29	Thundery outbreaks possible
// 38	Blowing snow
// 39	Blizzard
// 45	Fog
// 49	Freezing fog
// 50	Patchy light drizzle
// 51	Light drizzle
// 56	Freezing drizzle
// 57	Heavy freezing drizzle
// 60	Patchy light rain
// 61	Light rain
// 62	Moderate rain at times
// 63	Moderate rain
// 64	Heavy rain at times
// 65	Heavy rain
// 66	Light freezing rain
// 67	Moderate or heavy freezing rain
// 68	Light sleet
// 69	Moderate or heavy sleet
// 70	Patchy light snow
// 71	Light snow
// 72	Patchy moderate snow
// 73	Moderate snow
// 74	Patchy heavy snow
// 75	Heavy snow
// 79	Ice pellets
// 80	Light rain shower
// 81	Moderate or heavy rain shower
// 82	Torrential rain shower
// 83	Light sleet showers
// 84	Moderate or heavy sleet showers
// 85	Light snow showers
// 86	Moderate or heavy snow showers
// 87	Light showers of ice pellets
// 88	Moderate or heavy showers of ice pellets
// 91	Patchy light rain with thunder
// 92	Moderate or heavy rain with thunder
// 93	Patchy light snow with thunder
// 94	Moderate or heavy snow with thunder
