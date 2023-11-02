import { useEffect, useState } from 'react'
import UilReact from '@iconscout/react-unicons/icons/uil-react'

import CityButtons from './components/CityButtons';
import InputFields from './components/inputFields';
import TimePanel from './components/TimePanel';
import WeatherInfo from './components/WeatherInfo';
import Forecast from './components/Forecast';


function App() {

  return ( 

    <div className="mx-auto rounded-md  max-w-screen-md mt-4 py-5 px-32 
    backdrop-blur-lg bg-white/20">
     <CityButtons/>
     <InputFields/>
     <TimePanel/>
     <WeatherInfo/>
     <Forecast title="hourly forecast"/>
     <Forecast title="daily forecast"/>
    </div>
  )
}

export default App
