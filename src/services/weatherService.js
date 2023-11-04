import { DateTime } from "luxon";


const asifAPIKey ="2cf8109af07210c8faf26e78cd1f5620";
const baseURL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
  const url = new URL(baseURL + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: asifAPIKey });

  return fetch(url)
    .then((res) => res.json());
};


const formatCurrentWeather = (data) =>
{
  //destruturing the data we need from the api
    const {
      coord: {lat,lon},
      main: {temp,feels_like,temp_min, temp_max, humidity},
      name,
      dt,
      sys: {country, sunrise, sunset},
      weather,
      wind: {speed},

    } = data

    const {main: details, icon} = weather[0];
   
    return {lat,lon,temp,feels_like,temp_min, temp_max, humidity,name,
      dt,country, sunrise, sunset,details,icon,speed}

}


const getFormattedWeatherData = async (searchParams) =>
{
  const formattedCurrentWeather = await getWeatherData('weather',searchParams)
  .then(formatCurrentWeather); 

  return {...formattedCurrentWeather};
}

export default getFormattedWeatherData;



