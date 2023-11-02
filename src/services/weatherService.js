
const asifAPIKey ="2cf8109af07210c8faf26e78cd1f5620";
const baseURL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType, searchParams) => {
  const url = new URL(baseURL + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: asifAPIKey });

  return fetch(url)
    .then((res) => res.json());
};





