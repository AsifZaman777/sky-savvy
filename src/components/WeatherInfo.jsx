import React from 'react';
import { UilTemperatureHalf } from '@iconscout/react-unicons'
import { UilCircle } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilSunset } from '@iconscout/react-unicons'
import { UilArrowUp } from '@iconscout/react-unicons'
import { UilArrowDown } from '@iconscout/react-unicons'

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

            <div className='flex flex-row text-white text-sm items-center
            justify-center space-x-2 py-3'>
                <div className='flex flex-row space-x-1'>
                    <UilSun size="20"/>
                    <p>Rise: <span className='text-sm'>6:30 AM</span></p>
                </div>
                <p>|</p>
                <div className='flex flex-row space-x-1'>
                    <UilSunset size="20"/>
                    <p>Set: <span className='text-sm'>6:30 PM</span></p>
                </div>
                <div className='flex flex-row space-x-1'>
                    <UilArrowUp size="20"/>
                    <p>High: <span className='text-sm'>36°</span></p>
                </div>
                <p>|</p>
                <div className='flex flex-row space-x-1'>
                    <UilArrowDown size="20"/>
                    <p>Low: <span className='text-sm'>29°</span></p>
                </div>

            </div>

     


        </div>
    );
};

export default WeatherInfo;