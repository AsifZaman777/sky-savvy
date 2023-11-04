import React from "react";
import { UilTemperatureHalf } from "@iconscout/react-unicons";
import { UilCircle } from "@iconscout/react-unicons";
import { UilWind } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { UilSunset } from "@iconscout/react-unicons";
import { UilArrowUp } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";
import { DateTime } from "luxon";

const WeatherInfo = ({ weather }) => {
  const {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  } = weather;

  const formattedSunrise = DateTime.fromSeconds(sunrise).toFormat("h:mm");
  const formattedSunset = DateTime.fromSeconds(sunset).toFormat("h:mm");

  return (
    <div>

           <div
        className="flex items-center justify-center py-6
            text-md text-cyan-300"
      >
        ({country})
      </div>  
      <div
        className="flex items-center justify-center py-6
            text-xl text-cyan-300"
      >
        {details}
      </div>

      <div
        className="flex flex-row items-center justify-around text-white
            py-3"
      >
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Weather Icon"
          className="w-20"
        />
        <p className="text-5xl">{Math.round(temp)}°</p>
        <div className="flex font-light flex-col text-sm text-cyan-100">
          <div className="flex flex-col">
            <div
              className="flex flex-row font-light text-white items-center
                justify-center py-0.5"
            >
              <UilTemperatureHalf size="18" className="mr-1" />
              <p>Body feels {feels_like}</p>
            </div>
            <div
              className="flex flex-row font-light text-white items-center
                justify-center py-0.5"
            >
              <UilCircle size="14" className="mr-1" />
              <p>Humiduty: {humidity}%</p>
            </div>
           
            <div
              className="flex flex-row font-light text-white items-center
                justify-center py-0.5"
            >
              <UilWind size="18" className="mr-1" />
              <p>{speed} km/h</p>
            </div>
            <div
              className="flex flex-row font-light text-white items-center
                justify-center py-0.5"
            >
              <p>lat / lon : {(lat) +" / "+ (lon)}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row text-white text-sm items-center
            justify-center space-x-2 py-3"
      >
        <div className="flex flex-row space-x-1">
          <UilSun size="20" />
          <p>
            Rise: <span className="text-sm">{formattedSunrise} AM</span>
          </p>
        </div>
        <p>|</p>
        <div className="flex flex-row space-x-1">
          <UilSunset size="20" />
          <p>
            Set: <span className="text-sm">{formattedSunset} PM</span>
          </p>
        </div>
        <div className="flex flex-row space-x-1">
          <UilArrowUp size="20" />
          <p>
            High: <span className="text-sm">{Math.round(temp_max)+"°"}</span>
          </p>
        </div>
        <p>|</p>
        <div className="flex flex-row space-x-1">
          <UilArrowDown size="20" />
          <p>
            Low: <span className="text-sm">{Math.round(temp_min)+"°"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
