import { useEffect, useState } from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'

import CityButtons from './components/CityButtons';
import InputFields from './components/inputFields';
import TimePanel from './components/TimePanel';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {

  const [query,setQuery]=useState({q:'dhaka'});
  const [units,setUnits]= useState('metric');
  const [weather,setWeather]= useState(null);


  useEffect(()=>
  {
    const fetchWeather = async () =>
  {
    //destructing dhaka
   await getFormattedWeatherData({...query,units})
   .then(data=>
    {
      setWeather(data);
      // console.log(data);
    });
  };
    fetchWeather();
  },[query,units]);

  return (
    <div className="mx-auto rounded-md max-w-screen-md mt-4 py-5 px-32 backdrop-blur-lg bg-white/20">
      <CityButtons setQuery={setQuery}/>
      <InputFields  setQuery={setQuery} units={units}
      setUnits={setUnits}/>
  
      {weather ? ( // Check if weather data is available
        <div className="div">
          <TimePanel weather={weather} query={query}/>
          <WeatherInfo weather={weather} />
          <Forecast title="hourly forecast" weather={weather} />
          <Forecast title="daily forecast" weather={weather} />
        </div>
      ) : (
        <div className='text-white font-medium animate-pulse mt-4'>Loading...</div> // Display a loading indicator
      )}
    </div>
  );
  
}

export default App
