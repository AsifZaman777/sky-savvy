import React from 'react';
import { UilTemperatureHalf } from '@iconscout/react-unicons'
import { UilCircle } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'

const WeatherInfo = () => {
    return (
        <div>
            <div className='flex items-center justify-center py-6
            text-xl text-cyan-300'>
                Cloudy
            </div>

            <div className='flex flex-row items-center justify-around text-white
            py-3'>
            <img src=" https://openweathermap.org/img/wn/01d@2x.png" alt="SunImage"
            className='w-20' />
            <p className='text-5xl'>34°</p>
            <div className='flex font-light flex-col text-sm text-cyan-100'>
             <div className='flex flex-col'>
                <div className='flex flex-row font-light text-white items-center
                justify-center py-0.5'>
                     <UilTemperatureHalf size="18" className="mr-1"/>
                     <p>Body feels 36°</p> 
                </div>
                <div className='flex flex-row font-light text-white items-center
                justify-center py-0.5'>
                     <UilCircle size="14" className="mr-1"/>
                     <p>Humiduty: 60%</p> 
                </div>
                <div className='flex flex-row font-light text-white items-center
                justify-center py-0.5'>
                    <UilWind size="18" className="mr-1"/>
                     <p>Wind: 3 km / h</p> 
                </div>
             </div>
            </div>
            </div>
        </div>
    );
};

export default WeatherInfo;